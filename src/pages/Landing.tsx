import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCs9p1xGmaXZ-PsX8MK1n6qL-4RXUyn_ATv6dH5KM6uGSQ5Gn9WC4_p-4WYYboSYXaYVed-u2zRDbnTuX01lXe1ORTbMto43no1a5YMYHBvL922W8XJIuO4T1YLMxSCqBmLTUZXKUNEEXzvR8KlU9auCfXxsF_9g69ccqrBxxO9319ypebjXbAItRt497v_ZXLO-rmb4c6LXpUoJB3YwFJX9yxhYrn_m__3h8yAnyh4YUvzLa04rIYBQzuAMrBUmg5d1qxP1u_FJ2-V'

const AI_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBkOgPRBOpX1GbokymJFIairMwVHQzviiPKVHb7o07s0P0KZLmrGqnOqEmN79zOM9HGjpR-vMlHkozTNQFLhFw_3Y2DS-LhXKJIfcJiPP7cLUrawogDONT1dBP-iGJrzEHaB30SVEs1tsytxPcglZGLk3OQUydvOdeOEbj6RMLBCFQrV69CQyes8Zf8P4lDpvoDxXl86oDRwmIcjOmZ7SWiRdCC4iUT3dkf3Fa9YPTRSyNTNeT8RgH75ouBJOQDA2ONOQj06j5MPdXO'

const TESTIMONIALS = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5EoVcuPcbt67CRhtIyrB2dZ3JiMvSrXY8Kxxx9ET-gz-Nd2h0kH88H4NMelCvOneq_PbSxVab4d_rPAdAQclgDWN3Pjoaz4lfo7r2LkBX6Kzg5ARE0TKPdyAzLY8zNL2EeO0Lano_WT1Q1CFhOKnR-2StFlG_27cCiOHqGjO45bmqHh2xD-dhNx5PxAthwyFW4Z7rLggiU_xVw4Ld3dxwUgdzAlWsJkcHTkwB81ButlSkbZVoS7fmWhY4zU8mKp2b7FP4Ysa3KkJ',
    name: 'Priya Sharma',
    role: 'Class 11, Science Stream',
    text: '"The AI Study Buddy is like having a private tutor available at 11 PM. It helped me clear my physics doubts in minutes that usually take hours of searching."',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ioqKUwMi3_J6bgh18v8sQCfU93WHcuLNYkJMGyoI7iq-DOhhEnqi12qIuGsYiLiLfrXaHwUlAg_h6Ubeejqk1wODzn2x4X2kPbJxeeoIe3CJ6VhN6nJGDiu-R8qjGoVGyuLmbk2gZ_GxYZP8Tv8Xy7powPO9ZXGxsVqLPw-xF1NQKu0FW4Xj2A8wnmbQmUPprTXNMMmSBryjxgljx-U1MMAT0tdlHGsdJCuAMItYLCDjZYjJgazqPRNTVGAnPyA4yUaRk7dwToDN',
    name: 'Arjun Verma',
    role: 'Class 9, Topper',
    text: '"The gamified learning paths actually make me want to study. I love the Quest system and the career flowchart helped me decide I want to pursue Aerospace Engineering!"',
    featured: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtx41q0L99spsAZZi9LdC-GdMX47R8vvRMyoaOR1PZ71tiT_EgRiYOMJaMA53tfHajk3g0qURGousUxGJEH1JDy1uSCGhqU56lgSet_tPn_KZLARFFCg2Rteb_SjUKqtSK040ebeVvGaoNz8ACMLN8bZpUvh_SgEplZ52v22b2LVPYrA0zMCpUaN_0I4rs0ZvHouLiCPTF3BRolg8c8frn4axnewoCuq4-ItPuryjUACINInPqTyEc2NRwok9feMJ5n0t5bvtAGjFM',
    name: 'Dr. Meera Iyer',
    role: 'Parent of 7th Grader',
    text: '"As a parent, I love the progress tracking. I can see exactly where my son is excelling and where he needs help without having to hover over him."',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Nav */}
      <header className="bg-surface/90 backdrop-blur-md fixed top-0 z-40 w-full border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.08)]">
        <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link to="/" className="font-headline-lg text-headline-lg font-black tracking-tight text-primary">
            Nazariyen
          </Link>
          <nav className="hidden md:flex items-center gap-gutter">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-all" href="#features">Features</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-all" href="#library">Library</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-all" href="#testimonials">Success Stories</a>
            <Link className="text-on-surface-variant font-medium hover:text-primary transition-all" to="/login">Login</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-primary font-label-md">
              <Icon name="bolt" className="text-[18px]" />
              <span>1,250 XP</span>
            </div>
            <button
              onClick={() => navigate('/signup')}
              className="bg-primary text-on-primary font-label-md px-6 py-2 rounded-full btn-3d shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-secondary-container/30 text-on-secondary-container px-4 py-2 rounded-full mb-6 animate-bounce">
                <Icon name="auto_awesome" className="text-[20px]" filled />
                <span className="font-label-sm uppercase tracking-wider">AI-Powered Learning for NCERT</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 leading-tight">
                Your Personalized Path to <span className="text-primary italic">Mastery</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Unlock your potential with Nazariyen. From interactive NCERT resources to your very own AI Study Buddy, we
                provide everything you need to excel in your K-12 journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-primary text-on-primary font-label-md px-8 py-4 rounded-xl btn-3d shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  Start Learning Adventure
                  <Icon name="arrow_forward" />
                </button>
                <button className="bg-surface-container-highest text-primary font-label-md px-8 py-4 rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                  <Icon name="play_circle" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                <img
                  alt="Happy student"
                  src={HERO_IMG}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border-8 border-white"
                />
                <div className="absolute top-10 -right-6 z-20 glass-card p-4 rounded-2xl shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Icon name="check_circle" />
                    </div>
                    <div>
                      <p className="font-label-sm text-on-surface">Topic Mastered!</p>
                      <p className="text-[10px] text-on-surface-variant">Quadratic Equations</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 -left-6 z-20 glass-card p-4 rounded-2xl shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <img alt="AI Buddy" src={AI_AVATAR} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-label-sm text-on-surface">AI Buddy Active</p>
                      <div className="flex gap-1 mt-1">
                        <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento */}
        <section id="features" className="px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-low/50">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Why Students Love Nazariyen</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                We've built a holistic ecosystem that supports every aspect of your learning, from daily doubts to long-term career goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex flex-col md:flex-row gap-8 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Icon name="smart_toy" className="text-[32px]" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">AI Study Buddy</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Stuck on a complex math problem? Your AI Buddy is available 24/7 to explain concepts in simple,
                    relatable terms. It learns your pace and adapts its teaching style just for you.
                  </p>
                  <button onClick={() => navigate('/dashboard')} className="text-primary font-label-md flex items-center gap-2 group">
                    Learn more about AI
                    <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 bg-surface-container rounded-2xl p-4 relative min-h-[200px]">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">
                      <p className="text-sm">"How do I balance this chemical equation?"</p>
                    </div>
                    <div className="bg-primary text-on-primary p-3 rounded-2xl rounded-br-none shadow-md ml-auto max-w-[80%]">
                      <p className="text-sm">"Let's break it down! First, count the atoms on both sides..."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-tertiary-fixed rounded-3xl p-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)] group hover:scale-[1.02] transition-all">
                <div className="w-14 h-14 bg-on-tertiary-fixed/10 rounded-2xl flex items-center justify-center text-on-tertiary-fixed mb-6">
                  <Icon name="workspace_premium" className="text-[32px]" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-tertiary-fixed mb-4">Gamified Quests</h3>
                <p className="font-body-md text-body-md text-on-tertiary-fixed-variant mb-8">
                  Turn your study sessions into epic adventures. Earn XP, collect badges, and climb the leaderboard while mastering NCERT chapters.
                </p>
                <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-secondary-fixed-dim w-3/4 rounded-full relative">
                    <div className="absolute right-0 -top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon name="star" className="text-[14px] text-yellow-500" filled />
                    </div>
                  </div>
                </div>
                <p className="text-right font-label-sm text-on-tertiary-fixed">75% to Next Level</p>
              </div>

              <div className="md:col-span-5 bg-surface-container-highest rounded-3xl p-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex flex-col justify-between group hover:-translate-y-2 transition-all">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Icon name="library_books" className="text-[32px]" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Digital Library</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Every NCERT book from Class 1-12, enhanced with interactive videos, 3D models, and quick-revision notes.
                  </p>
                </div>
                <div className="mt-8 flex -space-x-4">
                  <div className="w-20 h-28 bg-white rounded-lg shadow-md border border-outline-variant transform -rotate-6 flex items-center justify-center">
                    <span className="font-bold text-xs">MATHS</span>
                  </div>
                  <div className="w-20 h-28 bg-primary rounded-lg shadow-md border border-primary/20 z-10 flex flex-col items-center justify-center text-white p-2 text-center">
                    <span className="font-bold text-[10px]">SCIENCE</span>
                    <div className="w-8 h-1 bg-white/30 mt-2" />
                  </div>
                  <div className="w-20 h-28 bg-white rounded-lg shadow-md border border-outline-variant transform rotate-6 flex items-center justify-center">
                    <span className="font-bold text-xs">HISTORY</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 bg-inverse-surface text-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)] relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Icon name="route" className="text-[32px]" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4">Career Pathways</h3>
                  <p className="font-body-md text-body-md text-surface-variant/80 mb-8 max-w-md">
                    Don't just learn, discover your future. Our AI helps you connect what you learn today with the career of your dreams through structured skill-maps.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-primary/30 rounded-full border border-primary/50 text-sm">Space Science</span>
                    <span className="px-4 py-2 bg-secondary/30 rounded-full border border-secondary/50 text-sm">Bio-Tech</span>
                    <span className="px-4 py-2 bg-tertiary-container/30 rounded-full border border-tertiary-container/50 text-sm">Game Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="px-margin-mobile md:px-margin-desktop py-20 bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Inspiring Success</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  Join thousands of students who have transformed their learning experience with Nazariyen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className={`bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(37,99,235,0.06)] border border-outline-variant/20 hover:border-primary/30 transition-all ${
                    t.featured ? 'md:scale-105 border-primary/20 z-10' : ''
                  }`}
                >
                  <div className="flex text-yellow-500 mb-6">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon key={i} name="star" filled />
                    ))}
                  </div>
                  <p className="font-body-md italic text-on-surface-variant mb-8">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <img alt={t.name} src={t.img} className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover" />
                    <div>
                      <p className="font-label-md text-on-surface">{t.name}</p>
                      <p className="text-xs text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-margin-mobile md:px-margin-desktop py-24">
          <div className="max-w-container-max mx-auto relative overflow-hidden bg-primary rounded-[40px] p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-on-primary mb-6">Ready to Master Your Future?</h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 mb-12 max-w-2xl mx-auto">
                Join Nazariyen today and experience the future of personalized education. Your AI Buddy is waiting to help you ace your next big test!
              </p>
              <button
                onClick={() => navigate('/signup')}
                className="bg-white text-primary font-headline-md px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
              >
                Start Your Learning Adventure
              </button>
              <p className="mt-8 text-on-primary/60 font-label-sm">No credit card required • Free access to NCERT Library</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest/50 py-16 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="font-headline-lg text-headline-lg font-black tracking-tight text-primary mb-4 block">
                Nazariyen
              </span>
              <p className="font-body-md text-on-surface-variant mb-6">
                Empowering the next generation of thinkers, creators, and leaders through AI-powered education.
              </p>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li><Link to="/library" className="hover:text-primary transition-colors">NCERT Library</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">AI Buddy</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Study Planners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li><Link to="/careers" className="hover:text-primary transition-colors">Career Paths</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Leaderboards</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Daily Quests</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">Support</h4>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm">
            <p>© 2026 Nazariyen Education Tech. All rights reserved.</p>
            <div className="flex gap-8 items-center">
              <span>English (IN)</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
