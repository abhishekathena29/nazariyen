import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile as fbUpdateProfile,
  sendPasswordResetEmail,
  type User,
} from 'firebase/auth'
import { auth, googleProvider, firebaseEnabled } from '../lib/firebase'
import {
  getProfile,
  upsertProfile,
  listRecent,
  listBookmarks,
  addRecent as dataAddRecent,
  addBookmark as dataAddBookmark,
  removeBookmark as dataRemoveBookmark,
  addXp as dataAddXp,
  type UserProfile,
  type RecentItem,
  type Bookmark,
} from '../lib/userData'

type AuthUser = { uid: string; email: string; displayName: string; photoURL?: string }

type AuthCtx = {
  user: AuthUser | null
  profile: UserProfile | null
  loading: boolean
  recent: RecentItem[]
  bookmarks: Bookmark[]
  signup: (name: string, email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  saveProfile: (data: Partial<UserProfile>) => Promise<void>
  addRecent: (item: Omit<RecentItem, 'updatedAt'>) => Promise<void>
  addBookmark: (item: Omit<Bookmark, 'createdAt'>) => Promise<void>
  removeBookmark: (id: string) => Promise<void>
  addXp: (amount: number) => Promise<void>
}

const Ctx = createContext<AuthCtx | null>(null)
const LOCAL_USER_KEY = 'nazariyen.localUser'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [recent, setRecent] = useState<RecentItem[]>([])
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [loading, setLoading] = useState(true)

  const loadUserData = useCallback(async (uid: string) => {
    const [prof, rec, bm] = await Promise.all([getProfile(uid), listRecent(uid), listBookmarks(uid)])
    setProfile(prof)
    setRecent(rec)
    setBookmarks(bm)
  }, [])

  const activate = useCallback(
    async (u: AuthUser) => {
      setUser(u)
      // Ensure a profile document exists.
      let prof = await getProfile(u.uid)
      if (!prof) {
        prof = await upsertProfile(u.uid, {
          name: u.displayName || 'Learner',
          email: u.email,
          photoURL: u.photoURL,
          xp: 0,
          streak: 1,
        })
      }
      await loadUserData(u.uid)
      setProfile(prof)
    },
    [loadUserData],
  )

  // ── Session bootstrap ─────────────────────────────────────────
  useEffect(() => {
    if (firebaseEnabled && auth) {
      const unsub = onAuthStateChanged(auth, async (fbUser: User | null) => {
        if (fbUser) {
          await activate({
            uid: fbUser.uid,
            email: fbUser.email || '',
            displayName: fbUser.displayName || 'Learner',
            photoURL: fbUser.photoURL || undefined,
          })
        } else {
          setUser(null)
          setProfile(null)
          setRecent([])
          setBookmarks([])
        }
        setLoading(false)
      })
      return unsub
    }
    // Local mode: restore any previous local session (async so we never call
    // setState synchronously in the effect body).
    let cancelled = false
    void (async () => {
      const raw = localStorage.getItem(LOCAL_USER_KEY)
      if (raw && !cancelled) {
        await activate(JSON.parse(raw) as AuthUser)
      }
      if (!cancelled) setLoading(false)
    })()
    return () => {
      cancelled = true
    }
  }, [activate])

  // ── Local-mode session helpers ────────────────────────────────
  const startLocalSession = useCallback(
    async (u: AuthUser) => {
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u))
      await activate(u)
    },
    [activate],
  )

  // ── Auth actions ──────────────────────────────────────────────
  const signup = useCallback(
    async (name: string, email: string, password: string) => {
      if (firebaseEnabled && auth) {
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        await fbUpdateProfile(cred.user, { displayName: name })
        await upsertProfile(cred.user.uid, { name, email, xp: 0, streak: 1 })
      } else {
        const uid = `local-${btoa(email).replace(/[^a-z0-9]/gi, '').slice(0, 16)}`
        await upsertProfile(uid, { name, email, xp: 0, streak: 1 })
        await startLocalSession({ uid, email, displayName: name })
      }
    },
    [startLocalSession],
  )

  const login = useCallback(
    async (email: string, password: string) => {
      if (firebaseEnabled && auth) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        const uid = `local-${btoa(email).replace(/[^a-z0-9]/gi, '').slice(0, 16)}`
        const existing = await getProfile(uid)
        await startLocalSession({ uid, email, displayName: existing?.name || email.split('@')[0] })
      }
    },
    [startLocalSession],
  )

  const loginWithGoogle = useCallback(async () => {
    if (firebaseEnabled && auth && googleProvider) {
      await signInWithPopup(auth, googleProvider)
    } else {
      const uid = 'local-google-demo'
      await startLocalSession({ uid, email: 'demo@nazariyen.app', displayName: 'Demo Learner' })
    }
  }, [startLocalSession])

  const logout = useCallback(async () => {
    if (firebaseEnabled && auth) {
      await signOut(auth)
    } else {
      localStorage.removeItem(LOCAL_USER_KEY)
      setUser(null)
      setProfile(null)
      setRecent([])
      setBookmarks([])
    }
  }, [])

  const resetPassword = useCallback(async (email: string) => {
    if (firebaseEnabled && auth) {
      await sendPasswordResetEmail(auth, email)
    }
  }, [])

  // ── Data actions ──────────────────────────────────────────────
  const saveProfile = useCallback(
    async (data: Partial<UserProfile>) => {
      if (!user) return
      const updated = await upsertProfile(user.uid, data)
      setProfile(updated)
    },
    [user],
  )

  const addRecent = useCallback(
    async (item: Omit<RecentItem, 'updatedAt'>) => {
      if (!user) return
      await dataAddRecent(user.uid, item)
      setRecent(await listRecent(user.uid))
    },
    [user],
  )

  const addBookmark = useCallback(
    async (item: Omit<Bookmark, 'createdAt'>) => {
      if (!user) return
      await dataAddBookmark(user.uid, item)
      setBookmarks(await listBookmarks(user.uid))
    },
    [user],
  )

  const removeBookmark = useCallback(
    async (id: string) => {
      if (!user) return
      await dataRemoveBookmark(user.uid, id)
      setBookmarks(await listBookmarks(user.uid))
    },
    [user],
  )

  const addXp = useCallback(
    async (amount: number) => {
      if (!user) return
      await dataAddXp(user.uid, amount)
      setProfile((p) => (p ? { ...p, xp: (p.xp || 0) + amount } : p))
    },
    [user],
  )

  return (
    <Ctx.Provider
      value={{
        user,
        profile,
        loading,
        recent,
        bookmarks,
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        saveProfile,
        addRecent,
        addBookmark,
        removeBookmark,
        addXp,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
