import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const CLASSES = ['Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10','Class 11','Class 12']
const LANGS = ['English', 'Hindi', 'Urdu']

const BOOKS = [
  {
    subject: 'Science',
    chapters: 15,
    title: 'Class 10 Science',
    color: 'primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAASoHJMijOqMwct2Cfv2ZyCSb4sNpIvSHaVibiAaKBHpbFZtw1LEoJnBjJ2G8EIyXdsKe2IrSbPoR21b7e3jNYwrPA3HwRAdo8gTrGb05L9S8MC7qnfrQ-nGvZ8oxrekYcqxr_vYfjWKkkskIJhB-YaeX-__bxbj6vOS6QwhhP4xQzoxCwlU3yzUjcFsHL26RwNUViIZW2YDiDbpZNFew1gw87_8RAJwhR1xIRkiGPAxlZ3YYfXDDA1dpCLAjf1RdTpuHP5b9kVI_h',
  },
  {
    subject: 'Mathematics',
    chapters: 14,
    title: 'Class 10 Mathematics',
    color: 'secondary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mNkEjbiOi0KE3CnHGzoEltks_8_W-Jls67QAUzKnHrIXIEmv8PH8I7y--BCZuZVwEpUDYkUmTe8bn0efHFe4u3A_sS0Ya5fWw3PoPV_rYTt4VNpy5LDaA01V_ZC6dsZGQdahLfe4n19z8rqocByLPPCABzBO0qsH-PwqB713CY7Xf6ws1Yn5jAmgiYeU0T5eaVndSABjePVxu97O9m71Dx8WMCzi_HyKNdn4qzL3tUL86GJ_yfxhvreJjISZArX1fgJZQJ799BqO',
  },
  {
    subject: 'History',
    chapters: 8,
    title: 'India & World',
    color: 'tertiary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC409LUuPKNSLsIAPk29vPgZBnDUQhSTcm1pesOLJDvkcqyuUtzfrbLHKSuz24GC9AUpEVxxCQ2d36Mwjp82jT4LVczCKAxnu2AQrBTm6yylhZ8tycy4LobeMMskdKWDwL5sr2gM3kXFcQpsftHNcS10vQuCedNFEEyp8O9VNbbrKm29PTHUo49rnSJGtA2zPSocPuJHBFOkVHq_6PHi2LB1LqfKInNQb3oaNaXdCPGb8rDYN7MiBsGUnHw3IF1HfgY9eq80JDbgPVF',
  },
]

const RECENT = [
  { title: 'Science Class 10', chapter: 'Ch 4: Carbon...', progress: 75, color: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgtoKyFse1ECX8HosFcE4bfv6POyoz9LW_GgacqpHrBmw2g-Ws1QoQSV45Sl_D0LAr5Lshb1v11nn6_Rt46ouhwkKZH_JAr_2TaLhRnQHRgaGU_eaY6xTSRXnaA2Xzm0EsHZ73f8HoA_fS1pV3Aoqmux_NZ-_j9FZ-FuhRo_YykmlmUHpDvTLOtJ6vcCJN8YXqafjTpkOR561796neg5F-Y_1q030KyDVHDF5SuU8kC1O-C6FYhtwjvQR4RMvAEcMI4cNwreQDrQGM' },
  { title: 'Math Class 10', chapter: 'Ch 8: Trigonom...', progress: 25, color: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdqkQXO8mfueoLeJnHZGn-jBoaZB2MFwcsHsJBFPf3zTXMzAWSd9v0cQ7bw-7Grtl-oR_uJk11UOEUsjUu4EmkcQdaRHNylRh3hY5pr3XcyQFcylFi-T1MHs3rr3HvuB1w4IX3o-7IMwcNPtExmOtFpeBoxJI0GkV2PEkJMtbPQqD9QAIvX0ZE76ldloM5nUPuhNaJbxD_BdBF5MWJ--x6DyJmPXe5CkUA_VzLf99R-GU74cwhGXqyrfTwWg2dfq4X9_KluedgrSp4' },
]

export default function Library() {
  const navigate = useNavigate()
  const [activeClass, setActiveClass] = useState('Class 10')
  const [activeLang, setActiveLang] = useState('English')

  return (
    <div className="flex h-full overflow-hidden">
      <section className="flex-1 overflow-y-auto px-4 md:px-margin-page py-6 md:py-10 custom-scrollbar">
        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-12 bg-gradient-to-br from-primary to-primary-container p-6 md:p-12 min-h-[200px] md:min-h-[240px] flex items-center">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4">Your Digital Library</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Access the complete NCERT collection anytime. Refined for your success.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20">
                <Icon name="book_5" className="text-lg" />
                300+ Books
              </span>
              <span className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20">
                <Icon name="translate" className="text-lg" />
                15 Languages
              </span>
            </div>
          </div>
        </div>

        {/* Selectors */}
        <div className="mb-12 space-y-8">
          <div>
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Class Selector</h3>
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
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Preferred Language</h3>
            <div className="flex gap-2">
              {LANGS.map((l) => {
                const isActive = l === activeLang
                return (
                  <button
                    key={l}
                    onClick={() => setActiveLang(l)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOOKS.map((b) => (
            <div
              key={b.title}
              className={`group bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-${b.color} transition-all`}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-surface-container">
                <img alt={b.title} src={b.img} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-bold text-${b.color} bg-${b.color}/10 px-2 py-0.5 rounded uppercase tracking-wider`}>
                  {b.subject}
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">{b.chapters} Chapters</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-6">{b.title}</h4>
              <button
                onClick={() => navigate('/library/reader')}
                className={`w-full py-3 bg-white border border-outline-variant hover:border-${b.color} hover:text-${b.color} text-on-surface font-bold rounded-xl text-sm transition-all`}
              >
                Open Textbook
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Right sidebar */}
      <aside className="w-80 bg-white border-l border-outline-variant/30 p-8 flex flex-col gap-10 hidden xl:flex overflow-y-auto custom-scrollbar">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Recently Read</h3>
            <a className="text-xs font-bold text-primary hover:underline" href="#">All</a>
          </div>
          <div className="space-y-6">
            {RECENT.map((r) => (
              <div
                key={r.title}
                onClick={() => navigate('/library/reader')}
                className="flex gap-4 cursor-pointer group"
              >
                <div className="w-12 h-16 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/20">
                  <img src={r.img} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{r.title}</p>
                  <p className="text-xs text-on-surface-variant mb-2">{r.chapter}</p>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className={`h-full ${r.color}`} style={{ width: `${r.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">Bookmarks</h3>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer bg-surface-container-low/30">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="bookmark" className="text-primary text-base" filled />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Science • P. 142</span>
              </div>
              <p className="text-xs text-on-surface font-medium leading-relaxed line-clamp-2">
                "The periodic table is arranged in order of increasing atomic..."
              </p>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-tertiary/30 transition-all cursor-pointer bg-surface-container-low/30">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="bookmark" className="text-tertiary text-base" filled />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">History • P. 24</span>
              </div>
              <p className="text-xs text-on-surface font-medium leading-relaxed line-clamp-2">
                "The rise of nationalism in Europe during the nineteenth..."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto p-6 bg-primary-container/10 border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Icon name="lightbulb" className="text-xl" />
            <span className="text-xs font-bold uppercase tracking-wider">Pro Tip</span>
          </div>
          <p className="text-xs leading-relaxed text-on-surface-variant font-medium">
            Keep your streak alive! Revise 'Carbon Compounds' today to master Chapter 4.
          </p>
        </div>
      </aside>
    </div>
  )
}
