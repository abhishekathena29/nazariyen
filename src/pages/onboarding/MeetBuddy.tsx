import { useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'

const BUDDY =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBgFaYsnkFXIHkhaH22x40dhPF2Ij1WTWCWQv1pNGM_FkxzjC1WJfAuhG-wqcq-i92FoyxNgFoMfVSc025mGkOeHEZQFLh3oZmuv70p2m7Ol3zl2vz-DeSItCX3V1o9fvBPnc90N73OdpiQ_m4218BjENy24Xfbvi5WfU7lSumQdDtJwyV4CBjRQ9_n7Fxt3pJfUThIDv2gAmVUp6I6HxcJO7c5AV-WccYlupnMGpc9Ot3pBR7oUMqbzfN0ALr_wBxDzXWMiqjMvyeO'

const FEATURES = [
  { icon: 'auto_awesome', title: 'Explains simply', desc: 'Breaks down complex topics into easy, fun stories.', color: 'text-primary', bg: 'bg-primary-container/10' },
  { icon: 'schedule', title: 'Available 24/7', desc: 'Always here to help with homework, day or night.', color: 'text-secondary', bg: 'bg-secondary-container/20' },
  { icon: 'quiz', title: 'Quizzes you', desc: 'Tests your knowledge with quick, fun challenges.', color: 'text-tertiary', bg: 'bg-tertiary-container/10' },
]

export default function MeetBuddy() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <main className="min-h-screen flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-12 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-label-md text-primary tracking-[0.2em] uppercase">Nazariyen AI</span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">Meet your AI Study Buddy</h1>
          </div>

          {/* Hero */}
          <div className="relative w-full flex flex-col items-center">
            <div className="absolute -z-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-surface-container-highest rounded-[48px] shadow-[0_20px_40px_rgba(37,99,235,0.1)] flex items-center justify-center border-4 border-white overflow-hidden">
                <img alt="AI Buddy" src={BUDDY} className="w-full h-full object-cover" />
                <div className="absolute top-8 -right-4 bg-white px-6 py-3 rounded-2xl shadow-lg border border-surface-container flex items-center gap-2">
                  <span className="font-label-md text-on-surface">Hello! Ready to learn?</span>
                  <span className="wave-animation text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center ${f.color}`}>
                  <Icon name={f.icon} className="text-3xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-md text-headline-md">{f.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[400px]">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-primary text-on-primary font-label-md text-lg py-5 px-8 rounded-full btn-3d flex items-center justify-center gap-3 transition-all"
            >
              <span>Go to Dashboard</span>
              <Icon name="arrow_forward" />
            </button>
            <p className="font-label-sm text-outline">You can talk to your buddy anytime from the sidebar.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
