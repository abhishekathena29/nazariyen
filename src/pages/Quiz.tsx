import { useMemo, useState } from 'react'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'
import { CLASSES } from '../data/books'
import { QUIZ_SUBJECTS, chaptersFor, chapterQuestions, type QuizSubject } from '../data/quizzes'

type Stage = 'setup' | 'active' | 'result'

export default function Quiz() {
  const { profile, addXp } = useAuth()
  const { t, lang } = useLang()

  // `manualClass` is null until the student picks a grade themselves — until
  // then we track their profile's grade automatically, even if it loads late.
  const [manualClass, setManualClass] = useState<string | null>(null)
  const classLevel = manualClass ?? profile?.classLevel ?? 'Class 10'
  const [subject, setSubject] = useState<QuizSubject>('Science')
  const [chapterId, setChapterId] = useState<string | null>(null)
  const [stage, setStage] = useState<Stage>('setup')
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const chapters = useMemo(() => chaptersFor(classLevel, subject), [classLevel, subject])

  // Fall back to the first chapter whenever the grade/subject changes and the
  // previously chosen chapter no longer belongs to this list.
  const activeChapterId = chapterId && chapters.some((c) => c.id === chapterId) ? chapterId : (chapters[0]?.id ?? null)
  const chapter = activeChapterId ? chapterQuestions(classLevel, subject, activeChapterId) : undefined
  const question = chapter?.questions[step]
  const total = chapter?.questions.length ?? 0

  function start() {
    setStep(0)
    setScore(0)
    setSelected(null)
    setStage('active')
  }

  function choose(i: number) {
    if (selected !== null || !question) return
    setSelected(i)
    if (i === question.answer) setScore((s) => s + 1)
  }

  function next() {
    if (!chapter) return
    if (step + 1 < chapter.questions.length) {
      setStep((s) => s + 1)
      setSelected(null)
    } else {
      addXp(score * 5)
      setStage('result')
    }
  }

  function restart() {
    setStage('setup')
    setSelected(null)
  }

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-4 md:p-margin-page">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-display text-on-surface mb-3">{t('quiz.title')}</h2>
          <p className="font-body-lg text-on-surface-variant">{t('quiz.subtitle')}</p>
        </div>

        {stage === 'setup' && (
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 md:p-10 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{t('quiz.selectGrade')}</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {CLASSES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setManualClass(c)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-colors flex-shrink-0 ${
                      c === classLevel
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{t('quiz.selectSubject')}</h3>
              <div className="flex gap-2">
                {QUIZ_SUBJECTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                      s === subject
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {chapters.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{t('quiz.selectChapter')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {chapters.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setChapterId(c.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        c.id === activeChapterId
                          ? 'border-primary bg-primary/5'
                          : 'bg-white border-outline-variant/40 hover:border-primary/40'
                      }`}
                    >
                      <p className={`font-label-md text-sm mb-1 ${c.id === activeChapterId ? 'text-primary' : 'text-on-surface'}`}>
                        {lang === 'hi' ? c.name.hi : c.name.en}
                      </p>
                      <p className="text-xs text-on-surface-variant">{c.questions.length} {t('quiz.questions')}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 text-on-surface-variant text-sm">
              <Icon name="language" className="text-lg" />
              {t('quiz.languageNote')} <span className="font-bold text-primary">{lang === 'hi' ? 'हिंदी' : 'English'}</span>
            </div>

            {chapter ? (
              <button
                onClick={start}
                className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-2xl font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
              >
                {t('quiz.start')} <Icon name="play_arrow" className="text-lg" filled />
              </button>
            ) : (
              <p className="text-sm text-error">{t('quiz.noQuiz')}</p>
            )}
          </div>
        )}

        {stage === 'active' && chapter && question && (
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                {t('quiz.questionOf').replace('{n}', String(step + 1)).replace('{total}', String(total))}
              </span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {classLevel} • {lang === 'hi' ? chapter.name.hi : chapter.name.en}
              </span>
            </div>

            <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((step + (selected !== null ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <h3 className="font-headline-md text-headline-md text-on-surface mb-8">{lang === 'hi' ? question.q.hi : question.q.en}</h3>

            <div className="space-y-3 mb-8">
              {question.options.map((opt, i) => {
                const label = lang === 'hi' ? opt.hi : opt.en
                const isCorrect = i === question.answer
                const isPicked = i === selected
                let cls = 'border-outline-variant/40 hover:border-primary/40 bg-white'
                if (selected !== null) {
                  if (isCorrect) cls = 'border-secondary bg-secondary-container/20'
                  else if (isPicked) cls = 'border-error bg-error-container/40'
                  else cls = 'border-outline-variant/20 bg-white opacity-60'
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-colors flex items-center justify-between gap-3 ${cls}`}
                  >
                    <span className="font-body-md text-on-surface">{label}</span>
                    {selected !== null && isCorrect && <Icon name="check_circle" className="text-secondary" filled />}
                    {selected !== null && isPicked && !isCorrect && <Icon name="cancel" className="text-error" filled />}
                  </button>
                )
              })}
            </div>

            {selected !== null && (
              <button
                onClick={next}
                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
              >
                {step + 1 < total ? t('quiz.next') : t('quiz.finish')} <Icon name="arrow_forward" className="text-lg" />
              </button>
            )}
          </div>
        )}

        {stage === 'result' && (
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 md:p-10 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="emoji_events" className="text-4xl text-primary" filled />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              {score} / {total}
            </h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              {t('quiz.xpEarned').replace('{xp}', String(score * 5))}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={start}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-2xl font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
              >
                <Icon name="replay" className="text-lg" /> {t('quiz.retry')}
              </button>
              <button
                onClick={restart}
                className="bg-surface-container-high text-on-surface-variant px-8 py-3.5 rounded-2xl font-label-md hover:bg-surface-container-highest transition-colors"
              >
                {t('quiz.changeSetup')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
