import { useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'
import { bookById, ncertBookUrl, type Book } from '../data/books'
import { streamBuddyReply, groqEnabled, type ChatMessage } from '../lib/groq'

const DIAGRAM =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAiFnKAUHMyFtScNlnWEgmD1PB_D_QwV_jS7MzlPP6-lm3Zy6h2nF2p-C--m44OSg7KkrdQcH3PubP89GAb3aInJPMOM0RLF6sS458YHN7DMUVzoIiizFr-xKEO_8QeXztt-XKF0vkKk8o7i4IVDB_qZm7IpCIGXZeZyWK-7RBPIg6U6XaQWCZ6zyINd-no37rnHv1iVOhNBGv-irq9RRPdVWoYdmyUhoFfhtRnsumG7ilU1vYk_04LVI4lCsNlRzkmPFZuN1M0RoOx'

type ChatBubble = { role: 'user' | 'ai'; content: string }

export default function PdfReader() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { profile, addBookmark, addXp } = useAuth()
  const { t, lang } = useLang()

  const book: Book = useMemo(() => bookById(params.get('book') || '') || bookById('jesc1')!, [params])

  const [zoom, setZoom] = useState(125)
  const [question, setQuestion] = useState('')
  const [chat, setChat] = useState<ChatBubble[]>([])
  const [busy, setBusy] = useState(false)
  const [toast, setToast] = useState('')
  const [speaking, setSpeaking] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const isScience = book.id === 'jesc1'
  const avatar = profile?.photoURL

  function flashToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 1800)
  }

  async function handleBookmark() {
    const text = isScience
      ? 'Reflection of light is the phenomenon of bouncing back of light into the same medium on striking a surface.'
      : book.description
    await addBookmark({
      id: `${book.id}-p1`,
      bookId: book.id,
      subject: book.subject,
      page: 'P. 1',
      text,
      color: book.color,
    })
    flashToast(t('reader.bookmarkAdded'))
  }

  function toggleReadAloud() {
    if (!('speechSynthesis' in window)) return
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const text = pageRef.current?.innerText || book.description
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = lang === 'hi' ? 'hi-IN' : 'en-IN'
    utter.onend = () => setSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
    setSpeaking(true)
  }

  async function ask(q: string) {
    const query = q.trim()
    if (!query || busy) return
    setQuestion('')
    const next: ChatBubble[] = [...chat, { role: 'user', content: query }]
    setChat([...next, { role: 'ai', content: '' }])
    setBusy(true)

    if (!groqEnabled) {
      setChat([...next, { role: 'ai', content: t('buddy.noKey') }])
      setBusy(false)
      return
    }

    const history: ChatMessage[] = next.map((m) => ({
      role: m.role === 'ai' ? 'assistant' : 'user',
      content: m.content,
    }))
    const controller = new AbortController()
    abortRef.current = controller
    try {
      await streamBuddyReply(
        history,
        { language: lang, classLevel: book.classLevel, context: `${book.title} (${book.classLevel} ${book.subject})` },
        (chunk) =>
          setChat((prev) => {
            const copy = [...prev]
            const last = copy[copy.length - 1]
            if (last && last.role === 'ai') copy[copy.length - 1] = { ...last, content: last.content + chunk }
            return copy
          }),
        controller.signal,
      )
      addXp(5)
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return
      setChat((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: 'ai', content: t('buddy.error') }
        return copy
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="bg-background text-on-surface flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-outline-variant/30 z-40 flex justify-between items-center w-full px-4 md:px-margin-page py-3 h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline-lg text-2xl font-extrabold tracking-tight text-primary">
            Nazariyen
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link to="/dashboard" className="text-on-surface-variant font-medium hover:text-primary transition-colors">
              {t('nav.studyBuddy')}
            </Link>
            <Link to="/library" className="text-primary font-bold border-b-2 border-primary pb-0.5">
              {t('nav.library')}
            </Link>
            <Link to="/careers" className="text-on-surface-variant font-medium hover:text-primary transition-colors">
              {t('nav.careers')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1.5 bg-secondary-container/20 px-3 py-1 rounded-full border border-secondary/10">
            <Icon name="workspace_premium" className="text-secondary text-base" filled />
            <span className="font-label-md text-on-secondary-container">{(profile?.xp ?? 0).toLocaleString()} XP</span>
          </div>
          {avatar && <img alt="Profile" src={avatar} className="w-8 h-8 rounded-full border border-outline-variant shrink-0 object-cover" />}
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Reader */}
        <section className="w-full lg:w-[72%] flex flex-col bg-[#fdfdfe] border-r border-outline-variant/30 relative">
          {/* Toolbar */}
          <div className="h-14 flex items-center justify-between gap-3 px-4 md:px-8 bg-white/50 border-b border-outline-variant/20 z-10 overflow-x-auto">
            <div className="flex items-center gap-3 md:gap-6 shrink-0">
              <button onClick={() => navigate('/library')} className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center">
                <Icon name="arrow_back" />
              </button>
              <span className="font-label-md text-on-surface-variant/80 tracking-wide whitespace-nowrap text-sm md:text-base">
                {book.classLevel} {book.subject} • {book.title}
              </span>
            </div>
            <div className="flex items-center gap-4 md:gap-8 shrink-0">
              <div className="flex items-center gap-3 md:gap-4">
                <button onClick={() => setZoom((z) => Math.max(50, z - 25))} className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <Icon name="remove" />
                </button>
                <span className="font-label-md text-primary w-12 text-center">{zoom}%</span>
                <button onClick={() => setZoom((z) => Math.min(200, z + 25))} className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <Icon name="add" />
                </button>
              </div>
              <div className="flex items-center gap-3 md:gap-6">
                <button
                  onClick={toggleReadAloud}
                  className="flex items-center gap-2 text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all font-label-md"
                >
                  <Icon name={speaking ? 'stop_circle' : 'volume_up'} className="text-[20px]" />
                  <span className="hidden sm:inline">{speaking ? t('reader.stop') : t('reader.readAloud')}</span>
                </button>
                <div className="h-6 w-px bg-outline-variant/40" />
                <button onClick={handleBookmark} className="text-on-surface-variant hover:text-primary transition-colors" title="Bookmark this page">
                  <Icon name="bookmark" />
                </button>
                <a href={ncertBookUrl(book)} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors" title={t('reader.openInNcert')}>
                  <Icon name="file_download" />
                </a>
              </div>
            </div>
          </div>

          {/* Page */}
          <div className="flex-1 overflow-y-auto p-4 md:p-16 custom-scrollbar flex justify-center bg-surface-container-lowest">
            <div
              ref={pageRef}
              className="w-full max-w-3xl bg-white shadow-sm border border-outline-variant/20 rounded-sm p-6 md:p-20 min-h-[1000px] relative"
              style={{ fontSize: `${zoom}%`, lineHeight: 1.6 }}
            >
              <div className="flex justify-between items-baseline gap-4 mb-10 md:mb-12 border-b border-outline-variant/10 pb-4">
                <div>
                  <p className="text-primary font-label-md tracking-widest uppercase text-xs mb-1">{book.classLevel} • {book.subject}</p>
                  <h1 className="font-headline-lg text-2xl md:text-3xl text-on-surface">{book.title}</h1>
                </div>
                <span className="text-outline text-sm">NCERT</span>
              </div>

              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">{book.description}</p>

              {isScience && (
                <div className="text-on-surface leading-relaxed text-lg">
                  <p className="mb-8">
                    We see a variety of objects in the world around us. However, we are unable to see anything in a dark room. On lighting up the
                    room, things become visible. An object reflects light that falls on it. This reflected light, when received by our eyes, enables
                    us to see things.
                  </p>
                  <span className="bg-tertiary-fixed/30 border-b-2 border-tertiary/40 py-0.5 px-1 rounded-sm">
                    Reflection of light is the phenomenon of bouncing back of light into the same medium on striking the surface of any object.
                  </span>
                  <div className="my-12 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white border border-outline-variant/10">
                      <img alt="Light reflection diagram" src={DIAGRAM} className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <span className="bg-on-surface/80 text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-tighter">Fig 10.1</span>
                        <p className="font-label-md text-xs text-on-surface/70">Reflection of light by a plane mirror</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Official NCERT CTA */}
              <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div className="flex items-start gap-3">
                  <Icon name="menu_book" className="text-primary text-2xl" />
                  <div>
                    <p className="font-bold text-on-surface text-sm">{book.title}</p>
                    <p className="text-xs text-on-surface-variant">{book.chapters} chapters • Official NCERT textbook</p>
                  </div>
                </div>
                <a
                  href={ncertBookUrl(book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-container transition-all whitespace-nowrap"
                >
                  <Icon name="open_in_new" className="text-base" />
                  {t('reader.openInNcert')}
                </a>
              </div>
            </div>
          </div>

          {toast && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-on-surface text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 z-30">
              <Icon name="check_circle" className="text-base" filled />
              {toast}
            </div>
          )}
        </section>

        {/* AI Side */}
        <aside className="hidden lg:flex w-[28%] bg-white flex-col h-full border-l border-outline-variant/20 z-20">
          <div className="p-6 pb-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center border border-primary/10">
                <Icon name="smart_toy" className="text-2xl" />
              </div>
              <div>
                <h2 className="font-headline-md text-lg text-on-surface">{t('reader.aiBuddy')}</h2>
                <p className="text-xs text-on-surface-variant/70">{t('reader.readingAlong')}</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-outline-variant/30 to-transparent" />
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 custom-scrollbar">
            <div className="flex flex-col gap-2">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-2xl rounded-tl-none">
                <p className="font-body-md text-on-surface leading-relaxed">
                  {lang === 'hi'
                    ? `आप "${book.title}" पढ़ रहे हैं। इसके बारे में कुछ भी पूछें, या मैं आपकी एक प्रश्नोत्तरी ले सकता हूँ।`
                    : `You're reading "${book.title}". Ask me anything about it, or I can quiz you.`}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-1">
                <button
                  onClick={() => ask(lang === 'hi' ? 'इस अध्याय को आसान भाषा में समझाओ' : 'Summarise this chapter simply')}
                  className="hover:bg-primary hover:text-white text-primary border border-primary/20 font-label-md text-xs px-3 py-1.5 rounded-full transition-all"
                >
                  {lang === 'hi' ? 'सारांश दें 📄' : 'Summarise 📄'}
                </button>
                <button
                  onClick={() => ask(lang === 'hi' ? 'इस विषय पर मेरी प्रश्नोत्तरी लें' : 'Quiz me on this topic')}
                  className="hover:bg-primary hover:text-white text-primary border border-primary/20 font-label-md text-xs px-3 py-1.5 rounded-full transition-all"
                >
                  {t('buddy.quizMe')} 📝
                </button>
              </div>
            </div>

            {chat.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none max-w-[85%]">
                    <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-2xl rounded-tl-none">
                  {m.content ? (
                    <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">{m.content}</p>
                  ) : (
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.3s]" />
                    </div>
                  )}
                </div>
              ),
            )}
          </div>

          <div className="p-6 border-t border-outline-variant/10">
            <div className="relative">
              <textarea
                rows={1}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    ask(question)
                  }
                }}
                placeholder={t('reader.askPage')}
                className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-3.5 pl-4 pr-12 focus:ring-1 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all resize-none text-sm placeholder:text-outline-variant/60"
              />
              <button
                onClick={() => ask(question)}
                disabled={busy || !question.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-container transition-all disabled:opacity-50"
              >
                <Icon name="arrow_upward" className="text-xl" />
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
