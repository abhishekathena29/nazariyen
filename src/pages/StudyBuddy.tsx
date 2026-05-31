import { useState, useRef, useEffect } from 'react'
import Icon from '../components/Icon'

type Msg = { role: 'user' | 'ai'; content: string }

const AI_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA7hBSQ-PQ0Iw3jZjsIfE9nPfU6HM427bAmUMJ-iZXcZpsiXaKPC4UCGNmHQD6EdkMeQvObEpyd-np0Hrp6PcsrgoMrsbh9fHJ5QgFnyaymh17JTfoprCB__QByEgIGz2HqAyw5ng1SxU7CldNMQoIWuvz09r899tZyfLJN8flmXDIDUW0GtH_NfWKI3WHRXUGppdPXTQDFMXP1F635Lr_PluWYvbZoYdVwFiGwzNO7QfdnH6HSW-s0sGu2M9ijOyHFvX6Wb3dCNKHh'

const FRIENDS = [
  { name: 'Rahul (You)', xp: '1,250 XP', rank: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxokUUkOExT2vDvwMLAAZSoapOmxZI8Te2UHIMHOWLSXjdTMzCFbKjgnLuKfZ9vuAITwGtjY7720CGqhwnytO_NNW-I90GGqAxiWShb8RdvsPYd4LkaxMo2Y3i08R0cxbmv5Zs5eaRgp2_5cjIUD3bkjoCwbPyNyN6y-TUQuna6-D9ZEPhP_cmw2EWUaaDxTd2iMArsB4ZRcis7Hgxx_fCju6S_plo8BGetrvYw6632KuM-7Z7SlSKnECJGPr9Wecfe7Jndh-MrQqZ', me: true },
  { name: 'Ananya S.', xp: '1,120 XP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMOgyo9DQ98hhP6LlVeSgEYZf_wj63laIrH49t3RYcAX7TyaoUShZqjyCf8cXjWpqlbRJgB1srimvDumUqniSrHEwf72Cr1YQIkZJUO62flPhuo1i9ad-myTTGnoLcVovfs0ejItsXvpfKFmTQI9VYJstoulGsRB8Ur6bwPJM97lcJLGH50XfKsMaNcG6WhcTs485xlj6QqImbkV9c6G57DW58uPmAwhuGcgCMAOSRNhOYDEWzm0YdaYVx-wV8RHIqeMLiPQYXvvEe' },
  { name: 'Ishaan K.', xp: '980 XP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqNL0Zjp1v15DzUXfokrvLqTaUZ72V9ClH9s5cZYLLBeXPsJvoIjiYyWNxYZV5c1Fe5utBl-iYUIvF-acHD1RXvBVldIseJtSwR0ZWEXmVW8Vq5Ao7AoLPXu-bWVeTHefZzzs5KTJTazS9JGJDL4hW3iNFoElA_KaqUsEwdIVAJkLI_8O8TpE3bkc9IpWfWXSU4ml5qx2joXFfLhYutnY2boQF-e7tfe0S8nPHGxQi-YqAFrgPmwRiGwVTgKcvJ2PYhw6afGbwHgmG' },
]

export default function StudyBuddy() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [text, setText] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = (content: string) => {
    if (!content.trim()) return
    setMessages((m) => [...m, { role: 'user', content }])
    setText('')
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'ai',
          content: `Thinking about "${content}"... Let's explore that together! Would you like a quick summary or a quiz?`,
        },
      ])
    }, 700)
  }

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
                <h2 className="font-headline-md text-lg text-primary mb-2">Hi Rahul! What are we learning today?</h2>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  I'm ready to dive into any subject with you. We can explore concepts, tackle homework, or prepare for exams together!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => send('Explain Class 10 Light Reflection like I am in Class 5')}
                  className="px-4 py-2 bg-white hover:bg-surface-container border border-outline-variant rounded-full font-label-md text-xs text-on-surface-variant transition-colors"
                >
                  Explain Class 10 Light Reflection like I'm in Class 5
                </button>
                <button
                  onClick={() => send('Quiz me on Carbon Compounds')}
                  className="px-4 py-2 bg-white hover:bg-surface-container border border-outline-variant rounded-full font-label-md text-xs text-on-surface-variant transition-colors"
                >
                  Quiz me on Carbon Compounds
                </button>
              </div>
            </div>
          </div>

          {/* Sample response */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
              <img alt="AI" src={AI_AVATAR} className="w-8 h-8" />
            </div>
            <div className="max-w-[85%] flex flex-col gap-4">
              <div className="bg-surface-container-low p-5 rounded-2xl rounded-bl-none border border-outline-variant/50">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Sure thing! Let's talk about <strong>Light Reflection</strong>. Imagine a ball hitting a wall and bouncing back. Light does the same thing when it hits a mirror!
                </p>
                <div className="mt-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <p className="font-body-md text-xs font-bold text-primary mb-1 uppercase tracking-wider">Key Idea</p>
                  <p className="font-body-md text-sm italic text-on-surface">
                    "The angle at which light hits is the same as the angle at which it bounces off."
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-xs text-on-surface-variant hover:bg-surface-container transition-colors">
                  <Icon name="psychology" className="text-base" />
                  Explain differently
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-xs text-on-surface-variant hover:bg-surface-container transition-colors">
                  <Icon name="quiz" className="text-base" />
                  Quiz me
                </button>
              </div>
            </div>
          </div>

          {/* User/AI messages */}
          {messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none max-w-[75%]">
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
              </div>
            ) : (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                  <img alt="AI" src={AI_AVATAR} className="w-8 h-8" />
                </div>
                <div className="max-w-[85%]">
                  <div className="bg-surface-container-low p-5 rounded-2xl rounded-bl-none border border-outline-variant/50">
                    <p className="text-sm text-on-surface-variant leading-relaxed">{m.content}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Input */}
        <div className="mt-auto border border-outline-variant rounded-2xl bg-white p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-outline-variant pb-3">
            <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-outline-variant bg-surface-container-low text-xs font-semibold text-on-surface hover:bg-surface-container transition-colors">
              Level: Class 10
              <Icon name="keyboard_arrow_down" className="text-sm" />
            </button>
            <div className="flex gap-1">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <Icon name="attach_file" className="text-xl" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <Icon name="image" className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send(text)
              }}
              placeholder="Ask Study Buddy anything..."
              className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder:text-on-surface-variant/50"
            />
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Icon name="mic" className="text-xl" />
            </button>
            <button
              onClick={() => send(text)}
              className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-container transition-colors"
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
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Daily Goals</h3>
            <Icon name="target" className="text-on-surface-variant text-lg" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-medium text-on-surface">Complete 1 Chapter</span>
                <span className="text-xs font-bold text-primary">60%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-medium text-on-surface">Solve 5 Math Problems</span>
                <span className="text-xs font-bold text-secondary">100%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
          <button className="w-full py-2.5 text-xs font-bold text-on-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-colors">
            View All Tasks
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Top Friends</h3>
            <Icon name="emoji_events" className="text-on-surface-variant text-lg" />
          </div>
          <div className="space-y-4 overflow-y-auto flex-1">
            {FRIENDS.map((f, i) => (
              <div
                key={f.name}
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  f.me ? 'border border-primary/20 bg-primary/5' : 'border border-transparent hover:border-outline-variant'
                }`}
              >
                <div className="relative">
                  <img src={f.img} className="w-9 h-9 rounded-full border border-outline-variant" />
                  {i === 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[8px] flex items-center justify-center rounded-full font-bold">
                      1
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-on-surface truncate">{f.name}</p>
                  <p className="text-[10px] text-on-surface-variant">{f.xp}</p>
                </div>
                {f.me && <Icon name="trending_up" className="text-primary text-base" />}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a className="text-xs font-bold text-primary hover:underline underline-offset-4" href="#">
              Full Leaderboard
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
