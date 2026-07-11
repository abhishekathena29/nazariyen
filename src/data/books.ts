// NCERT textbook catalogue.
// NCERT book codes follow a convention: a letter per class (f=6, g=7, h=8,
// i=9, j=10, k=11, l=12) + medium (e = English) + subject. e.g. "jesc1" =
// Class 10 (j) English (e) Science (sc) book 1. The public reader lives at
// https://ncert.nic.in/textbook.php?<code>=0-<chapters> and each chapter PDF
// is https://ncert.nic.in/textbook/pdf/<code><nn>.pdf

export type Subject = 'Science' | 'Mathematics' | 'English' | 'History' | 'Geography' | 'Civics' | 'Economics' | 'Physics' | 'Chemistry' | 'Biology'

export type Book = {
  id: string
  classLevel: string // "Class 10"
  subject: Subject
  title: string
  code: string
  chapters: number
  color: 'primary' | 'secondary' | 'tertiary'
  img: string
  description: string
}

const IMG = {
  Science:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAASoHJMijOqMwct2Cfv2ZyCSb4sNpIvSHaVibiAaKBHpbFZtw1LEoJnBjJ2G8EIyXdsKe2IrSbPoR21b7e3jNYwrPA3HwRAdo8gTrGb05L9S8MC7qnfrQ-nGvZ8oxrekYcqxr_vYfjWKkkskIJhB-YaeX-__bxbj6vOS6QwhhP4xQzoxCwlU3yzUjcFsHL26RwNUViIZW2YDiDbpZNFew1gw87_8RAJwhR1xIRkiGPAxlZ3YYfXDDA1dpCLAjf1RdTpuHP5b9kVI_h',
  Mathematics:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mNkEjbiOi0KE3CnHGzoEltks_8_W-Jls67QAUzKnHrIXIEmv8PH8I7y--BCZuZVwEpUDYkUmTe8bn0efHFe4u3A_sS0Ya5fWw3PoPV_rYTt4VNpy5LDaA01V_ZC6dsZGQdahLfe4n19z8rqocByLPPCABzBO0qsH-PwqB713CY7Xf6ws1Yn5jAmgiYeU0T5eaVndSABjePVxu97O9m71Dx8WMCzi_HyKNdn4qzL3tUL86GJ_yfxhvreJjISZArX1fgJZQJ799BqO',
  Humanities:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC409LUuPKNSLsIAPk29vPgZBnDUQhSTcm1pesOLJDvkcqyuUtzfrbLHKSuz24GC9AUpEVxxCQ2d36Mwjp82jT4LVczCKAxnu2AQrBTm6yylhZ8tycy4LobeMMskdKWDwL5sr2gM3kXFcQpsftHNcS10vQuCedNFEEyp8O9VNbbrKm29PTHUo49rnSJGtA2zPSocPuJHBFOkVHq_6PHi2LB1LqfKInNQb3oaNaXdCPGb8rDYN7MiBsGUnHw3IF1HfgY9eq80JDbgPVF',
}

const SUBJECT_META: Record<Subject, { color: Book['color']; img: string }> = {
  Science: { color: 'primary', img: IMG.Science },
  Physics: { color: 'primary', img: IMG.Science },
  Chemistry: { color: 'primary', img: IMG.Science },
  Biology: { color: 'primary', img: IMG.Science },
  Mathematics: { color: 'secondary', img: IMG.Mathematics },
  English: { color: 'tertiary', img: IMG.Humanities },
  History: { color: 'tertiary', img: IMG.Humanities },
  Geography: { color: 'tertiary', img: IMG.Humanities },
  Civics: { color: 'tertiary', img: IMG.Humanities },
  Economics: { color: 'secondary', img: IMG.Humanities },
}

type Seed = { classLevel: string; subject: Subject; title: string; code: string; chapters: number; description: string }

// prettier-ignore
const SEEDS: Seed[] = [
  // ── Class 6 ──
  { classLevel: 'Class 6', subject: 'Science', title: 'Science (Curiosity)', code: 'fesc1', chapters: 12, description: 'Introduces Class 6 students to the wonders of the natural world — food, materials, living organisms, motion, light and electricity — through hands-on activities.' },
  { classLevel: 'Class 6', subject: 'Mathematics', title: 'Mathematics (Ganita Prakash)', code: 'femh1', chapters: 10, description: 'Builds number sense, basic geometry, integers and fractions with playful, activity-based problems for Class 6.' },
  { classLevel: 'Class 6', subject: 'English', title: 'Honeysuckle', code: 'fehs1', chapters: 10, description: 'A collection of stories and poems that build reading and comprehension skills for young learners.' },

  // ── Class 7 ──
  { classLevel: 'Class 7', subject: 'Science', title: 'Science', code: 'gesc1', chapters: 18, description: 'Covers nutrition, heat, acids and bases, weather, respiration and motion — deepening scientific inquiry for Class 7.' },
  { classLevel: 'Class 7', subject: 'Mathematics', title: 'Mathematics', code: 'gemh1', chapters: 15, description: 'Integers, fractions, algebra, ratio-proportion and geometry with a focus on reasoning for Class 7.' },
  { classLevel: 'Class 7', subject: 'English', title: 'Honeycomb', code: 'gehc1', chapters: 10, description: 'Engaging prose and poetry to strengthen vocabulary, grammar and expression.' },

  // ── Class 8 ──
  { classLevel: 'Class 8', subject: 'Science', title: 'Science', code: 'hesc1', chapters: 18, description: 'Explores crops, microorganisms, force and pressure, sound, light and the cell — bridging to secondary science.' },
  { classLevel: 'Class 8', subject: 'Mathematics', title: 'Mathematics', code: 'hemh1', chapters: 16, description: 'Rational numbers, linear equations, quadrilaterals, mensuration and data handling for Class 8.' },
  { classLevel: 'Class 8', subject: 'English', title: 'Honeydew', code: 'hehd1', chapters: 10, description: 'Literary texts and poems that develop critical reading and writing for Class 8.' },

  // ── Class 9 ──
  { classLevel: 'Class 9', subject: 'Science', title: 'Science', code: 'iesc1', chapters: 12, description: 'Matter, atoms and molecules, cells, tissues, motion, gravitation, work and energy — the foundation of secondary science.' },
  { classLevel: 'Class 9', subject: 'Mathematics', title: 'Mathematics', code: 'iemh1', chapters: 12, description: 'Number systems, polynomials, coordinate geometry, linear equations, Euclid’s geometry and statistics for Class 9.' },
  { classLevel: 'Class 9', subject: 'English', title: 'Beehive', code: 'iebe1', chapters: 11, description: 'Prose and poetry that build language proficiency and literary appreciation for Class 9.' },
  { classLevel: 'Class 9', subject: 'History', title: 'India and the Contemporary World – I', code: 'iess3', chapters: 8, description: 'Revolutions, nationalism, forests, pastoralists and the making of the modern world.' },
  { classLevel: 'Class 9', subject: 'Geography', title: 'Contemporary India – I', code: 'iess1', chapters: 6, description: 'India’s physical features, drainage, climate, natural vegetation and population.' },

  // ── Class 10 ──
  { classLevel: 'Class 10', subject: 'Science', title: 'Science', code: 'jesc1', chapters: 16, description: 'Chemical reactions, acids-bases-salts, life processes, electricity, light and the human eye — the flagship Class 10 board syllabus.' },
  { classLevel: 'Class 10', subject: 'Mathematics', title: 'Mathematics', code: 'jemh1', chapters: 15, description: 'Real numbers, polynomials, quadratic equations, trigonometry, circles, statistics and probability for the Class 10 board exam.' },
  { classLevel: 'Class 10', subject: 'English', title: 'First Flight', code: 'jeff1', chapters: 11, description: 'A rich anthology of prose and poetry — from “A Letter to God” to “The Ball Poem” — for Class 10.' },
  { classLevel: 'Class 10', subject: 'History', title: 'India and the Contemporary World – II', code: 'jess3', chapters: 8, description: 'Nationalism in Europe and India, industrialisation, print culture and the making of a global world.' },
  { classLevel: 'Class 10', subject: 'Geography', title: 'Contemporary India – II', code: 'jess2', chapters: 7, description: 'Resources, agriculture, minerals and energy, manufacturing industries and lifelines of the economy.' },
  { classLevel: 'Class 10', subject: 'Civics', title: 'Democratic Politics – II', code: 'jess1', chapters: 8, description: 'Power sharing, federalism, democracy, political parties and the outcomes of democracy.' },
  { classLevel: 'Class 10', subject: 'Economics', title: 'Understanding Economic Development', code: 'jess4', chapters: 5, description: 'Development, sectors of the economy, money and credit, globalisation and consumer rights.' },

  // ── Class 11 ──
  { classLevel: 'Class 11', subject: 'Physics', title: 'Physics Part I', code: 'keph1', chapters: 8, description: 'Units and measurement, kinematics, laws of motion, work-energy-power and rotational motion for Class 11.' },
  { classLevel: 'Class 11', subject: 'Chemistry', title: 'Chemistry Part I', code: 'kech1', chapters: 7, description: 'Basic concepts, atomic structure, periodicity, chemical bonding, thermodynamics and equilibrium.' },
  { classLevel: 'Class 11', subject: 'Biology', title: 'Biology', code: 'kebo1', chapters: 19, description: 'Diversity of living organisms, plant and animal structure, cell biology, and plant/human physiology.' },
  { classLevel: 'Class 11', subject: 'Mathematics', title: 'Mathematics', code: 'kemh1', chapters: 16, description: 'Sets, relations, trigonometry, complex numbers, permutations, sequences, conic sections and calculus foundations.' },

  // ── Class 12 ──
  { classLevel: 'Class 12', subject: 'Physics', title: 'Physics Part I', code: 'leph1', chapters: 8, description: 'Electrostatics, current electricity, magnetism and electromagnetic induction — core Class 12 board physics.' },
  { classLevel: 'Class 12', subject: 'Chemistry', title: 'Chemistry Part I', code: 'lech1', chapters: 9, description: 'Solutions, electrochemistry, chemical kinetics, d- and f-block elements and coordination compounds.' },
  { classLevel: 'Class 12', subject: 'Biology', title: 'Biology', code: 'lebo1', chapters: 13, description: 'Reproduction, genetics and evolution, human health, biotechnology and ecology for Class 12.' },
  { classLevel: 'Class 12', subject: 'Mathematics', title: 'Mathematics Part I', code: 'lemh1', chapters: 6, description: 'Relations and functions, inverse trigonometry, matrices, determinants and continuity & differentiability.' },
]

export const BOOKS: Book[] = SEEDS.map((s) => ({
  id: s.code,
  classLevel: s.classLevel,
  subject: s.subject,
  title: `${s.classLevel} ${s.subject}`,
  code: s.code,
  chapters: s.chapters,
  color: SUBJECT_META[s.subject].color,
  img: SUBJECT_META[s.subject].img,
  description: s.description,
  // keep the descriptive board title accessible for the details view
})).map((b, i) => ({ ...b, title: SEEDS[i].title }))

export const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']

export function booksForClass(classLevel: string): Book[] {
  return BOOKS.filter((b) => b.classLevel === classLevel)
}

export function bookById(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id)
}

/** Official NCERT chapter-listing page for a book. */
export function ncertBookUrl(book: Book): string {
  return `https://ncert.nic.in/textbook.php?${book.code}=0-${book.chapters}`
}

/** Direct PDF for a specific chapter (1-indexed). */
export function ncertChapterPdf(book: Book, chapter: number): string {
  const nn = String(chapter).padStart(2, '0')
  return `https://ncert.nic.in/textbook/pdf/${book.code}${nn}.pdf`
}
