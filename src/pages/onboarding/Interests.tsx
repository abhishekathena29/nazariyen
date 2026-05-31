import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'

const SUBJECT_ILLO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD4_vuCwrL8t7xg5xqvV33PKzrxDrMGH9DwSYAmCi0YGEYUXmaln9v2a0sOoZI4f_eJpJy0F1OVwAujWca_cPcf9ahK8q5hR3_w-zZglXC4zcRttC-A3okFXnh0PcGhR09Pvp_PHsuPa1aEIEGV3J9Jte5Pr5Tvcyx1o_nGgv0xjQgg9DY2vebB7YfXR3HeRk-sSyAJERh6XA4IwGAW58Uo41Q7cqDYfbyoys0VkU25ijHLU4UYl5RN2E-xr_UQUgqGTUkv6UxD3CuB'

const SUBJECTS = [
  { name: 'Science', icon: 'science' },
  { name: 'Math', icon: 'calculate' },
  { name: 'History', icon: 'history_edu' },
  { name: 'English', icon: 'menu_book' },
  { name: 'Arts', icon: 'palette' },
  { name: 'Languages', icon: 'language' },
  { name: 'Coding', icon: 'computer' },
  { name: 'PE', icon: 'fitness_center' },
  { name: 'Music', icon: 'music_note' },
]

export default function Interests() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col overflow-x-hidden bg-pattern-dots">
      {/* Top progress */}
      <div className="fixed top-0 left-0 w-full h-2 bg-surface-container-high z-50">
        <div
          className="h-full bg-secondary-fixed shadow-[0_0_12px_rgba(78,222,163,0.5)] transition-all duration-700 ease-out relative"
          style={{ width: '66%' }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-secondary flex items-center justify-center">
            <Icon name="star" className="text-[10px] text-secondary font-bold" filled />
          </div>
        </div>
      </div>

      <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left card */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-2">
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(37,99,235,0.08)] border border-outline-variant/30 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 border border-primary/10">
                    <Icon name="smart_toy" className="text-primary text-4xl" filled />
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-4">Meet your personalized AI Buddy</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    By knowing what you love, we can tailor challenges and quests to your unique learning style.
                  </p>
                </div>
                <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
                  <img alt="Learning illustration" src={SUBJECT_ILLO} className="w-full h-48 object-cover" />
                </div>
              </div>
              <div className="bg-secondary-container/20 p-6 rounded-[2rem] border border-secondary/20 flex items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <Icon name="verified" className="text-secondary" />
                </div>
                <p className="font-label-md text-label-md text-on-secondary-container">
                  Over 1,250 XP earned by students like you today!
                </p>
              </div>
            </div>

            {/* Right interaction */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="text-center lg:text-left">
                <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
                  What are your favorite subjects?
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We'll personalize your Study Buddy based on your interests.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {SUBJECTS.map((s) => {
                  const isSel = selected.has(s.name)
                  return (
                    <button
                      key={s.name}
                      onClick={() => toggle(s.name)}
                      className={`group flex flex-col items-center justify-center p-6 border-2 rounded-[1.5rem] transition-all duration-300 active:scale-95 shadow-sm ${
                        isSel
                          ? 'bg-primary-container/20 text-on-primary-container border-primary shadow-md'
                          : 'bg-white border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low'
                      }`}
                    >
                      <Icon
                        name={s.icon}
                        className="text-primary text-3xl mb-3 transition-transform group-hover:scale-110"
                        filled={isSel}
                      />
                      <span className="font-label-md text-label-md">{s.name}</span>
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => navigate(-1)}
                  className="px-8 py-3 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center gap-2"
                >
                  <Icon name="arrow_back" className="text-[20px]" />
                  Back
                </button>
                <button
                  disabled={selected.size === 0}
                  onClick={() => navigate('/onboarding/buddy')}
                  className="px-10 py-4 bg-primary text-on-primary rounded-full font-label-md text-label-md btn-3d flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Next Step
                  <Icon name="arrow_forward" className="text-[20px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Tip toast */}
          <div
            className={`mt-12 mx-auto max-w-md bg-tertiary-fixed p-4 rounded-2xl flex items-start gap-4 shadow-sm border border-on-tertiary-fixed-variant/10 ${
              selected.size >= 3 ? 'ring-4 ring-secondary-fixed ring-offset-2' : ''
            }`}
          >
            <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center shrink-0">
              <Icon name="lightbulb" className="text-tertiary" />
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mb-1">Top Tip</p>
              <p className="font-body-md text-body-md text-on-tertiary-fixed">
                Pick at least 3 subjects to unlock the "Curiosity Badge" immediately!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
