import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'

const ILLO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm5GEDhhVvN5X0nbDXKz-ReoGnFDAzzJwn_a3GKDZIn0Pma9N4C0nzXaZJUPvXxylcsDQoLSHq-BcqsM_nypb3uaT8S-fqGZb_9-ztsmUzqkKYLdZgOJwN5KAqteJJWAXr4hrCSzqQ9gRGTjem69oWrvgQsD0u4ZCAUhShHrkxSfp-49onHZoSWpeJHz14zBJfW-lx-_hT4FRL1i_lCoL6dmPlNer3Rw9O3_obD33z6WAW0Em0mRhLUClWh7UZ68NQ40caTfvWvQW'

const GOOGLE_ICON =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC5-yyonhrZ0GldwRXEbgfdcMh3fHR5kC2hXC8KezXZ2GoT2XI-kaBgjNeGqUqwwcNg8Uph0dLpJ3jgJzlhwYT-IHg4uK3v2qwV19VOs5cP7IUeEqSN0qF0IGGJxqPjICNBez4e1MLJE_PPStSyWAC0vWx8gZGUTzKXr4DsNNZCk63mHkB2ZcLI1oRf0OcX3kUufjnIeKeG4wjqIu0qVOKvVyKQP5Gs_BkltHJEkPnsjY06mNhEDvG6LTxXrP9znQcaFFYUrPgWZl8E'

export default function Login() {
  const navigate = useNavigate()
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const { t, toggle, langLabel } = useLang()
  const [showPwd, setShowPwd] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [busy, setBusy] = useState(false)

  function friendlyError(e: unknown): string {
    const code = (e as { code?: string })?.code || ''
    if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found'))
      return 'Incorrect email or password.'
    if (code.includes('invalid-email')) return 'Please enter a valid email address.'
    if (code.includes('too-many-requests')) return 'Too many attempts. Please try again later.'
    if (code.includes('popup-closed')) return 'Google sign-in was cancelled.'
    return (e as Error)?.message || 'Something went wrong. Please try again.'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setInfo('')
    setBusy(true)
    try {
      await login(email.trim(), password)
      navigate('/dashboard')
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleGoogle() {
    setError('')
    setInfo('')
    setBusy(true)
    try {
      await loginWithGoogle()
      navigate('/dashboard')
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleForgot() {
    setError('')
    setInfo('')
    if (!email.trim()) {
      setInfo(t('auth.forgotPrompt'))
      return
    }
    try {
      await resetPassword(email.trim())
      setInfo(t('auth.resetSent'))
    } catch (err) {
      setError(friendlyError(err))
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface">
      <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest overflow-hidden">
        {/* Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 bg-primary-container relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-secondary-container opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-tertiary-fixed-dim opacity-10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center space-y-8">
            <div className="bg-surface-container-lowest/20 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
              <img alt="Nazariyen Learning" src={ILLO} className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
            <div className="space-y-4">
              <h1 className="font-headline-lg text-headline-lg text-on-primary-container">Learn Smarter, Not Harder</h1>
              <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-md mx-auto">
                Your AI Buddy is waiting to help you ace your Class 10 journey. Join thousands of super learners today!
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 space-y-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="smart_toy" className="text-white text-3xl" />
              </div>
              <span className="font-headline-lg text-headline-lg font-black tracking-tight text-primary">Nazariyen</span>
            </Link>
            <button
              onClick={toggle}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors"
            >
              <Icon name="language" className="text-on-surface-variant text-lg" />
              <span className="font-label-md text-sm text-on-surface">{langLabel}</span>
            </button>
          </div>
          <div className="space-y-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">{t('auth.welcomeBack')}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('auth.loginSubtitle')}</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-error-container text-on-error-container text-sm">
              <Icon name="error" className="text-lg" />
              {error}
            </div>
          )}
          {info && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 text-primary text-sm">
              <Icon name="info" className="text-lg" />
              {info}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="identifier">
                {t('auth.email')}
              </label>
              <div className="relative group">
                <Icon
                  name="mail"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                />
                <input
                  id="identifier"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('auth.emailPlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-2xl outline-none transition-all font-body-md text-body-md text-on-surface"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">{t('auth.password')}</label>
                <button type="button" onClick={handleForgot} className="font-label-md text-label-md text-primary hover:underline">
                  {t('auth.forgotPassword')}
                </button>
              </div>
              <div className="relative group">
                <Icon
                  name="lock"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                />
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-2xl outline-none transition-all font-body-md text-body-md text-on-surface"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                >
                  <Icon name={showPwd ? 'visibility_off' : 'visibility'} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full py-4 bg-primary text-white rounded-2xl font-label-md text-label-md btn-3d shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {busy ? 'Please wait…' : t('auth.login')}
              {!busy && <Icon name="arrow_forward" className="text-sm" />}
            </button>
          </form>

          <div className="relative flex items-center gap-4">
            <div className="flex-grow h-px bg-outline-variant" />
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">{t('auth.orContinue')}</span>
            <div className="flex-grow h-px bg-outline-variant" />
          </div>

          <button
            onClick={handleGoogle}
            disabled={busy}
            className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-2xl bg-surface-container-lowest border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all duration-300 group disabled:opacity-60"
          >
            <img alt="Google" src={GOOGLE_ICON} className="w-5 h-5" />
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary">{t('auth.google')}</span>
          </button>

          <p className="text-center font-body-md text-body-md text-on-surface-variant">
            {t('auth.newHere')}{' '}
            <Link to="/signup" className="text-primary font-bold hover:underline">
              {t('auth.createAccount')}
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
