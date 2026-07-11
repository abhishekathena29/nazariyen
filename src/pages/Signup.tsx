import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'

const MASCOT =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAC5Yd4DFbvdyKFJbnnFnLzXryeZ55kta4X_RYraUy4TG18ZGDcajoJeBXP9vu5nPG7PWBQWn_M0C-OsdUX2jArER1wRfdMWH08tKhKs16cbUr-TA1Pzz5qSOl0ClbKMEgbu9hmK_7pZpJGW7gMpiWq3pb1OVI1i4POdnee__ujrtHNryaquW0Qh1nyGyDprN_5dTsT1reTHJjU6cZzEJ-y4664Kq1KjdLNVDkGN-_PNXcKhTXFPWww_93S2p-IgGsq7rwd3gVx4fAi'

const GOOGLE_ICON =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQy0ZZlPLe8JZs7JrLtJW2XGYRJOQhve9QXktVO9GaQQ-L5tEDk8r-z_WbPQzxzJiGe10iArdZtkE79lz8thEkeBY3Zm8GZRzAx_kyeEnfImnVX85GdtyyYrkK6fn7sQCiXOlX1eUIv1F39Yk5LoEKJJZsSvlkba9kkPUbucSb7RIeSyMiLeH4ZDgemnACYL15biJaa12qZoQOnKpM8ZqGfttin01or39XkYmkMjTXaXyaooDi0Yfvdmkwzh4UGijdRsxUsho7KAM'

export default function Signup() {
  const navigate = useNavigate()
  const { signup, loginWithGoogle } = useAuth()
  const { t } = useLang()
  const [showPwd, setShowPwd] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function friendlyError(e: unknown): string {
    const code = (e as { code?: string })?.code || ''
    if (code.includes('email-already-in-use')) return 'That email is already registered. Try logging in.'
    if (code.includes('weak-password')) return 'Password should be at least 6 characters.'
    if (code.includes('invalid-email')) return 'Please enter a valid email address.'
    if (code.includes('popup-closed')) return 'Google sign-up was cancelled.'
    return (e as Error)?.message || 'Something went wrong. Please try again.'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!agree) {
      setError('Please accept the Terms of Service to continue.')
      return
    }
    setBusy(true)
    try {
      await signup(name.trim(), email.trim(), password)
      navigate('/onboarding/class')
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleGoogle() {
    setError('')
    setBusy(true)
    try {
      await loginWithGoogle()
      navigate('/onboarding/class')
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md text-body-md grid lg:grid-cols-2">
      {/* Brand Side */}
      <section className="hidden lg:flex flex-col justify-center items-center bg-surface-container relative overflow-hidden p-margin-desktop">
        <div className="absolute top-10 left-10">
          <Link to="/" className="font-headline-lg text-headline-lg font-black tracking-tight text-primary">
            Nazariyen
          </Link>
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col items-center max-w-md text-center">
          <div className="mb-base animate-float">
            <img src={MASCOT} alt="Nazariyen mascot" className="w-64 h-64 object-contain" />
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">Start your learning adventure!</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Join thousands of Super Learners exploring the future of education with their very own AI Study Buddy.
          </p>
        </div>
      </section>

      {/* Form Side */}
      <section className="flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface relative">
        <div className="lg:hidden absolute top-8 left-margin-mobile flex items-center gap-2">
          <Link to="/" className="font-headline-md text-headline-md font-black tracking-tight text-primary">
            Nazariyen
          </Link>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="font-headline-lg text-headline-lg lg:text-headline-xl text-on-surface mb-2">{t('auth.createAccountTitle')}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('auth.signupSubtitle')}</p>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-2 px-4 py-3 rounded-xl bg-error-container text-on-error-container text-sm">
              <Icon name="error" className="text-lg" />
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="name">
                <Icon name="person" className="text-primary text-[18px]" />
                {t('auth.fullName')}
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Johnson"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="contact">
                <Icon name="alternate_email" className="text-primary text-[18px]" />
                {t('auth.email')}
              </label>
              <input
                id="contact"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@school.com"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="password">
                <Icon name="lock" className="text-primary text-[18px]" />
                {t('auth.createPassword')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                >
                  <Icon name={showPwd ? 'visibility_off' : 'visibility'} />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input
                id="terms"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-5 h-5 mt-0.5 text-primary border-outline-variant/50 rounded-lg focus:ring-primary"
              />
              <label className="font-body-md text-label-md text-on-surface-variant" htmlFor="terms">
                {t('auth.agreeTerms')}
              </label>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md uppercase tracking-widest btn-3d flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {busy ? 'Please wait…' : t('auth.createMyAccount')}
              {!busy && <Icon name="arrow_forward" />}
            </button>

            <div className="relative py-2 flex items-center">
              <div className="flex-grow border-t border-outline-variant/30" />
              <span className="flex-shrink mx-4 font-label-sm text-label-sm text-outline uppercase tracking-widest">{t('auth.orSignupWith')}</span>
              <div className="flex-grow border-t border-outline-variant/30" />
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              disabled={busy}
              className="w-full flex items-center justify-center gap-2 py-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors font-label-md text-label-md disabled:opacity-60"
            >
              <img alt="Google" src={GOOGLE_ICON} className="w-5 h-5" />
              {t('auth.google')}
            </button>

            <div className="text-center pt-2">
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t('auth.haveAccount')}{' '}
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">
                  {t('auth.login')}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
