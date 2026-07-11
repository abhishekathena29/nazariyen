export type Lang = 'en' | 'hi'

// Centralised UI strings. Keys are grouped by feature for readability.
export const STRINGS = {
  // ── Nav / shell ──────────────────────────────────────────────
  'nav.studyBuddy': { en: 'Study Buddy', hi: 'स्टडी बडी' },
  'nav.library': { en: 'Library', hi: 'लाइब्रेरी' },
  'nav.careers': { en: 'Careers', hi: 'करियर' },
  'nav.askAiBuddy': { en: 'Ask AI Buddy', hi: 'एआई बडी से पूछें' },
  'nav.settings': { en: 'Settings', hi: 'सेटिंग्स' },
  'nav.logout': { en: 'Log Out', hi: 'लॉग आउट' },
  'shell.superLearner': { en: 'Super Learner', hi: 'सुपर लर्नर' },
  'shell.days': { en: 'Days', hi: 'दिन' },

  // ── Auth ─────────────────────────────────────────────────────
  'auth.welcomeBack': { en: 'Welcome Back!', hi: 'वापसी पर स्वागत है!' },
  'auth.loginSubtitle': { en: 'Log in to continue your learning quest.', hi: 'अपनी सीखने की यात्रा जारी रखने के लिए लॉग इन करें।' },
  'auth.email': { en: 'Email', hi: 'ईमेल' },
  'auth.emailPlaceholder': { en: 'Enter your email', hi: 'अपना ईमेल दर्ज करें' },
  'auth.password': { en: 'Password', hi: 'पासवर्ड' },
  'auth.forgotPassword': { en: 'Forgot Password?', hi: 'पासवर्ड भूल गए?' },
  'auth.login': { en: 'Log In', hi: 'लॉग इन' },
  'auth.orContinue': { en: 'or continue with', hi: 'या इसके साथ जारी रखें' },
  'auth.google': { en: 'Google', hi: 'गूगल' },
  'auth.newHere': { en: 'New to Nazariyen?', hi: 'नज़रियें पर नए हैं?' },
  'auth.createAccount': { en: 'Create an Account', hi: 'खाता बनाएं' },
  'auth.createAccountTitle': { en: 'Create Account', hi: 'खाता बनाएं' },
  'auth.signupSubtitle': { en: 'Ready to level up your skills today?', hi: 'आज अपने कौशल को बढ़ाने के लिए तैयार हैं?' },
  'auth.fullName': { en: 'Full Name', hi: 'पूरा नाम' },
  'auth.createPassword': { en: 'Create Password', hi: 'पासवर्ड बनाएं' },
  'auth.agreeTerms': { en: 'I agree to the Terms of Service and Privacy Policy.', hi: 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं।' },
  'auth.createMyAccount': { en: 'Create My Account', hi: 'मेरा खाता बनाएं' },
  'auth.orSignupWith': { en: 'or sign up with', hi: 'या इसके साथ साइन अप करें' },
  'auth.haveAccount': { en: 'Already have an account?', hi: 'पहले से खाता है?' },
  'auth.forgotPrompt': { en: 'Enter your email above, then click Forgot Password to receive a reset link.', hi: 'ऊपर अपना ईमेल दर्ज करें, फिर रीसेट लिंक पाने के लिए पासवर्ड भूल गए पर क्लिक करें।' },
  'auth.resetSent': { en: 'Password reset email sent! Check your inbox.', hi: 'पासवर्ड रीसेट ईमेल भेजा गया! अपना इनबॉक्स देखें।' },

  // ── Study Buddy ──────────────────────────────────────────────
  'buddy.greeting': { en: 'What are we learning today?', hi: 'आज हम क्या सीख रहे हैं?' },
  'buddy.intro': { en: "I'm ready to dive into any subject with you. We can explore concepts, tackle homework, or prepare for exams together!", hi: 'मैं आपके साथ किसी भी विषय में गहराई से जाने के लिए तैयार हूं। हम अवधारणाओं का पता लगा सकते हैं, होमवर्क कर सकते हैं, या परीक्षा की तैयारी साथ में कर सकते हैं!' },
  'buddy.placeholder': { en: 'Ask Study Buddy anything...', hi: 'स्टडी बडी से कुछ भी पूछें...' },
  'buddy.thinking': { en: 'Thinking…', hi: 'सोच रहा हूँ…' },
  'buddy.suggest1': { en: "Explain Class 10 Light Reflection like I'm in Class 5", hi: 'कक्षा 10 प्रकाश परावर्तन को ऐसे समझाएं जैसे मैं कक्षा 5 में हूं' },
  'buddy.suggest2': { en: 'Quiz me on Carbon Compounds', hi: 'कार्बन यौगिकों पर मेरी प्रश्नोत्तरी लें' },
  'buddy.suggest3': { en: 'Give me a 5-step study plan for exams', hi: 'परीक्षा के लिए मुझे 5-चरणीय अध्ययन योजना दें' },
  'buddy.explainDifferently': { en: 'Explain differently', hi: 'अलग तरीके से समझाएं' },
  'buddy.quizMe': { en: 'Quiz me', hi: 'मेरी प्रश्नोत्तरी लें' },
  'buddy.level': { en: 'Level', hi: 'स्तर' },
  'buddy.noKey': { en: 'The AI Study Buddy needs a Groq API key. Add VITE_GROQ_API_KEY to your .env file to activate it (see README).', hi: 'एआई स्टडी बडी को Groq API key चाहिए। इसे सक्रिय करने के लिए अपनी .env फ़ाइल में VITE_GROQ_API_KEY जोड़ें (README देखें)।' },
  'buddy.error': { en: 'Sorry, I hit a snag reaching the AI service. Please try again.', hi: 'क्षमा करें, एआई सेवा तक पहुंचने में समस्या हुई। कृपया पुनः प्रयास करें।' },
  'buddy.dailyGoals': { en: 'Daily Goals', hi: 'दैनिक लक्ष्य' },
  'buddy.completeChapter': { en: 'Complete 1 Chapter', hi: '1 अध्याय पूरा करें' },
  'buddy.solveMath': { en: 'Solve 5 Math Problems', hi: '5 गणित समस्याएं हल करें' },
  'buddy.viewTasks': { en: 'View All Tasks', hi: 'सभी कार्य देखें' },
  'buddy.topFriends': { en: 'Top Friends', hi: 'शीर्ष मित्र' },
  'buddy.fullLeaderboard': { en: 'Full Leaderboard', hi: 'पूर्ण लीडरबोर्ड' },

  // ── Library ──────────────────────────────────────────────────
  'lib.title': { en: 'Your Digital Library', hi: 'आपकी डिजिटल लाइब्रेरी' },
  'lib.subtitle': { en: 'Access the complete NCERT collection anytime. Refined for your success.', hi: 'पूरा NCERT संग्रह कभी भी एक्सेस करें। आपकी सफलता के लिए तैयार।' },
  'lib.books': { en: 'Books', hi: 'पुस्तकें' },
  'lib.languages': { en: 'Languages', hi: 'भाषाएं' },
  'lib.classSelector': { en: 'Class Selector', hi: 'कक्षा चयन' },
  'lib.preferredLanguage': { en: 'Preferred Language', hi: 'पसंदीदा भाषा' },
  'lib.chapters': { en: 'Chapters', hi: 'अध्याय' },
  'lib.openTextbook': { en: 'Open Textbook', hi: 'पाठ्यपुस्तक खोलें' },
  'lib.details': { en: 'Details', hi: 'विवरण' },
  'lib.recentlyRead': { en: 'Recently Read', hi: 'हाल ही में पढ़ा' },
  'lib.all': { en: 'All', hi: 'सभी' },
  'lib.bookmarks': { en: 'Bookmarks', hi: 'बुकमार्क' },
  'lib.noBookmarks': { en: 'No bookmarks yet. Tap the bookmark icon while reading to save a page.', hi: 'अभी तक कोई बुकमार्क नहीं। पढ़ते समय पेज सेव करने के लिए बुकमार्क आइकन दबाएं।' },
  'lib.noRecent': { en: 'Nothing read yet. Open a textbook to get started!', hi: 'अभी तक कुछ नहीं पढ़ा। शुरू करने के लिए एक पाठ्यपुस्तक खोलें!' },
  'lib.proTip': { en: 'Pro Tip', hi: 'प्रो टिप' },
  'lib.proTipBody': { en: 'Keep your streak alive! Revise a chapter today to master it.', hi: 'अपनी स्ट्रीक बनाए रखें! आज एक अध्याय दोहराएं और उसमें महारत हासिल करें।' },
  'lib.openOnNcert': { en: 'Open on NCERT', hi: 'NCERT पर खोलें' },
  'lib.aboutBook': { en: 'About this book', hi: 'इस पुस्तक के बारे में' },
  'lib.noBooks': { en: 'NCERT textbooks for this class are coming soon.', hi: 'इस कक्षा के लिए NCERT पाठ्यपुस्तकें जल्द आ रही हैं।' },

  // ── Careers ──────────────────────────────────────────────────
  'careers.title': { en: 'Explore Your Future', hi: 'अपना भविष्य खोजें' },
  'careers.subtitle': { en: 'Browse visual pathways to discover what it takes to reach your goals.', hi: 'अपने लक्ष्यों तक पहुंचने के लिए क्या चाहिए, यह जानने के लिए विज़ुअल रास्ते देखें।' },
  'careers.viewPathway': { en: 'View Pathway', hi: 'रास्ता देखें' },
  'careers.roadmap': { en: 'Career Roadmap', hi: 'करियर रोडमैप' },
  'careers.pathwayTitle': { en: 'The Pathway', hi: 'रास्ता' },
  'careers.proTipTitle': { en: 'Pro Tip from AI Buddy', hi: 'एआई बडी से प्रो टिप' },
  'careers.showResources': { en: 'Ask Study Buddy', hi: 'स्टडी बडी से पूछें' },
  'careers.dismiss': { en: 'Dismiss', hi: 'बंद करें' },
  'careers.keySubjects': { en: 'Key Subjects', hi: 'मुख्य विषय' },
  'careers.topExams': { en: 'Top Entrance Exams', hi: 'शीर्ष प्रवेश परीक्षाएं' },
  'careers.all': { en: 'All Careers', hi: 'सभी करियर' },
  'careers.stem': { en: 'STEM', hi: 'विज्ञान/तकनीक' },
  'careers.arts': { en: 'Arts', hi: 'कला' },
  'careers.business': { en: 'Business', hi: 'व्यवसाय' },

  // ── Reader ───────────────────────────────────────────────────
  'reader.readAloud': { en: 'Read Aloud', hi: 'ज़ोर से पढ़ें' },
  'reader.stop': { en: 'Stop', hi: 'रोकें' },
  'reader.bookmarkAdded': { en: 'Bookmarked!', hi: 'बुकमार्क हो गया!' },
  'reader.aiBuddy': { en: 'AI Buddy', hi: 'एआई बडी' },
  'reader.readingAlong': { en: 'Reading along with you', hi: 'आपके साथ पढ़ रहा हूं' },
  'reader.askPage': { en: 'Ask anything about this page...', hi: 'इस पेज के बारे में कुछ भी पूछें...' },
  'reader.openInNcert': { en: 'Open full book on NCERT', hi: 'NCERT पर पूरी किताब खोलें' },
} as const

export type StringKey = keyof typeof STRINGS

export function translate(key: StringKey, lang: Lang): string {
  const entry = STRINGS[key]
  if (!entry) return key
  return entry[lang] ?? entry.en
}
