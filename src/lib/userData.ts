import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  limit,
  increment,
  serverTimestamp,
} from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import { db, firebaseEnabled } from './firebase'

// db is a `let` binding, so TS drops the non-null narrowing inside async
// closures. This helper re-asserts it once we know Firebase is enabled.
function fdb(): Firestore {
  return db as Firestore
}

export type UserProfile = {
  uid: string
  name: string
  email: string
  photoURL?: string
  classLevel?: string
  interests?: string[]
  xp: number
  streak: number
}

export type RecentItem = {
  id: string
  bookId: string
  title: string
  subject: string
  chapter: string
  progress: number
  color: string
  img: string
  updatedAt: number
}

export type Bookmark = {
  id: string
  bookId: string
  subject: string
  page: string
  text: string
  color: string
  createdAt: number
}

// ── Local-mode helpers (used when Firebase isn't configured) ────
const lsKey = (uid: string, kind: string) => `nazariyen.${uid}.${kind}`
function lsGet<T>(uid: string, kind: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(lsKey(uid, kind))
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}
function lsSet(uid: string, kind: string, value: unknown) {
  localStorage.setItem(lsKey(uid, kind), JSON.stringify(value))
}

// ── Profile ─────────────────────────────────────────────────────
export async function getProfile(uid: string): Promise<UserProfile | null> {
  if (firebaseEnabled && db) {
    const snap = await getDoc(doc(fdb(), 'users', uid))
    return snap.exists() ? (snap.data() as UserProfile) : null
  }
  return lsGet<UserProfile | null>(uid, 'profile', null)
}

export async function upsertProfile(uid: string, data: Partial<UserProfile>): Promise<UserProfile> {
  const existing = (await getProfile(uid)) || {
    uid,
    name: '',
    email: '',
    xp: 0,
    streak: 1,
  }
  const merged: UserProfile = { ...existing, ...data, uid }
  if (firebaseEnabled && db) {
    await setDoc(doc(fdb(), 'users', uid), { ...merged, updatedAt: serverTimestamp() }, { merge: true })
  } else {
    lsSet(uid, 'profile', merged)
  }
  return merged
}

export async function addXp(uid: string, amount: number): Promise<void> {
  if (firebaseEnabled && db) {
    await updateDoc(doc(fdb(), 'users', uid), { xp: increment(amount) }).catch(async () => {
      await setDoc(doc(fdb(), 'users', uid), { xp: amount }, { merge: true })
    })
  } else {
    const p = lsGet<UserProfile | null>(uid, 'profile', null)
    if (p) lsSet(uid, 'profile', { ...p, xp: (p.xp || 0) + amount })
  }
}

// ── Recently read ───────────────────────────────────────────────
export async function listRecent(uid: string): Promise<RecentItem[]> {
  if (firebaseEnabled && db) {
    const q = query(collection(fdb(), 'users', uid, 'recent'), orderBy('updatedAt', 'desc'), limit(10))
    const snap = await getDocs(q)
    return snap.docs.map((d) => d.data() as RecentItem)
  }
  return lsGet<RecentItem[]>(uid, 'recent', []).sort((a, b) => b.updatedAt - a.updatedAt)
}

export async function addRecent(uid: string, item: Omit<RecentItem, 'updatedAt'>): Promise<void> {
  const record: RecentItem = { ...item, updatedAt: Date.now() }
  if (firebaseEnabled && db) {
    await setDoc(doc(fdb(), 'users', uid, 'recent', item.id), record, { merge: true })
  } else {
    const list = lsGet<RecentItem[]>(uid, 'recent', []).filter((r) => r.id !== item.id)
    list.unshift(record)
    lsSet(uid, 'recent', list.slice(0, 10))
  }
}

// ── Bookmarks ───────────────────────────────────────────────────
export async function listBookmarks(uid: string): Promise<Bookmark[]> {
  if (firebaseEnabled && db) {
    const q = query(collection(fdb(), 'users', uid, 'bookmarks'), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return snap.docs.map((d) => d.data() as Bookmark)
  }
  return lsGet<Bookmark[]>(uid, 'bookmarks', []).sort((a, b) => b.createdAt - a.createdAt)
}

export async function addBookmark(uid: string, item: Omit<Bookmark, 'createdAt'>): Promise<void> {
  const record: Bookmark = { ...item, createdAt: Date.now() }
  if (firebaseEnabled && db) {
    await setDoc(doc(fdb(), 'users', uid, 'bookmarks', item.id), record, { merge: true })
  } else {
    const list = lsGet<Bookmark[]>(uid, 'bookmarks', []).filter((b) => b.id !== item.id)
    list.unshift(record)
    lsSet(uid, 'bookmarks', list)
  }
}

export async function removeBookmark(uid: string, id: string): Promise<void> {
  if (firebaseEnabled && db) {
    await deleteDoc(doc(fdb(), 'users', uid, 'bookmarks', id))
  } else {
    const list = lsGet<Bookmark[]>(uid, 'bookmarks', []).filter((b) => b.id !== id)
    lsSet(uid, 'bookmarks', list)
  }
}
