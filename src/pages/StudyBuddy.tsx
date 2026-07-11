import { useState, useRef, useEffect } from 'react'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'
import { streamBuddyReply, groqEnabled, type ChatMessage } from '../lib/groq'

type Msg = { role: 'user' | 'ai'; content: string }

const AI_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA7hBSQ-PQ0Iw3jZjsIfE9nPfU6HM427bAmUMJ-iZXcZpsiXaKPC4UCGNmHQD6EdkMeQvObEpyd-np0Hrp6PcsrgoMrsbh9fHJ5QgFnyaymh17JTfoprCB__QByEgIGz2HqAyw5ng1SxU7CldNMQoIWuvz09r899tZyfLJN8flmXDIDUW0GtH_NfWKI3WHRXUGppdPXTQDFMXP1F635Lr_PluWYvbZoYdVwFiGwzNO7QfdnH6HSW-s0sGu2M9ijOyHFvX6Wb3dCNKHh'

const FRIEND_IMGS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMOgyo9DQ98hhP6LlVeSgEYZf_wj63laIrH49t3RYcAX7TyaoUShZqjyCf8cXjWpqlbRJgB1srimvDumUqniSrHEwf72Cr1YQIkZJUO62flPhuo1i9ad-myTTGnoLcVovfs0ejItsXvpfKFmTQI9VYJstoulGsRB8Ur6bwPJM97lcJLGH50XfKsMaNcG6WhcTs485xlj6QqImbkV9c6G57DW58uPmAwhuGcgCMAOSRNhOYDEWzm0YdaYVx-wV8RHIqeMLiPQYXvvEe',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAqNL0Zjp1v15DzUXfokrvLqTaUZ72V9ClH9s5cZYLLBeXPsJvoIjiYyWNxYZV5c1Fe5utBl-iYUIvF-acHD1RXvBVldIseJtSwR0ZWEXmVW8Vq5Ao7AoLPXu-bWVeTHefZzzs5KTJTazS9JGJDL4hW3iNFoElA_KaqUsEwdIVAJkLI_8O8TpE3bkc9IpWfWXSU4ml5qx2joXFfLhYutnY2boQF-e7tfe0S8nPHGxQi-YqAFrgPmwRiGwVTgKcvJ2PYhw6afGbwHgmG',
]

export default function StudyBuddy() {
  const { profile, addXp } = useAuth()
  const { t, lang } = useLang()
  const [messages, setMessages] = useState<Msg[]>([])
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const classLevel = profile?.classLevel || 'Class 10'
  const name = (profile?.name || 'there').split(' ')[0]
  const xp = profile?.xp ?? 0

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  useEffect(() => () => abortRef.current?.abort(), [])

  async function send(content: string) {
    const q = content.trim()
    if (!q || busy) return
    setText('')

    const nextMessages: Msg[] = [...messages, { role: 'user', content: q }]
    setMessages([...nextMessages, { role: 'ai', content: '' }])
    setBusy(true)

    if (!groqEnabled) {
      setMessages([...nextMessages, { role: 'ai', content: t('buddy.noKey') }])
      setBusy(false)
      return
    }

    const history: ChatMessage[] = nextMessages.map((m) => ({
      role: m.role === 'ai' ? 'assistant' : 'user',
      content: m.content,
    }))

    const controller = new AbortController()
    abortRef.current = controller

    try {
      await streamBuddyReply(
        history,
        { language: lang, classLevel },
        (chunk) => {
          setMessages((prev) => {
            const copy = [...prev]
            const last = copy[copy.length - 1]
            if (last && last.role === 'ai') copy[copy.length - 1] = { ...last, content: last.content + chunk }
            return copy
          })
        },
        controller.signal,
      )
      addXp(10)
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return
      const msg = (err as Error)?.message === 'NO_KEY' ? t('buddy.noKey') : t('buddy.error')
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: 'ai', content: msg }
        return copy
      })
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  const friends = [
    { name: `${name} (You)`, xp, me: true },
    { name: 'Ananya S.', xp: 1120, img: FRIEND_IMGS[0] },
    { name: 'Ishaan K.', xp: 980, img: FRIEND_IMGS[1] },
  ].sort((a, b) => b.xp - a.xp)

  const suggestions = [t('buddy.suggest1'), t('buddy.suggest2'), t('buddy.suggest3')]

  return (
    <div className="flex h-full overflow-hidden">
      {/* Chat */}
      <section className="flex-1 flex flex-col bg-white p-4 md:p-6 gap-4 md:gap-6 relative overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto chat-container pr-2 flex flex-col gap-8">
          {/* Bot welcome */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
              <img alt="AI" src={AI_AVATAR} className="w-8 h-8" />
            </div>
            <div className="max-w-[85%] flex flex-col gap-4">
              <div className="bg-surface-container-low p-5 rounded-2xl rounded-bl-none border border-outline-variant/50">
                <h2 className="font-headline-md text-lg text-primary mb-2">
                  {lang === 'hi' ? `नमस्ते ${name}! ` : `Hi ${name}! `}
                  {t('buddy.greeting')}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{t('buddy.intro')}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="px-4 py-2 bg-white hover:bg-surface-container border border-outline-variant rounded-full font-label-md text-xs text-on-surface-variant transition-colors text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Messages */}
          {messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none max-w-[75%]">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ) : (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                  <img alt="AI" src={AI_AVATAR} className="w-8 h-8" />
                </div>
                <div className="max-w-[85%] flex flex-col gap-3">
                  <div className="bg-surface-container-low p-5 rounded-2xl rounded-bl-none border border-outline-variant/50">
                    {m.content ? (
                      <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-wrap">{m.content}</p>
                    ) : (
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.15s]" />
                        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.3s]" />
                        <span className="text-xs ml-1">{t('buddy.thinking')}</span>
                      </div>
                    )}
                  </div>
                  {m.content && !busy && i === messages.length - 1 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => send(lang === 'hi' ? 'इसे अलग और आसान तरीके से समझाएं' : 'Explain that differently, in a simpler way')}
                        className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-xs text-on-surface-variant hover:bg-surface-container transition-colors"
                      >
                        <Icon name="psychology" className="text-base" />
                        {t('buddy.explainDifferently')}
                      </button>
                      <button
                        onClick={() => send(lang === 'hi' ? 'इस विषय पर मेरी एक छोटी प्रश्नोत्तरी लें' : 'Quiz me on this topic')}
                        className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-xs text-on-surface-variant hover:bg-surface-container transition-colors"
                      >
                        <Icon name="quiz" className="text-base" />
                        {t('buddy.quizMe')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Input */}
        <div className="mt-auto border border-outline-variant rounded-2xl bg-white p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-outline-variant pb-3">
            <span className="flex items-center gap-2 px-3 py-1 rounded-lg border border-outline-variant bg-surface-container-low text-xs font-semibold text-on-surface">
              {t('buddy.level')}: {classLevel}
            </span>
            {!groqEnabled && (
              <span className="text-[10px] text-error font-semibold uppercase tracking-wide">Groq key missing</span>
            )}
          </div>
          <div className="flex items-center gap-3 pt-1">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send(text)
              }}
              placeholder={t('buddy.placeholder')}
              className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder:text-on-surface-variant/50"
            />
            <button
              onClick={() => send(text)}
              disabled={busy || !text.trim()}
              className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-container transition-colors disabled:opacity-50"
            >
              <Icon name="send" className="text-xl" filled />
            </button>
          </div>
        </div>
      </section>

      {/* Right sidebar */}
      <aside className="w-80 bg-white border-l border-outline-variant p-6 flex flex-col gap-8 hidden xl:flex">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">{t('buddy.dailyGoals')}</h3>
            <Icon name="target" className="text-on-surface-variant text-lg" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-medium text-on-surface">{t('buddy.completeChapter')}</span>
                <span className="text-xs font-bold text-primary">60%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-medium text-on-surface">{t('buddy.solveMath')}</span>
                <span className="text-xs font-bold text-secondary">100%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">{t('buddy.topFriends')}</h3>
            <Icon name="emoji_events" className="text-on-surface-variant text-lg" />
          </div>
          <div className="space-y-4 overflow-y-auto flex-1">
            {friends.map((f, i) => (
              <div
                key={f.name}
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  f.me ? 'border border-primary/20 bg-primary/5' : 'border border-transparent hover:border-outline-variant'
                }`}
              >
                <div className="relative">
                  {f.img ? (
                    <img src={f.img} className="w-9 h-9 rounded-full border border-outline-variant" />
                  ) : (
                    <div className="w-9 h-9 rounded-full border border-primary/30 bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {f.name.charAt(0)}
                    </div>
                  )}
                  {i === 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[8px] flex items-center justify-center rounded-full font-bold">
                      1
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-on-surface truncate">{f.name}</p>
                  <p className="text-[10px] text-on-surface-variant">{f.xp.toLocaleString()} XP</p>
                </div>
                {f.me && <Icon name="trending_up" className="text-primary text-base" />}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
