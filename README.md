# Nazariyen — AI Learning Platform

A gamified NCERT learning app with an AI Study Buddy (Groq), Firebase auth +
Firestore, a full NCERT library with official links, career pathways, bookmarks,
and a bilingual **English / हिंदी** interface.

## Features

- **AI Study Buddy** — real streaming answers via the Groq API, pitched to the
  student's class. Replies in **Hindi** when the UI language is Hindi.
- **Firebase Auth** — Email/Password + Google sign-in only.
- **Firestore user data** — profile, XP, streak, recently-read and bookmarks are
  persisted per user (`users/{uid}` + `recent` / `bookmarks` subcollections).
- **NCERT Library** — real textbooks for classes 6–12 with descriptions, details,
  and official **“Open on NCERT”** links; functional bookmarks & recently-read.
- **Career Pathways** — accurate, domain-specific roadmaps (subjects, entrance
  exams, step-by-step path) for Doctor, Developer, AI, Pilot, Designer, Lawyer,
  IAS, CA, Entrepreneur, and more.
- **Bilingual** — toggle English ⇄ हिंदी anywhere; the choice persists.

> **Runs out of the box in "local mode"** (localStorage-backed) so you can click
> through everything immediately. Add real credentials in `.env` to activate
> cloud auth/Firestore and the AI Buddy.

## Setup

```bash
npm install
cp .env.example .env      # already created for you; fill in the values
npm run dev
```

### 1. Groq API (AI Study Buddy)

1. Get a free key at <https://console.groq.com/keys>.
2. Set `VITE_GROQ_API_KEY` in `.env`.
   (Optional: change `VITE_GROQ_MODEL`, default `llama-3.3-70b-versatile`.)

### 2. Firebase (Auth + Firestore)

1. Create a project at <https://console.firebase.google.com>.
2. **Authentication → Sign-in method:** enable **Email/Password** and **Google**.
3. **Firestore Database:** create a database (production or test mode).
4. **Project settings → Your apps → Web app** → copy the config into the
   `VITE_FIREBASE_*` variables in `.env`.

Suggested Firestore security rules (each user only touches their own data):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /{sub=**} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
```

Restart `npm run dev` after editing `.env`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Tech

React 19 · TypeScript · Vite · React Router · Firebase · Groq · Tailwind (CDN).

## Notes on secrets

This is a frontend-only app, so `VITE_*` values are bundled into the browser
build. Firebase web config is designed to be public (guarded by security rules).
The Groq key, however, is exposed to the client — fine for local/demo use, but
for production route AI calls through a small backend/proxy that holds the key.
`.env` is git-ignored.
