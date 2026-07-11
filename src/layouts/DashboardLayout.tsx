import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'
import type { StringKey } from '../lib/i18n'

const FALLBACK_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBwrEpoaKqW4hjHXz_EuexVVDui9Sle5HNidVhCx-PRitiPDCoE7qydgNBJD_XJCIw7qwSnKrHc8ZYHDQYHm0AOdlpUFrjPahHCQnqDnZZ5AN26ydu07qf2y0prP1ApdXhtxBKjR5SKhnpZfdzHuVJiFYK1Dad97OD6Tg_q135xLgeENNa7n2Gh9CjuUBy90T8zJkeEovRDD2BZpsoRYbXDY85TPhF2xEGUNeNH7Zi-MA2B5Z1hnp2FskcHMQoSId_jWv87Zzrg2zxc'

const NAV: { to: string; key: StringKey; icon: string }[] = [
  { to: '/dashboard', key: 'nav.studyBuddy', icon: 'smart_toy' },
  { to: '/library', key: 'nav.library', icon: 'library_books' },
  { to: '/careers', key: 'nav.careers', icon: 'route' },
]

export default function DashboardLayout() {
  const navigate = useNavigate()
  const { profile, user, logout } = useAuth()
  const { t, lang, setLang, langLabel } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const closeDrawer = () => setMobileOpen(false)

  const name = profile?.name || user?.displayName || 'Learner'
  const classLevel = profile?.classLevel || 'Class 10'
  const xp = profile?.xp ?? 0
  const streak = profile?.streak ?? 1
  const avatar = profile?.photoURL || user?.photoURL || FALLBACK_AVATAR

  async function handleLogout() {
    closeDrawer()
    await logout()
    navigate('/')
  }

  const sidebarContent = (
    <>
      <button
        onClick={() => {
          closeDrawer()
          navigate('/')
        }}
        className="flex items-center gap-3 px-2"
      >
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
          <Icon name="auto_stories" />
        </div>
        <div className="text-left">
          <h1 className="font-headline-md font-extrabold text-primary leading-tight">Nazariyen</h1>
          <p className="font-metadata text-metadata text-on-surface-variant/70">
            {classLevel} • {t('shell.superLearner')}
          </p>
        </div>
      </button>

      <nav className="flex-1 space-y-1">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeDrawer}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive
                  ? 'bg-primary/5 text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={item.icon} className="text-[22px] group-hover:text-primary" filled={isActive} />
                <span className="font-label-md text-label-md">{t(item.key)}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => {
          closeDrawer()
          navigate('/dashboard')
        }}
        className="w-full py-3.5 px-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
      >
        <Icon name="auto_awesome" className="text-lg" />
        <span>{t('nav.askAiBuddy')}</span>
      </button>

      <div className="pt-4 border-t border-outline-variant/30 space-y-1">
        <div className="flex items-center gap-3 px-4 py-2">
          <img alt="Profile" src={avatar} className="w-9 h-9 rounded-full border border-outline-variant object-cover" />
          <div className="min-w-0">
            <p className="text-sm font-bold text-on-surface truncate">{name}</p>
            <p className="text-[10px] text-on-surface-variant truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all"
        >
          <Icon name="logout" className="text-lg" />
          <span className="text-xs font-semibold">{t('nav.logout')}</span>
        </button>
      </div>
    </>
  )

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-outline-variant/30 flex-col p-6 gap-6 z-50">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-0 z-[60] ${mobileOpen ? '' : 'pointer-events-none'}`}>
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-72 max-w-[85%] bg-white border-r border-outline-variant/30 flex flex-col p-6 gap-6 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={closeDrawer}
            className="absolute top-4 right-4 p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors"
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
          {sidebarContent}
        </aside>
      </div>

      {/* Content */}
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-outline-variant/30 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-on-surface p-1.5 -ml-1.5 rounded-lg hover:bg-surface-container-low transition-colors"
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors"
              >
                <Icon name="language" className="text-on-surface-variant text-lg" />
                <span className="font-label-md text-sm text-on-surface">{langLabel}</span>
                <Icon name="expand_more" className="text-on-surface-variant text-sm" />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute left-0 mt-2 w-40 bg-white border border-outline-variant/40 rounded-xl shadow-lg z-20 overflow-hidden">
                    {(['en', 'hi'] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code)
                          setLangOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface-container-low transition-colors flex items-center justify-between ${
                          lang === code ? 'text-primary font-bold' : 'text-on-surface'
                        }`}
                      >
                        {code === 'en' ? 'English' : 'हिंदी'}
                        {lang === code && <Icon name="check" className="text-base" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-tertiary-fixed/30 text-tertiary">
              <Icon name="bolt" className="text-lg" filled />
              <span className="font-label-md text-sm font-bold">
                {streak} {t('shell.days')}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 text-primary">
              <Icon name="workspace_premium" className="text-lg" filled />
              <span className="font-label-md text-sm font-bold">{xp.toLocaleString()} XP</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant shrink-0">
              <img alt="Profile" src={avatar} className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
