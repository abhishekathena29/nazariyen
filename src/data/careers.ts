export type Category = 'STEM' | 'Arts' | 'Business'

export type PathNode = { icon: string; label: string; sub: string }

export type Career = {
  key: string
  emoji: string
  bg: string
  name: string
  category: Category
  desc: string
  tags: string[]
  keySubjects: string[]
  exams: string[]
  pathway: PathNode[]
}

// Each career has an accurate, domain-specific roadmap, key subjects and the
// real entrance exams a student in India would target.
export const CAREERS: Career[] = [
  {
    key: 'doctor',
    emoji: '👩‍⚕️',
    bg: 'bg-red-50',
    name: 'Doctor',
    category: 'STEM',
    desc: 'Heal people and make the world a healthier place through medicine.',
    tags: ['High Growth', 'Scientific'],
    keySubjects: ['Physics', 'Chemistry', 'Biology'],
    exams: ['NEET-UG', 'NEET-PG', 'AIIMS'],
    pathway: [
      { icon: 'school', label: '11th–12th PCB', sub: 'Physics, Chem, Bio' },
      { icon: 'edit_note', label: 'NEET-UG', sub: 'Entrance Test' },
      { icon: 'stethoscope', label: 'MBBS', sub: '5.5-yr Degree' },
      { icon: 'workspace_premium', label: 'MD / MS', sub: 'Specialisation' },
    ],
  },
  {
    key: 'dev',
    emoji: '👨‍💻',
    bg: 'bg-blue-50',
    name: 'Software Developer',
    category: 'STEM',
    desc: 'Build the next big app or solve complex problems with code.',
    tags: ['Tech Focus', 'Analytical'],
    keySubjects: ['Mathematics', 'Computer Science', 'Physics'],
    exams: ['JEE Main', 'JEE Advanced', 'CUET'],
    pathway: [
      { icon: 'school', label: '11th–12th PCM', sub: 'Maths + CS' },
      { icon: 'edit_note', label: 'JEE / CUET', sub: 'Entrance Test' },
      { icon: 'code', label: 'B.Tech / BCA', sub: 'CS Degree' },
      { icon: 'rocket_launch', label: 'SDE Role', sub: 'Internships → Job' },
    ],
  },
  {
    key: 'ai',
    emoji: '🤖',
    bg: 'bg-purple-50',
    name: 'AI / ML Specialist',
    category: 'STEM',
    desc: 'Teach machines to think and help shape the future of technology.',
    tags: ['Future Proof', 'Mathematics'],
    keySubjects: ['Mathematics', 'Computer Science', 'Statistics'],
    exams: ['JEE', 'GATE (CS)', 'CUET'],
    pathway: [
      { icon: 'school', label: '11th–12th PCM', sub: 'Maths + CS' },
      { icon: 'code', label: 'B.Tech CSE/AI', sub: 'UG Degree' },
      { icon: 'psychology', label: 'M.Tech / MS', sub: 'AI Specialisation' },
      { icon: 'rocket_launch', label: 'ML Engineer', sub: 'Research / Industry' },
    ],
  },
  {
    key: 'pilot',
    emoji: '✈️',
    bg: 'bg-sky-50',
    name: 'Pilot',
    category: 'STEM',
    desc: 'Travel the world and master the skies in commercial or defence aviation.',
    tags: ['Adventure', 'High Skill'],
    keySubjects: ['Physics', 'Mathematics', 'English'],
    exams: ['DGCA CPL', 'Class-1 Medical', 'NDA (defence)'],
    pathway: [
      { icon: 'school', label: '11th–12th PCM', sub: 'Physics + Maths' },
      { icon: 'medical_services', label: 'Class-1 Medical', sub: 'DGCA Fitness' },
      { icon: 'flight_takeoff', label: 'Flying School', sub: 'CPL Training' },
      { icon: 'flight', label: 'Commercial Pilot', sub: 'Type Rating → Airline' },
    ],
  },
  {
    key: 'scientist',
    emoji: '🔬',
    bg: 'bg-teal-50',
    name: 'Scientist / Researcher',
    category: 'STEM',
    desc: 'Push the boundaries of knowledge through experiments and discovery.',
    tags: ['Curious', 'Research'],
    keySubjects: ['Physics', 'Chemistry', 'Mathematics'],
    exams: ['IIT-JAM', 'CSIR-NET', 'GATE'],
    pathway: [
      { icon: 'school', label: '11th–12th PCM/PCB', sub: 'Core Sciences' },
      { icon: 'science', label: 'B.Sc', sub: 'UG Degree' },
      { icon: 'biotech', label: 'M.Sc', sub: 'Specialisation' },
      { icon: 'workspace_premium', label: 'PhD → Scientist', sub: 'Research Lab' },
    ],
  },
  {
    key: 'designer',
    emoji: '🎨',
    bg: 'bg-pink-50',
    name: 'Designer',
    category: 'Arts',
    desc: 'Create visual stories and shape how users interact with products.',
    tags: ['Creative', 'Versatile'],
    keySubjects: ['Fine Arts', 'English', 'Basic Maths'],
    exams: ['NID DAT', 'NIFT', 'UCEED'],
    pathway: [
      { icon: 'school', label: '11th–12th', sub: 'Any stream (Art +)' },
      { icon: 'edit_note', label: 'NID / NIFT / UCEED', sub: 'Design Aptitude' },
      { icon: 'design_services', label: 'B.Des', sub: '4-yr Degree' },
      { icon: 'palette', label: 'UX / Product Designer', sub: 'Portfolio → Job' },
    ],
  },
  {
    key: 'lawyer',
    emoji: '⚖️',
    bg: 'bg-amber-50',
    name: 'Lawyer',
    category: 'Arts',
    desc: 'Defend rights, argue cases and uphold justice in society.',
    tags: ['Debating', 'Analytical'],
    keySubjects: ['Political Science', 'English', 'History'],
    exams: ['CLAT', 'AILET', 'LSAT-India'],
    pathway: [
      { icon: 'school', label: '11th–12th', sub: 'Any stream' },
      { icon: 'edit_note', label: 'CLAT / AILET', sub: 'Law Entrance' },
      { icon: 'gavel', label: 'BA LLB', sub: '5-yr Integrated' },
      { icon: 'account_balance', label: 'Advocate', sub: 'Bar Council → Practice' },
    ],
  },
  {
    key: 'ias',
    emoji: '🏛️',
    bg: 'bg-orange-50',
    name: 'Civil Servant (IAS/IPS)',
    category: 'Arts',
    desc: 'Serve the nation and lead public administration and policy.',
    tags: ['Leadership', 'Service'],
    keySubjects: ['History', 'Polity', 'Geography'],
    exams: ['UPSC Prelims', 'UPSC Mains', 'Interview'],
    pathway: [
      { icon: 'school', label: 'Graduation', sub: 'Any degree' },
      { icon: 'menu_book', label: 'UPSC Prelims', sub: 'Objective Screen' },
      { icon: 'edit_note', label: 'UPSC Mains', sub: 'Written + Interview' },
      { icon: 'account_balance', label: 'IAS / IPS', sub: 'Civil Service' },
    ],
  },
  {
    key: 'journalist',
    emoji: '📰',
    bg: 'bg-rose-50',
    name: 'Journalist',
    category: 'Arts',
    desc: 'Tell stories that matter and hold power to account.',
    tags: ['Communication', 'Curious'],
    keySubjects: ['English', 'Political Science', 'History'],
    exams: ['CUET', 'IIMC Entrance', 'ACJ'],
    pathway: [
      { icon: 'school', label: '11th–12th', sub: 'Any stream' },
      { icon: 'menu_book', label: 'BA Journalism', sub: 'Mass Comm Degree' },
      { icon: 'campaign', label: 'Internships', sub: 'Newsroom Experience' },
      { icon: 'edit_note', label: 'Journalist', sub: 'Print / Digital / TV' },
    ],
  },
  {
    key: 'entrepreneur',
    emoji: '📊',
    bg: 'bg-lime-50',
    name: 'Entrepreneur',
    category: 'Business',
    desc: 'Turn ideas into reality by building your own business and teams.',
    tags: ['Leadership', 'Innovation'],
    keySubjects: ['Business Studies', 'Economics', 'Accountancy'],
    exams: ['CUET', 'IPMAT', 'CAT (for MBA)'],
    pathway: [
      { icon: 'school', label: '11th–12th', sub: 'Commerce / any' },
      { icon: 'menu_book', label: 'BBA / B.Com', sub: 'UG Degree' },
      { icon: 'trending_up', label: 'MBA (optional)', sub: 'Networks & Skills' },
      { icon: 'rocket_launch', label: 'Found a Startup', sub: 'Build → Scale' },
    ],
  },
  {
    key: 'ca',
    emoji: '🧾',
    bg: 'bg-emerald-50',
    name: 'Chartered Accountant',
    category: 'Business',
    desc: 'Master finance, audit and taxation as a trusted business advisor.',
    tags: ['Numbers', 'High Demand'],
    keySubjects: ['Accountancy', 'Economics', 'Mathematics'],
    exams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    pathway: [
      { icon: 'school', label: '11th–12th Commerce', sub: 'Accounts + Maths' },
      { icon: 'edit_note', label: 'CA Foundation', sub: 'Entry Exam' },
      { icon: 'menu_book', label: 'CA Inter + Articleship', sub: '3-yr Training' },
      { icon: 'workspace_premium', label: 'CA Final', sub: 'Chartered Accountant' },
    ],
  },
  {
    key: 'analyst',
    emoji: '💹',
    bg: 'bg-cyan-50',
    name: 'Financial Analyst',
    category: 'Business',
    desc: 'Analyse markets and guide smart investment decisions.',
    tags: ['Analytical', 'Finance'],
    keySubjects: ['Economics', 'Mathematics', 'Accountancy'],
    exams: ['CUET', 'CFA', 'CAT'],
    pathway: [
      { icon: 'school', label: '11th–12th Commerce', sub: 'Economics + Maths' },
      { icon: 'menu_book', label: 'B.Com / Economics', sub: 'UG Degree' },
      { icon: 'payments', label: 'CFA / MBA Finance', sub: 'Specialisation' },
      { icon: 'trending_up', label: 'Financial Analyst', sub: 'Banks / Firms' },
    ],
  },
]

export const CAREER_CATEGORIES: Array<'All Careers' | Category> = ['All Careers', 'STEM', 'Arts', 'Business']

export function careerByKey(key: string): Career | undefined {
  return CAREERS.find((c) => c.key === key)
}
