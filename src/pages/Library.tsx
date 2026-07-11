import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'
import { CLASSES, booksForClass, ncertBookUrl, type Book } from '../data/books'

const LANGS = ['English', 'Hindi', 'Urdu'] as const

export default function Library() {
  const navigate = useNavigate()
  const { profile, recent, bookmarks, addRecent, removeBookmark } = useAuth()
  const { t, lang, setLang } = useLang()
  const [activeClass, setActiveClass] = useState(profile?.classLevel || 'Class 10')
  const [activeLang, setActiveLang] = useState(lang === 'hi' ? 'Hindi' : 'English')
  const [detailsBook, setDetailsBook] = useState<Book | null>(null)

  const books = useMemo(() => booksForClass(activeClass), [activeClass])

  function chooseLang(l: (typeof LANGS)[number]) {
    setActiveLang(l)
    if (l === 'English') setLang('en')
    else if (l === 'Hindi') setLang('hi')
  }

  async function openBook(b: Book) {
    await addRecent({
      id: b.id,
      bookId: b.id,
      title: b.title,
      subject: b.subject,
      chapter: `${b.classLevel} • ${t('lib.chapters')}: ${b.chapters}`,
      progress: 5,
      color: `bg-${b.color}`,
      img: b.img,
    })
    navigate(`/library/reader?book=${b.id}`)
  }

  return (
    <div className="flex h-full overflow-hidden">
      <section className="flex-1 overflow-y-auto px-4 md:px-margin-page py-6 md:py-10 custom-scrollbar">
        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-12 bg-gradient-to-br from-primary to-primary-container p-6 md:p-12 min-h-[200px] md:min-h-[240px] flex items-center">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4">{t('lib.title')}</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">{t('lib.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20">
                <Icon name="book_5" className="text-lg" />
                {books.length}+ {t('lib.books')}
              </span>
              <span className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20">
                <Icon name="translate" className="text-lg" />
                3 {t('lib.languages')}
              </span>
            </div>
          </div>
        </div>

        {/* Selectors */}
        <div className="mb-12 space-y-8">
          <div>
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{t('lib.classSelector')}</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {CLASSES.map((c) => {
                const isActive = c === activeClass
                return (
                  <button
                    key={c}
                    onClick={() => setActiveClass(c)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all flex-shrink-0 ${
                      isActive
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{t('lib.preferredLanguage')}</h3>
            <div className="flex gap-2">
              {LANGS.map((l) => {
                const isActive = l === activeLang
                return (
                  <button
                    key={l}
                    onClick={() => chooseLang(l)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                      isActive
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {l}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Books grid */}
        {books.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">{t('lib.noBooks')}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((b) => (
              <div
                key={b.id}
                className="group bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-surface-container">
                  <img alt={b.title} src={b.img} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold text-${b.color} bg-${b.color}/10 px-2 py-0.5 rounded uppercase tracking-wider`}>
                    {b.subject}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">
                    {b.chapters} {t('lib.chapters')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-2">{b.title}</h4>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3 flex-grow">{b.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openBook(b)}
                    className="flex-1 py-3 bg-primary text-white hover:bg-primary-container font-bold rounded-xl text-sm transition-all"
                  >
                    {t('lib.openTextbook')}
                  </button>
                  <button
                    onClick={() => setDetailsBook(b)}
                    className="px-4 py-3 bg-white border border-outline-variant hover:border-primary hover:text-primary text-on-surface font-bold rounded-xl text-sm transition-all"
                  >
                    {t('lib.details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Right sidebar */}
      <aside className="w-80 bg-white border-l border-outline-variant/30 p-8 flex flex-col gap-10 hidden xl:flex overflow-y-auto custom-scrollbar">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">{t('lib.recentlyRead')}</h3>
          </div>
          {recent.length === 0 ? (
            <p className="text-xs text-on-surface-variant leading-relaxed">{t('lib.noRecent')}</p>
          ) : (
            <div className="space-y-6">
              {recent.map((r) => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/library/reader?book=${r.bookId}`)}
                  className="flex gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-16 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/20">
                    <img src={r.img} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{r.title}</p>
                    <p className="text-xs text-on-surface-variant mb-2 truncate">{r.chapter}</p>
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${r.color}`} style={{ width: `${r.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">{t('lib.bookmarks')}</h3>
          {bookmarks.length === 0 ? (
            <p className="text-xs text-on-surface-variant leading-relaxed">{t('lib.noBookmarks')}</p>
          ) : (
            <div className="space-y-2">
              {bookmarks.map((bm) => (
                <div
                  key={bm.id}
                  className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all bg-surface-container-low/30 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon name="bookmark" className={`text-${bm.color} text-base`} filled />
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase truncate">
                        {bm.subject} • {bm.page}
                      </span>
                    </div>
                    <button
                      onClick={() => removeBookmark(bm.id)}
                      className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-error transition-all shrink-0"
                      aria-label="Remove bookmark"
                    >
                      <Icon name="close" className="text-base" />
                    </button>
                  </div>
                  <p className="text-xs text-on-surface font-medium leading-relaxed line-clamp-2">{bm.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto p-6 bg-primary-container/10 border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Icon name="lightbulb" className="text-xl" />
            <span className="text-xs font-bold uppercase tracking-wider">{t('lib.proTip')}</span>
          </div>
          <p className="text-xs leading-relaxed text-on-surface-variant font-medium">{t('lib.proTipBody')}</p>
        </div>
      </aside>

      {/* Details modal */}
      {detailsBook && (
        <div
          onClick={(e) => e.target === e.currentTarget && setDetailsBook(null)}
          className="fixed inset-0 z-[100] bg-on-background/40 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-surface-bright w-full max-w-lg rounded-3xl shadow-2xl border border-outline-variant/20 relative overflow-hidden">
            <button
              onClick={() => setDetailsBook(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-error/10 hover:text-error transition-all z-20"
            >
              <Icon name="close" />
            </button>
            <div className="p-8">
              <div className="flex gap-5 mb-6">
                <div className="w-24 h-32 rounded-xl overflow-hidden border border-outline-variant/30 shrink-0">
                  <img src={detailsBook.img} className="w-full h-full object-cover" />
                </div>
                <div className="pt-1">
                  <span className={`text-[10px] font-bold text-${detailsBook.color} bg-${detailsBook.color}/10 px-2 py-0.5 rounded uppercase tracking-wider`}>
                    {detailsBook.subject}
                  </span>
                  <h3 className="text-xl font-bold text-on-surface mt-2 mb-1">{detailsBook.title}</h3>
                  <p className="text-sm text-on-surface-variant">
                    {detailsBook.classLevel} • {detailsBook.chapters} {t('lib.chapters')}
                  </p>
                  <p className="text-[11px] text-on-surface-variant/70 mt-1 uppercase tracking-wide">NCERT • {detailsBook.code}</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{t('lib.aboutBook')}</h4>
              <p className="text-sm text-on-surface leading-relaxed mb-8">{detailsBook.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const b = detailsBook
                    setDetailsBook(null)
                    openBook(b)
                  }}
                  className="flex-1 py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-container transition-all"
                >
                  {t('lib.openTextbook')}
                </button>
                <a
                  href={ncertBookUrl(detailsBook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-outline-variant hover:border-primary hover:text-primary text-on-surface font-bold rounded-xl text-sm transition-all"
                >
                  <Icon name="open_in_new" className="text-base" />
                  {t('lib.openOnNcert')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
