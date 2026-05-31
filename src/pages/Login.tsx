import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const ILLO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm5GEDhhVvN5X0nbDXKz-ReoGnFDAzzJwn_a3GKDZIn0Pma9N4C0nzXaZJUPvXxylcsDQoLSHq-BcqsM_nypb3uaT8S-fqGZb_9-ztsmUzqkKYLdZgOJwN5KAqteJJWAXr4hrCSzqQ9gRGTjem69oWrvgQsD0u4ZCAUhShHrkxSfp-49onHZoSWpeJHz14zBJfW-lx-_hT4FRL1i_lCoL6dmPlNer3Rw9O3_obD33z6WAW0Em0mRhLUClWh7UZ68NQ40caTfvWvQW'

const GOOGLE_ICON =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC5-yyonhrZ0GldwRXEbgfdcMh3fHR5kC2hXC8KezXZ2GoT2XI-kaBgjNeGqUqwwcNg8Uph0dLpJ3jgJzlhwYT-IHg4uK3v2qwV19VOs5cP7IUeEqSN0qF0IGGJxqPjICNBez4e1MLJE_PPStSyWAC0vWx8gZGUTzKXr4DsNNZCk63mHkB2ZcLI1oRf0OcX3kUufjnIeKeG4wjqIu0qVOKvVyKQP5Gs_BkltHJEkPnsjY06mNhEDvG6LTxXrP9znQcaFFYUrPgWZl8E'

export default function Login() {
  const navigate = useNavigate()
  const [showPwd, setShowPwd] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden bg-surface">
      <main className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.08)] min-h-[700px]">
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
            <div className="absolute top-20 right-10 animate-bounce">
              <div className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border-b-2 border-tertiary-container">
                <Icon name="stars" className="text-tertiary" filled />
                <span className="font-label-md text-label-md">1,250 XP Today!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 space-y-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="smart_toy" className="text-white text-3xl" />
            </div>
            <span className="font-headline-lg text-headline-lg font-black tracking-tight text-primary">Nazariyen</span>
          </Link>
          <div className="space-y-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">Welcome Back!</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Log in to continue your learning quest.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="identifier">
                Email or Phone Number
              </label>
              <div className="relative group">
                <Icon
                  name="person"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                />
                <input
                  id="identifier"
                  type="text"
                  placeholder="Enter your email or phone"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-2xl outline-none transition-all font-body-md text-body-md text-on-surface"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                <a className="font-label-md text-label-md text-primary hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="relative group">
                <Icon
                  name="lock"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                />
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
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
              className="w-full py-4 bg-primary text-white rounded-2xl font-label-md text-label-md btn-3d shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              Log In
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </form>

          <div className="relative flex items-center gap-4">
            <div className="flex-grow h-px bg-outline-variant" />
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">or continue with</span>
            <div className="flex-grow h-px bg-outline-variant" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-6 rounded-2xl bg-surface-container-lowest border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all duration-300 group">
              <img alt="Google" src={GOOGLE_ICON} className="w-5 h-5" />
              <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-6 rounded-2xl bg-surface-container-lowest border-2 border-outline-variant hover:border-secondary hover:bg-surface-container-low transition-all duration-300 group">
              <Icon name="smartphone" className="text-outline group-hover:text-secondary" />
              <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-secondary">Phone OTP</span>
            </button>
          </div>

          <p className="text-center font-body-md text-body-md text-on-surface-variant">
            New to Nazariyen?{' '}
            <Link to="/signup" className="text-primary font-bold hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
