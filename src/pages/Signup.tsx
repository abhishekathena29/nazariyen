import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const MASCOT =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAC5Yd4DFbvdyKFJbnnFnLzXryeZ55kta4X_RYraUy4TG18ZGDcajoJeBXP9vu5nPG7PWBQWn_M0C-OsdUX2jArER1wRfdMWH08tKhKs16cbUr-TA1Pzz5qSOl0ClbKMEgbu9hmK_7pZpJGW7gMpiWq3pb1OVI1i4POdnee__ujrtHNryaquW0Qh1nyGyDprN_5dTsT1reTHJjU6cZzEJ-y4664Kq1KjdLNVDkGN-_PNXcKhTXFPWww_93S2p-IgGsq7rwd3gVx4fAi'

const GOOGLE_ICON =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQy0ZZlPLe8JZs7JrLtJW2XGYRJOQhve9QXktVO9GaQQ-L5tEDk8r-z_WbPQzxzJiGe10iArdZtkE79lz8thEkeBY3Zm8GZRzAx_kyeEnfImnVX85GdtyyYrkK6fn7sQCiXOlX1eUIv1F39Yk5LoEKJJZsSvlkba9kkPUbucSb7RIeSyMiLeH4ZDgemnACYL15biJaa12qZoQOnKpM8ZqGfttin01or39XkYmkMjTXaXyaooDi0Yfvdmkwzh4UGijdRsxUsho7KAM'

export default function Signup() {
  const navigate = useNavigate()
  const [showPwd, setShowPwd] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/onboarding/class')
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="bg-surface-container-lowest shadow-[0_4px_20px_rgba(37,99,235,0.08)] px-4 py-2 rounded-xl border border-outline-variant/30 flex items-center gap-2">
              <Icon name="workspace_premium" className="text-tertiary-container" filled />
              <span className="font-label-md text-label-md">Gamified Learning</span>
            </div>
            <div className="bg-surface-container-lowest shadow-[0_4px_20px_rgba(37,99,235,0.08)] px-4 py-2 rounded-xl border border-outline-variant/30 flex items-center gap-2">
              <Icon name="smart_toy" className="text-secondary" filled />
              <span className="font-label-md text-label-md">24/7 AI Tutor</span>
            </div>
          </div>
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
          <div className="mb-10 text-center lg:text-left">
            <h2 className="font-headline-lg text-headline-lg lg:text-headline-xl text-on-surface mb-2">Create Account</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Ready to level up your skills today?</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="name">
                <Icon name="person" className="text-primary text-[18px]" />
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Alex Johnson"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="contact">
                <Icon name="alternate_email" className="text-primary text-[18px]" />
                Email or Phone Number
              </label>
              <input
                id="contact"
                type="text"
                placeholder="alex@school.com"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" htmlFor="password">
                <Icon name="lock" className="text-primary text-[18px]" />
                Create Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
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
              <input id="terms" type="checkbox" className="w-5 h-5 mt-0.5 text-primary border-outline-variant/50 rounded-lg focus:ring-primary" />
              <label className="font-body-md text-label-md text-on-surface-variant" htmlFor="terms">
                I agree to the <a className="text-primary font-bold hover:underline" href="#">Terms of Service</a> and{' '}
                <a className="text-primary font-bold hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md uppercase tracking-widest btn-3d flex items-center justify-center gap-2"
            >
              Create My Account
              <Icon name="arrow_forward" />
            </button>

            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-outline-variant/30" />
              <span className="flex-shrink mx-4 font-label-sm text-label-sm text-outline uppercase tracking-widest">or sign up with</span>
              <div className="flex-grow border-t border-outline-variant/30" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors font-label-md text-label-md">
                <img alt="Google" src={GOOGLE_ICON} className="w-5 h-5" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors font-label-md text-label-md">
                <Icon name="social_leaderboard" className="text-[#1877F2]" filled />
                Facebook
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
