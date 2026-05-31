import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'

const CLASSES = [
  { id: 1, label: 'Class 1', icon: 'child_care', desc: 'Primary' },
  { id: 2, label: 'Class 2', icon: 'cruelty_free', desc: 'Primary' },
  { id: 3, label: 'Class 3', icon: 'potted_plant', desc: 'Primary' },
  { id: 4, label: 'Class 4', icon: 'palette', desc: 'Primary' },
  { id: 5, label: 'Class 5', icon: 'auto_stories', desc: 'Primary' },
  { id: 6, label: 'Class 6', icon: 'rocket_launch', desc: 'Middle' },
  { id: 7, label: 'Class 7', icon: 'biotech', desc: 'Middle' },
  { id: 8, label: 'Class 8', icon: 'functions', desc: 'Middle' },
  { id: 9, label: 'Class 9', icon: 'architecture', desc: 'Secondary' },
  { id: 10, label: 'Class 10', icon: 'psychology', desc: 'Secondary' },
  { id: 11, label: 'Class 11', icon: 'history_edu', desc: 'Higher Sec' },
  { id: 12, label: 'Class 12', icon: 'school', desc: 'Higher Sec' },
]

export default function SelectClass() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-pattern-dots pb-32 bg-surface">
      <div className="w-full max-w-[600px] mt-12 px-margin-mobile md:px-0">
        <div className="flex justify-between items-center mb-2">
          <span className="font-label-md text-label-md text-primary">Step 1 of 3</span>
          <span className="font-label-md text-label-md text-outline">Class Selection</span>
        </div>
        <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden relative shadow-inner">
          <div className="h-full w-1/3 bg-secondary-fixed-dim rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2">
            <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <div className="text-center mt-12 mb-16 px-margin-mobile">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4 tracking-tight">
          Welcome to <span className="text-primary">Nazariyen!</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[500px] mx-auto">
          Let's get to know you. Which class are you currently in?
        </p>
      </div>

      <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CLASSES.map((c) => {
            const isSel = selected === c.id
            return (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`relative bg-surface-container-lowest p-6 rounded-xl border-2 shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 group ${
                  isSel ? 'border-primary bg-surface-container-low -translate-y-1' : 'border-outline-variant/30 hover:border-primary/40'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={c.icon} className="text-primary text-[28px]" />
                </div>
                <span className="font-headline-md text-headline-md text-on-surface mb-1">{c.label}</span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">{c.desc}</span>
                {isSel && (
                  <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1 flex items-center justify-center">
                    <Icon name="check" className="text-[16px] font-bold" />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Sticky Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-md border-t border-outline-variant/20 flex justify-center z-50">
        <div className="w-full max-w-container-max flex justify-between items-center px-margin-mobile">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-outline font-label-md text-label-md hover:text-on-surface transition-colors"
          >
            <Icon name="arrow_back" />
            Back
          </button>
          <button
            disabled={selected === null}
            onClick={() => navigate('/onboarding/interests')}
            className={`bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full shadow-lg flex items-center gap-3 active:scale-95 transition-all hover:bg-primary-container duration-300 border-b-[3px] border-primary/40 ${
              selected === null ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next Step
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
    </div>
  )
}
