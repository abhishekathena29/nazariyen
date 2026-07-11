import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useLang } from '../context/LanguageContext'
import { CAREERS, CAREER_CATEGORIES, careerByKey, type Category } from '../data/careers'

const NODE_STYLES = [
  { bg: 'bg-primary-container', text: 'text-on-primary-container' },
  { bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed' },
  { bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
  { bg: 'bg-primary', text: 'text-on-primary' },
]

const CAT_KEY: Record<(typeof CAREER_CATEGORIES)[number], 'careers.all' | 'careers.stem' | 'careers.arts' | 'careers.business'> = {
  'All Careers': 'careers.all',
  STEM: 'careers.stem',
  Arts: 'careers.arts',
  Business: 'careers.business',
}

export default function Careers() {
  const navigate = useNavigate()
  const { t } = useLang()
  const [activeCat, setActiveCat] = useState<(typeof CAREER_CATEGORIES)[number]>('All Careers')
  const [pathwayFor, setPathwayFor] = useState<string | null>(null)

  const careers = useMemo(
    () => (activeCat === 'All Careers' ? CAREERS : CAREERS.filter((c) => c.category === (activeCat as Category))),
    [activeCat],
  )

  const active = pathwayFor ? careerByKey(pathwayFor) : null

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-4 md:p-margin-page">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-display text-on-surface mb-3">{t('careers.title')}</h2>
          <p className="font-body-lg text-on-surface-variant">{t('careers.subtitle')}</p>
        </div>
        <div className="flex p-1 bg-surface-container-low rounded-2xl flex-wrap">
          {CAREER_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-5 py-2 font-label-md rounded-xl transition-colors ${
                c === activeCat ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t(CAT_KEY[c])}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((c) => (
          <div
            key={c.key}
            onClick={() => setPathwayFor(c.key)}
            className="group flex flex-col bg-surface-container-lowest border border-outline-variant/30 rounded-[2rem] p-8 hover:border-primary/30 cursor-pointer transition-all hover:-translate-y-1"
          >
            <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
              {c.emoji}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-headline-md text-on-surface">{c.name}</h3>
              <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
                {c.category}
              </span>
            </div>
            <p className="font-body-md text-on-surface-variant mb-8 flex-grow">{c.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {c.tags.map((tag) => (
                <span key={tag} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-label-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              {t('careers.viewPathway')} <Icon name="arrow_forward" className="text-lg" />
            </button>
          </div>
        ))}
      </div>

      {/* Pathway overlay */}
      {active && (
        <div
          onClick={(e) => e.target === e.currentTarget && setPathwayFor(null)}
          className="fixed inset-0 z-[100] bg-on-background/40 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
        >
          <div className="bg-surface-bright w-full max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-outline-variant/20 relative">
            <button
              onClick={() => setPathwayFor(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-error/10 hover:text-error transition-all z-20"
            >
              <Icon name="close" />
            </button>
            <div className="p-6 md:p-12">
              <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
                <div className="text-5xl bg-surface-container-low p-5 rounded-[2rem] shadow-sm">{active.emoji}</div>
                <div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                    {t('careers.roadmap')}
                  </span>
                  <h2 className="font-headline-lg text-on-surface mt-1">
                    {active.name}: {t('careers.pathwayTitle')}
                  </h2>
                </div>
              </div>

              {/* Key subjects + exams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-outline-variant/30">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Icon name="menu_book" className="text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{t('careers.keySubjects')}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.keySubjects.map((s) => (
                      <span key={s} className="bg-white border border-outline-variant/40 text-on-surface px-3 py-1 rounded-full text-xs font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-outline-variant/30">
                  <div className="flex items-center gap-2 mb-3 text-tertiary">
                    <Icon name="edit_note" className="text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{t('careers.topExams')}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.exams.map((e) => (
                      <span key={e} className="bg-white border border-outline-variant/40 text-on-surface px-3 py-1 rounded-full text-xs font-semibold">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flowchart */}
              <div className="relative py-6 flex flex-wrap justify-between items-start gap-4">
                {active.pathway.map((n, i) => {
                  const style = NODE_STYLES[i % NODE_STYLES.length]
                  return (
                    <div key={i} className="relative flex flex-col items-center gap-4 min-w-[140px] flex-1">
                      <div className={`w-20 h-20 ${style.bg} ${style.text} rounded-[1.75rem] shadow-lg flex items-center justify-center border-4 border-surface-bright`}>
                        <Icon name={n.icon} className="text-3xl" />
                      </div>
                      <div className="text-center">
                        <p className="font-label-md text-on-surface">{n.label}</p>
                        <p className="text-[10px] text-on-surface-variant uppercase">{n.sub}</p>
                      </div>
                      {i < active.pathway.length - 1 && (
                        <div
                          className="hidden md:block absolute top-10 right-[-2rem] w-16 h-1 z-0"
                          style={{
                            background:
                              'repeating-linear-gradient(90deg, #ffb596 0px, #ffb596 8px, transparent 8px, transparent 16px)',
                          }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 md:mt-12 bg-surface-container-low/50 p-5 md:p-8 rounded-3xl md:rounded-[2rem] border border-outline-variant/30 flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="lightbulb" className="text-primary text-3xl" />
                </div>
                <div>
                  <h4 className="font-headline-md text-on-surface mb-2">{t('careers.proTipTitle')}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {active.name}: focus on {active.keySubjects.join(', ')} early, and start preparing for {active.exams[0]}.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="bg-primary text-on-primary px-8 py-2.5 rounded-xl font-label-md text-sm hover:brightness-110 transition-all"
                    >
                      {t('careers.showResources')}
                    </button>
                    <button
                      onClick={() => setPathwayFor(null)}
                      className="bg-surface-container-high text-on-surface-variant px-8 py-2.5 rounded-xl font-label-md text-sm hover:bg-surface-container-highest transition-colors"
                    >
                      {t('careers.dismiss')}
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
