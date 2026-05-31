import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const DIAGRAM =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAiFnKAUHMyFtScNlnWEgmD1PB_D_QwV_jS7MzlPP6-lm3Zy6h2nF2p-C--m44OSg7KkrdQcH3PubP89GAb3aInJPMOM0RLF6sS458YHN7DMUVzoIiizFr-xKEO_8QeXztt-XKF0vkKk8o7i4IVDB_qZm7IpCIGXZeZyWK-7RBPIg6U6XaQWCZ6zyINd-no37rnHv1iVOhNBGv-irq9RRPdVWoYdmyUhoFfhtRnsumG7ilU1vYk_04LVI4lCsNlRzkmPFZuN1M0RoOx'

const PROFILE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZt1loYGPjNRf7CpCzK6Y1XaZbtFcYHd4YyCmmmlEqkNa2mVjJ5A8gtHN5JmFC0lCb8E9z9CyIYAUJGqnamG8XYw0uRQ62k_RBAS7Jd6JqdRDyntq_8vJkWUIBkksootm3_wgqzZLbeYdR4giROv9KmMUyr5dx45yRDbTC4VXcJn9OPB99QkhWrHEVDil3ZHC2Q1rizkMy2CdAz30oTOUlpTPTqh871AL1PXGE80oGCq2utSu4uwT_p-u7PHMBvEKL55T45w_lQMeO'

export default function PdfReader() {
  const navigate = useNavigate()
  const [zoom, setZoom] = useState(125)
  const [question, setQuestion] = useState('')

  return (
    <div className="bg-background text-on-surface flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-outline-variant/30 z-40 flex justify-between items-center w-full px-margin-page py-3 h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline-lg text-2xl font-extrabold tracking-tight text-primary">
            Nazariyen
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link to="/dashboard" className="text-on-surface-variant font-medium hover:text-primary transition-colors">
              Study Buddy
            </Link>
            <Link to="/library" className="text-primary font-bold border-b-2 border-primary pb-0.5">
              Library
            </Link>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">
              Quests
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 bg-secondary-container/20 px-3 py-1 rounded-full border border-secondary/10">
            <Icon name="bolt" className="text-secondary text-base" filled />
            <span className="font-label-md text-on-secondary-container">1,250 XP</span>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="language" />
          </button>
          <img alt="Profile" src={PROFILE_IMG} className="w-8 h-8 rounded-full border border-outline-variant" />
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Reader */}
        <section className="w-[72%] flex flex-col bg-[#fdfdfe] border-r border-outline-variant/30 relative">
          {/* Toolbar */}
          <div className="h-14 flex items-center justify-between px-8 bg-white/50 border-b border-outline-variant/20 z-10">
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate('/library')}
                className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
              >
                <Icon name="arrow_back" />
              </button>
              <span className="font-label-md text-on-surface-variant/80 tracking-wide">
                Class 10 Science • Chapter 10
              </span>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 25))}
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="remove" />
                </button>
                <span className="font-label-md text-primary w-12 text-center">{zoom}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 25))}
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="add" />
                </button>
              </div>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all font-label-md">
                  <Icon name="volume_up" className="text-[20px]" />
                  Read Aloud
                </button>
                <div className="h-6 w-px bg-outline-variant/40" />
                <div className="flex items-center gap-5">
                  <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                    <Icon name="bookmark" />
                  </button>
                  <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                    <Icon name="stylus_note" />
                  </button>
                  <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                    <Icon name="file_download" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Page */}
          <div className="flex-1 overflow-y-auto p-16 custom-scrollbar flex justify-center bg-surface-container-lowest">
            <div
              className="w-full max-w-3xl bg-white shadow-sm border border-outline-variant/20 rounded-sm p-20 min-h-[1200px] relative"
              style={{ fontSize: `${zoom}%`, lineHeight: 1.6 }}
            >
              <div className="flex justify-between items-baseline mb-16 border-b border-outline-variant/10 pb-4">
                <div>
                  <p className="text-primary font-label-md tracking-widest uppercase text-xs mb-1">Chapter 10</p>
                  <h1 className="font-headline-lg text-3xl text-on-surface">Light – Reflection and Refraction</h1>
                </div>
                <span className="text-outline text-sm">Page 161</span>
              </div>
              <div className="max-w-none text-on-surface leading-relaxed text-lg">
                <p className="mb-8">
                  We see a variety of objects in the world around us. However, we are unable to see anything in a dark room.
                  On lighting up the room, things become visible. What makes things visible? During the day, the sunlight
                  helps us to see objects. An object reflects light that falls on it. This reflected light, when received by
                  our eyes, enables us to see things.
                </p>
                <span className="bg-tertiary-fixed/30 border-b-2 border-tertiary/40 py-0.5 px-1 rounded-sm">
                  Reflection of light is the phenomenon of bouncing back of light into the same medium on striking the
                  surface of any object.
                </span>
                <p className="mt-8 mb-10">
                  A highly polished surface, such as a mirror, reflects most of the light falling on it. You are already
                  familiar with the laws of reflection of light. Let us recall these laws —
                </p>
                <div className="my-12 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 group">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white border border-outline-variant/10">
                    <img alt="Light reflection diagram" src={DIAGRAM} className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="bg-on-surface/80 text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-tighter">
                        Fig 10.1
                      </span>
                      <p className="font-label-md text-xs text-on-surface/70">Reflection of light by a plane mirror</p>
                    </div>
                  </div>
                </div>
                <p className="mb-8">
                  (i) The angle of incidence is equal to the angle of reflection, and
                  <br />
                  (ii) The incident ray, the normal to the mirror at the point of incidence and the reflected ray, all lie
                  in the same plane.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Side */}
        <aside className="w-[28%] bg-white flex flex-col h-full border-l border-outline-variant/20 z-20">
          <div className="p-6 pb-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center border border-primary/10">
                <Icon name="smart_toy" className="text-2xl" />
              </div>
              <div>
                <h2 className="font-headline-md text-lg text-on-surface">AI Buddy</h2>
                <p className="text-xs text-on-surface-variant/70">Reading along with you</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-outline-variant/30 to-transparent" />
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 custom-scrollbar">
            <div className="flex flex-col gap-2">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-2xl rounded-tl-none">
                <p className="font-body-md text-on-surface leading-relaxed">
                  This page explains how mirrors work. I see you highlighted the definition of <strong>Reflection</strong>.
                </p>
                <p className="font-body-md text-on-surface leading-relaxed mt-3">
                  Do you want me to simplify the diagram or quiz you on the two laws mentioned below?
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-1">
                <button className="hover:bg-primary hover:text-white text-primary border border-primary/20 font-label-md text-xs px-3 py-1.5 rounded-full transition-all">
                  Simplify Diagram 🎨
                </button>
                <button className="hover:bg-primary hover:text-white text-primary border border-primary/20 font-label-md text-xs px-3 py-1.5 rounded-full transition-all">
                  Quiz me! 📝
                </button>
              </div>
            </div>

            <div className="bg-tertiary-container/5 border border-tertiary/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="lightbulb" className="text-tertiary text-lg" />
                <span className="font-label-md text-[11px] text-tertiary uppercase tracking-widest font-bold">
                  Quick Insight
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant italic text-sm leading-relaxed">
                "Did you know light travels at 299,792,458 meters per second? That's about 7 times around the Earth in one
                second!"
              </p>
            </div>
          </div>

          <div className="p-6 border-t border-outline-variant/10">
            <div className="relative">
              <textarea
                rows={1}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask anything about this page..."
                className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-3.5 pl-4 pr-12 focus:ring-1 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all resize-none text-sm placeholder:text-outline-variant/60"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-container transition-all">
                <Icon name="arrow_upward" className="text-xl" />
              </button>
            </div>
            <p className="text-center mt-3 text-[10px] text-outline uppercase tracking-wider">
              Select text for specific context
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}
