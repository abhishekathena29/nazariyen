import { useState } from 'react'
import Icon from '../components/Icon'

const CAREERS = [
  { key: 'doctor', emoji: '👩‍⚕️', bg: 'bg-red-50', name: 'Doctor', desc: 'Heal people and make the world a healthier place through medicine.', tags: ['High Growth', 'Scientific'] },
  { key: 'dev', emoji: '👨‍💻', bg: 'bg-blue-50', name: 'Software Developer', desc: 'Build the next big app or solve complex problems with code.', tags: ['Tech Focus', 'Analytical'] },
  { key: 'pilot', emoji: '✈️', bg: 'bg-sky-50', name: 'Pilot', desc: 'Travel the world and master the skies in commercial or defense aviation.', tags: ['Adventure', 'High Skill'] },
  { key: 'designer', emoji: '🎨', bg: 'bg-pink-50', name: 'Designer', desc: 'Create visual stories and shape how users interact with products.', tags: ['Creative', 'Versatile'] },
  { key: 'entrepreneur', emoji: '📊', bg: 'bg-amber-50', name: 'Entrepreneur', desc: 'Turn ideas into reality by building your own business and teams.', tags: ['Leadership', 'Innovation'] },
  { key: 'ai', emoji: '🤖', bg: 'bg-purple-50', name: 'AI Specialist', desc: 'Teach machines to think and help shape the future of technology.', tags: ['Future Proof', 'Mathematics'] },
]

const PATHWAY = [
  { icon: 'school', label: '11th PCB', sub: 'Core Subjects', bg: 'bg-primary-container', text: 'text-on-primary-container' },
  { icon: 'edit_note', label: 'NEET Exam', sub: 'Entrance Test', bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed' },
  { icon: 'apartment', label: 'MBBS', sub: 'Undergrad Degree', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
  { icon: 'stethoscope', label: 'Specialization', sub: 'Post Graduation', bg: 'bg-primary', text: 'text-on-primary' },
]

const CATS = ['All Careers', 'STEM', 'Arts', 'Business']

export default function Careers() {
  const [activeCat, setActiveCat] = useState('All Careers')
  const [pathwayFor, setPathwayFor] = useState<string | null>(null)

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-margin-page">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-display text-on-surface mb-3">Explore Your Future</h2>
          <p className="font-body-lg text-on-surface-variant">
            Browse visual pathways to discover what it takes to reach your goals.
          </p>
        </div>
        <div className="flex p-1 bg-surface-container-low rounded-2xl">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-5 py-2 font-label-md rounded-xl transition-colors ${
                c === activeCat ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAREERS.map((c) => (
          <div
            key={c.key}
            onClick={() => setPathwayFor(c.key)}
            className="group flex flex-col bg-surface-container-lowest border border-outline-variant/30 rounded-[2rem] p-8 hover:border-primary/30 cursor-pointer transition-all hover:-translate-y-1"
          >
            <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
              {c.emoji}
            </div>
            <h3 className="font-headline-md text-on-surface mb-3">{c.name}</h3>
            <p className="font-body-md text-on-surface-variant mb-8 flex-grow">{c.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {c.tags.map((t) => (
                <span key={t} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-label-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              View Pathway <Icon name="arrow_forward" className="text-lg" />
            </button>
          </div>
        ))}
      </div>

      {/* Pathway overlay */}
      {pathwayFor && (
        <div
          onClick={(e) => e.target === e.currentTarget && setPathwayFor(null)}
          className="fixed inset-0 z-[100] bg-on-background/40 backdrop-blur-md flex items-center justify-center p-6"
        >
          <div className="bg-surface-bright w-full max-w-5xl rounded-[2.5rem] shadow-2xl border border-outline-variant/20 overflow-hidden relative">
            <button
              onClick={() => setPathwayFor(null)}
              className="absolute top-8 right-8 w-11 h-11 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-error/10 hover:text-error transition-all z-20"
            >
              <Icon name="close" />
            </button>
            <div className="p-12">
              <div className="flex items-center gap-6 mb-16">
                <div className="text-5xl bg-surface-container-low p-5 rounded-[2rem] shadow-sm">
                  {CAREERS.find((c) => c.key === pathwayFor)?.emoji}
                </div>
                <div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                    Career Roadmap
                  </span>
                  <h2 className="font-headline-lg text-on-surface mt-1">
                    {CAREERS.find((c) => c.key === pathwayFor)?.name}: The Pathway
                  </h2>
                </div>
              </div>
              {/* Flowchart */}
              <div className="relative py-12 flex flex-wrap justify-between items-center gap-4">
                {PATHWAY.map((n, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-4 min-w-[140px] flex-1">
                    <div className={`w-20 h-20 ${n.bg} ${n.text} rounded-[1.75rem] shadow-lg flex items-center justify-center border-4 border-surface-bright`}>
                      <Icon name={n.icon} className="text-3xl" />
                    </div>
                    <div className="text-center">
                      <p className="font-label-md text-on-surface">{n.label}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">{n.sub}</p>
                    </div>
                    {i < PATHWAY.length - 1 && (
                      <div
                        className="hidden md:block absolute top-10 right-[-2rem] w-16 h-1 z-0"
                        style={{
                          background:
                            'repeating-linear-gradient(90deg, #ffb596 0px, #ffb596 8px, transparent 8px, transparent 16px)',
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-16 bg-surface-container-low/50 p-8 rounded-[2rem] border border-outline-variant/30 flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="lightbulb" className="text-primary text-3xl" />
                </div>
                <div>
                  <h4 className="font-headline-md text-on-surface mb-2">Pro Tip from AI Buddy</h4>
                  <p className="font-body-md text-on-surface-variant">
                    Focus on the core subjects early. Want me to recommend a study plan and resources tailored to this pathway?
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button className="bg-primary text-on-primary px-8 py-2.5 rounded-xl font-label-md text-sm hover:brightness-110 transition-all">
                      Show Resources
                    </button>
                    <button
                      onClick={() => setPathwayFor(null)}
                      className="bg-surface-container-high text-on-surface-variant px-8 py-2.5 rounded-xl font-label-md text-sm hover:bg-surface-container-highest transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
