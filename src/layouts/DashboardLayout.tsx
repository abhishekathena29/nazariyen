import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const PROFILE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBwrEpoaKqW4hjHXz_EuexVVDui9Sle5HNidVhCx-PRitiPDCoE7qydgNBJD_XJCIw7qwSnKrHc8ZYHDQYHm0AOdlpUFrjPahHCQnqDnZZ5AN26ydu07qf2y0prP1ApdXhtxBKjR5SKhnpZfdzHuVJiFYK1Dad97OD6Tg_q135xLgeENNa7n2Gh9CjuUBy90T8zJkeEovRDD2BZpsoRYbXDY85TPhF2xEGUNeNH7Zi-MA2B5Z1hnp2FskcHMQoSId_jWv87Zzrg2zxc'

const NAV = [
  { to: '/dashboard', label: 'Study Buddy', icon: 'smart_toy' },
  { to: '/library', label: 'Library', icon: 'library_books' },
  { to: '/careers', label: 'Careers', icon: 'route' },
]

export default function DashboardLayout() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeDrawer = () => setMobileOpen(false)

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
          <p className="font-metadata text-metadata text-on-surface-variant/70">Class 10 • Super Learner</p>
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
                <span className="font-label-md text-label-md">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <button className="w-full text-left flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all group">
          <Icon name="workspace_premium" className="text-[22px] group-hover:text-primary" />
          <span className="font-label-md text-label-md">Quests</span>
        </button>
        <button className="w-full text-left flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all group">
          <Icon name="account_circle" className="text-[22px] group-hover:text-primary" />
          <span className="font-label-md text-label-md">Profile</span>
        </button>
      </nav>

      <button
        onClick={() => {
          closeDrawer()
          navigate('/dashboard')
        }}
        className="w-full py-3.5 px-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
      >
        <Icon name="auto_awesome" className="text-lg" />
        <span>Ask AI Buddy</span>
      </button>

      <div className="pt-4 border-t border-outline-variant/30 space-y-1">
        <button className="w-full text-left flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all">
          <Icon name="settings" className="text-lg" />
          <span className="text-xs font-semibold">Settings</span>
        </button>
        <button
          onClick={() => {
            closeDrawer()
            navigate('/')
          }}
          className="w-full text-left flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all"
        >
          <Icon name="logout" className="text-lg" />
          <span className="text-xs font-semibold">Log Out</span>
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
        {/* Backdrop */}
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
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
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
              <Icon name="language" className="text-on-surface-variant text-lg" />
              <span className="font-label-md text-sm text-on-surface">English</span>
              <Icon name="expand_more" className="text-on-surface-variant text-sm" />
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-tertiary-fixed/30 text-tertiary">
              <Icon name="bolt" className="text-lg" filled />
              <span className="font-label-md text-sm font-bold">12 Days</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 text-primary">
              <Icon name="workspace_premium" className="text-lg" filled />
              <span className="font-label-md text-sm font-bold">1,250 XP</span>
            </div>
            <button className="p-1.5 hover:bg-surface-container-low rounded-full transition-all text-on-surface-variant">
              <Icon name="notifications" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant shrink-0">
              <img alt="Profile" src={PROFILE_IMG} className="w-full h-full object-cover" />
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
