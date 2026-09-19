// Bite-sized quizzes per class, subject and chapter, bilingual (English / हिंदी).

export type QuizSubject = 'Science' | 'Mathematics'

export type QuizQuestion = {
  q: { en: string; hi: string }
  options: { en: string; hi: string }[]
  answer: number
}

export type QuizChapter = {
  id: string
  name: { en: string; hi: string }
  questions: QuizQuestion[]
}

export type Quiz = {
  classLevel: string
  subject: QuizSubject
  chapters: QuizChapter[]
}

export const QUIZ_SUBJECTS: QuizSubject[] = ['Science', 'Mathematics']

function q(en: string, hi: string, opts: [string, string][], answer: number): QuizQuestion {
  return { q: { en, hi }, options: opts.map(([e, h]) => ({ en: e, hi: h })), answer }
}

function ch(id: string, en: string, hi: string, questions: QuizQuestion[]): QuizChapter {
  return { id, name: { en, hi }, questions }
}

export const QUIZZES: Quiz[] = [
  // ══════════════════════════ Class 6 ══════════════════════════
  {
    classLevel: 'Class 6',
    subject: 'Science',
    chapters: [
      ch('food-nutrition', 'Food & Nutrition', 'भोजन और पोषण', [
        q('What do plants need to make their own food?', 'पौधों को अपना भोजन बनाने के लिए क्या चाहिए?', [
          ['Sunlight, water and carbon dioxide', 'सूर्य का प्रकाश, पानी और कार्बन डाइऑक्साइड'],
          ['Only soil', 'केवल मिट्टी'], ['Only water', 'केवल पानी'], ['Only sunlight', 'केवल सूर्य का प्रकाश'],
        ], 0),
        q('Which nutrient gives us the most energy?', 'कौन सा पोषक तत्व हमें सबसे अधिक ऊर्जा देता है?', [
          ['Vitamins', 'विटामिन'], ['Carbohydrates', 'कार्बोहाइड्रेट'], ['Minerals', 'खनिज'], ['Fibre', 'रेशा'],
        ], 1),
        q('Deficiency of Vitamin C causes?', 'विटामिन C की कमी से क्या होता है?', [
          ['Scurvy', 'स्कर्वी'], ['Night blindness', 'रतौंधी'], ['Rickets', 'रिकेट्स'], ['Beriberi', 'बेरीबेरी'],
        ], 0),
        q('Which of these is a balanced diet component?', 'इनमें से कौन संतुलित आहार का हिस्सा है?', [
          ['Only rice', 'केवल चावल'], ['Only sweets', 'केवल मिठाई'], ['A mix of all nutrients', 'सभी पोषक तत्वों का मिश्रण'], ['Only water', 'केवल पानी'],
        ], 2),
        q('Milk is a good source of which mineral?', 'दूध किस खनिज का अच्छा स्रोत है?', [
          ['Calcium', 'कैल्शियम'], ['Iron', 'लोहा'], ['Iodine', 'आयोडीन'], ['Sodium', 'सोडियम'],
        ], 0),
      ]),
      ch('materials-around-us', 'Materials Around Us', 'हमारे आस-पास की वस्तुएं', [
        q('Which of these is a source of fibre?', 'इनमें से कौन रेशे का स्रोत है?', [
          ['Milk', 'दूध'], ['Cotton', 'कपास'], ['Iron', 'लोहा'], ['Water', 'पानी'],
        ], 1),
        q('Which material is a good conductor of heat?', 'कौन सी वस्तु ऊष्मा की अच्छी सुचालक है?', [
          ['Wood', 'लकड़ी'], ['Plastic', 'प्लास्टिक'], ['Metal', 'धातु'], ['Rubber', 'रबर'],
        ], 2),
        q('Objects that allow light to pass through completely are called?', 'जिन वस्तुओं से प्रकाश पूरी तरह से गुजर जाता है, वे क्या कहलाती हैं?', [
          ['Opaque', 'अपारदर्शी'], ['Transparent', 'पारदर्शी'], ['Translucent', 'पारभासी'], ['Reflective', 'परावर्तक'],
        ], 1),
        q('Which of these materials is a natural fibre?', 'इनमें से कौन सा एक प्राकृतिक रेशा है?', [
          ['Nylon', 'नायलॉन'], ['Polyester', 'पॉलिएस्टर'], ['Wool', 'ऊन'], ['Rayon', 'रेयॉन'],
        ], 2),
        q('Materials that can be beaten into thin sheets are called?', 'जिन पदार्थों को पीटकर पतली चादर बनाई जा सकती है, वे क्या कहलाते हैं?', [
          ['Ductile', 'तन्य'], ['Malleable', 'आघातवर्ध्य'], ['Brittle', 'भंगुर'], ['Soluble', 'घुलनशील'],
        ], 1),
      ]),
      ch('living-world-motion', 'Living Organisms & Motion', 'सजीव जगत और गति', [
        q('Which body part helps us see?', 'हमें देखने में कौन सा अंग मदद करता है?', [
          ['Ears', 'कान'], ['Nose', 'नाक'], ['Eyes', 'आंखें'], ['Skin', 'त्वचा'],
        ], 2),
        q('Animals that eat only plants are called?', 'केवल पौधे खाने वाले जानवर क्या कहलाते हैं?', [
          ['Carnivores', 'मांसाहारी'], ['Herbivores', 'शाकाहारी'], ['Omnivores', 'सर्वाहारी'], ['Decomposers', 'अपघटक'],
        ], 1),
        q('Movement of a swing is an example of?', 'झूले की गति किसका उदाहरण है?', [
          ['Rectilinear motion', 'सरल रेखीय गति'], ['Circular motion', 'वृत्तीय गति'], ['Periodic motion', 'आवर्ती गति'], ['Random motion', 'यादृच्छिक गति'],
        ], 2),
        q('The habitat of a fish is?', 'मछली का आवास कहाँ है?', [
          ['Desert', 'रेगिस्तान'], ['Aquatic', 'जलीय'], ['Terrestrial', 'स्थलीय'], ['Mountains', 'पहाड़'],
        ], 1),
        q('The standard unit of length is the?', 'लंबाई की मानक इकाई क्या है?', [
          ['Kilogram', 'किलोग्राम'], ['Metre', 'मीटर'], ['Second', 'सेकंड'], ['Litre', 'लीटर'],
        ], 1),
      ]),
    ],
  },
  {
    classLevel: 'Class 6',
    subject: 'Mathematics',
    chapters: [
      ch('numbers-play', 'Numbers & Number Play', 'संख्याएं और खेल', [
        q('What is the successor of 999?', '999 का उत्तरवर्ती क्या है?', [
          ['998', '998'], ['1000', '1000'], ['1001', '1001'], ['900', '900'],
        ], 1),
        q('Which of these is a prime number?', 'इनमें से कौन एक अभाज्य संख्या है?', [
          ['4', '4'], ['9', '9'], ['7', '7'], ['8', '8'],
        ], 2),
        q('What is the place value of 5 in 3541?', '3541 में 5 का स्थानीय मान क्या है?', [
          ['5', '5'], ['50', '50'], ['500', '500'], ['5000', '5000'],
        ], 2),
        q('The smallest whole number is?', 'सबसे छोटी पूर्ण संख्या क्या है?', [
          ['1', '1'], ['0', '0'], ['-1', '-1'], ['10', '10'],
        ], 1),
        q('Which of these numbers is divisible by both 2 and 3?', 'इनमें से कौन सी संख्या 2 और 3 दोनों से विभाज्य है?', [
          ['8', '8'], ['9', '9'], ['12', '12'], ['10', '10'],
        ], 2),
      ]),
      ch('basic-geometry', 'Basic Geometry & Shapes', 'आधारभूत ज्यामिति और आकृतियाँ', [
        q('How many sides does a hexagon have?', 'षट्भुज की कितनी भुजाएं होती हैं?', [
          ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'],
        ], 1),
        q('A line segment has?', 'रेखाखंड की क्या विशेषता है?', [
          ['No endpoints', 'कोई अंतबिंदु नहीं'], ['One endpoint', 'एक अंतबिंदु'], ['Two endpoints', 'दो अंतबिंदु'], ['Infinite endpoints', 'अनंत अंतबिंदु'],
        ], 2),
        q('A closed figure made of 3 line segments is a?', '3 रेखाखंडों से बनी बंद आकृति क्या कहलाती है?', [
          ['Square', 'वर्ग'], ['Triangle', 'त्रिभुज'], ['Circle', 'वृत्त'], ['Pentagon', 'पंचभुज'],
        ], 1),
        q('An angle greater than 90° but less than 180° is called?', '90° से अधिक और 180° से कम कोण क्या कहलाता है?', [
          ['Acute', 'न्यून कोण'], ['Right', 'समकोण'], ['Obtuse', 'अधिक कोण'], ['Straight', 'सरल कोण'],
        ], 2),
        q('A circle has how many sides?', 'एक वृत्त की कितनी भुजाएं होती हैं?', [
          ['0', '0'], ['1', '1'], ['Infinite', 'अनंत'], ['2', '2'],
        ], 0),
      ]),
      ch('fractions-decimals', 'Fractions & Decimals', 'भिन्न और दशमलव', [
        q('What is 3/4 as a decimal?', '3/4 को दशमलव में क्या लिखेंगे?', [
          ['0.34', '0.34'], ['0.75', '0.75'], ['0.43', '0.43'], ['1.34', '1.34'],
        ], 1),
        q('Which fraction is the largest?', 'कौन सी भिन्न सबसे बड़ी है?', [
          ['1/2', '1/2'], ['1/4', '1/4'], ['1/3', '1/3'], ['1/8', '1/8'],
        ], 0),
        q('0.5 + 0.25 equals?', '0.5 + 0.25 का मान क्या है?', [
          ['0.75', '0.75'], ['0.70', '0.70'], ['0.80', '0.80'], ['1.00', '1.00'],
        ], 0),
        q('A fraction with numerator greater than denominator is called?', 'जिस भिन्न का अंश हर से बड़ा हो, वह क्या कहलाती है?', [
          ['Proper fraction', 'उचित भिन्न'], ['Improper fraction', 'अनुचित भिन्न'], ['Unit fraction', 'इकाई भिन्न'], ['Equivalent fraction', 'तुल्य भिन्न'],
        ], 1),
        q('1 whole equals how many quarters?', '1 पूर्ण में कितने चौथाई भाग होते हैं?', [
          ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ], 2),
      ]),
    ],
  },

  // ══════════════════════════ Class 7 ══════════════════════════
  {
    classLevel: 'Class 7',
    subject: 'Science',
    chapters: [
      ch('nutrition-plants-animals', 'Nutrition in Plants & Animals', 'पौधों और जंतुओं में पोषण', [
        q('Which gas do plants absorb from air for photosynthesis?', 'प्रकाश संश्लेषण के लिए पौधे हवा से कौन सी गैस लेते हैं?', [
          ['Oxygen', 'ऑक्सीजन'], ['Nitrogen', 'नाइट्रोजन'], ['Carbon dioxide', 'कार्बन डाइऑक्साइड'], ['Hydrogen', 'हाइड्रोजन'],
        ], 2),
        q('The mode of nutrition in fungi is?', 'कवक में पोषण का तरीका क्या है?', [
          ['Autotrophic', 'स्वपोषी'], ['Saprotrophic', 'मृतजीवी'], ['Photosynthetic', 'प्रकाश संश्लेषी'], ['Parasitic only', 'केवल परजीवी'],
        ], 1),
        q('Which organ in humans digests food using acid?', 'मनुष्य का कौन सा अंग अम्ल की मदद से भोजन पचाता है?', [
          ['Liver', 'यकृत'], ['Stomach', 'आमाशय'], ['Kidney', 'गुर्दा'], ['Lungs', 'फेफड़े'],
        ], 1),
        q('Insectivorous plants trap insects to get?', 'कीटभक्षी पौधे कीड़ों को पकड़कर क्या प्राप्त करते हैं?', [
          ['Water', 'पानी'], ['Nitrogen', 'नाइट्रोजन'], ['Sunlight', 'सूर्य का प्रकाश'], ['Oxygen', 'ऑक्सीजन'],
        ], 1),
        q('Amoeba obtains food using its?', 'अमीबा अपना भोजन किसकी मदद से प्राप्त करता है?', [
          ['Pseudopodia', 'कूटपाद'], ['Cilia', 'पक्ष्माभ'], ['Flagella', 'कशाभिका'], ['Mouth', 'मुख'],
        ], 0),
      ]),
      ch('heat-acids-bases', 'Heat, Acids, Bases & Salts', 'ऊष्मा, अम्ल, क्षार और लवण', [
        q('A substance that turns red litmus blue is called?', 'लाल लिटमस को नीला करने वाला पदार्थ क्या कहलाता है?', [
          ['Acid', 'अम्ल'], ['Base', 'क्षार'], ['Salt', 'नमक'], ['Neutral', 'उदासीन'],
        ], 1),
        q('The normal human body temperature is about?', 'सामान्य मानव शरीर का तापमान लगभग कितना होता है?', [
          ['37°C', '37°C'], ['25°C', '25°C'], ['45°C', '45°C'], ['20°C', '20°C'],
        ], 0),
        q('Heat transfer through direct contact is called?', 'सीधे संपर्क से ऊष्मा के स्थानांतरण को क्या कहते हैं?', [
          ['Conduction', 'चालन'], ['Convection', 'संवहन'], ['Radiation', 'विकिरण'], ['Reflection', 'परावर्तन'],
        ], 0),
        q('The reaction between an acid and a base produces?', 'अम्ल और क्षार की अभिक्रिया से क्या बनता है?', [
          ['Only gas', 'केवल गैस'], ['Salt and water', 'नमक और पानी'], ['Only water', 'केवल पानी'], ['Only salt', 'केवल नमक'],
        ], 1),
        q('Which instrument measures temperature?', 'तापमान मापने का यंत्र कौन सा है?', [
          ['Barometer', 'बैरोमीटर'], ['Thermometer', 'थर्मामीटर'], ['Hygrometer', 'हाइग्रोमीटर'], ['Anemometer', 'एनीमोमीटर'],
        ], 1),
      ]),
      ch('weather-motion-time', 'Weather, Motion & Time', 'मौसम, गति और समय', [
        q('Which force pulls objects toward the Earth?', 'कौन सा बल वस्तुओं को पृथ्वी की ओर खींचता है?', [
          ['Magnetic force', 'चुंबकीय बल'], ['Gravity', 'गुरुत्वाकर्षण'], ['Friction', 'घर्षण'], ['Muscular force', 'पेशीय बल'],
        ], 1),
        q('The average weather condition of a region over a long period is called?', 'किसी क्षेत्र की लंबी अवधि की औसत मौसम स्थिति क्या कहलाती है?', [
          ['Weather', 'मौसम'], ['Climate', 'जलवायु'], ['Humidity', 'आर्द्रता'], ['Season', 'ऋतु'],
        ], 1),
        q('A simple pendulum shows which type of motion?', 'सरल लोलक किस प्रकार की गति दर्शाता है?', [
          ['Random', 'यादृच्छिक'], ['Periodic', 'आवर्ती'], ['Linear', 'रैखिक'], ['Uniform', 'एकसमान'],
        ], 1),
        q('The unit of speed is?', 'चाल की इकाई क्या है?', [
          ['m/s', 'मी/से'], ['kg', 'किग्रा'], ['N', 'न्यूटन'], ['J', 'जूल'],
        ], 0),
        q('A device used to measure time intervals accurately is a?', 'समय अंतराल सटीक रूप से मापने वाला यंत्र क्या है?', [
          ['Odometer', 'ओडोमीटर'], ['Stopwatch', 'स्टॉपवॉच'], ['Speedometer', 'स्पीडोमीटर'], ['Compass', 'कम्पास'],
        ], 1),
      ]),
    ],
  },
  {
    classLevel: 'Class 7',
    subject: 'Mathematics',
    chapters: [
      ch('integers-rational', 'Integers & Rational Numbers', 'पूर्णांक और परिमेय संख्याएं', [
        q('What is the value of (-3) + 5?', '(-3) + 5 का मान क्या है?', [
          ['-2', '-2'], ['2', '2'], ['8', '8'], ['-8', '-8'],
        ], 1),
        q('The product of two negative integers is?', 'दो ऋणात्मक पूर्णांकों का गुणनफल क्या होता है?', [
          ['Positive', 'धनात्मक'], ['Negative', 'ऋणात्मक'], ['Zero', 'शून्य'], ['Undefined', 'अपरिभाषित'],
        ], 0),
        q('A rational number is one that can be written as?', 'परिमेय संख्या किस रूप में लिखी जा सकती है?', [
          ['p/q where q≠0', 'p/q जहां q≠0'], ['Only whole numbers', 'केवल पूर्ण संख्याएं'], ['Only decimals', 'केवल दशमलव'], ['Only negative numbers', 'केवल ऋणात्मक संख्याएं'],
        ], 0),
        q('What is -7 - (-3)?', '-7 - (-3) का मान क्या है?', [
          ['-4', '-4'], ['4', '4'], ['-10', '-10'], ['10', '10'],
        ], 0),
        q('Which of these is the additive identity?', 'इनमें से योज्य तत्समक कौन सा है?', [
          ['1', '1'], ['0', '0'], ['-1', '-1'], ['10', '10'],
        ], 1),
      ]),
      ch('equations-lines', 'Simple Equations & Lines', 'सरल समीकरण और रेखाएं', [
        q('Solve: x + 5 = 12', 'हल करें: x + 5 = 12', [
          ['5', '5'], ['7', '7'], ['12', '12'], ['17', '17'],
        ], 1),
        q('Two lines that never meet are called?', 'दो रेखाएं जो कभी नहीं मिलतीं, क्या कहलाती हैं?', [
          ['Intersecting', 'प्रतिच्छेदी'], ['Parallel', 'समांतर'], ['Perpendicular', 'लंबवत'], ['Coincident', 'सम्पाती'],
        ], 1),
        q('When two lines intersect, vertically opposite angles are?', 'जब दो रेखाएं प्रतिच्छेद करती हैं, तो सम्मुख कोण कैसे होते हैं?', [
          ['Equal', 'बराबर'], ['Supplementary', 'संपूरक'], ['Complementary', 'पूरक'], ['Always 90°', 'सदैव 90°'],
        ], 0),
        q('Solve: 3x = 21', 'हल करें: 3x = 21', [
          ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'],
        ], 2),
        q('Two angles that add up to 90° are called?', 'दो कोण जिनका योग 90° हो, क्या कहलाते हैं?', [
          ['Supplementary', 'संपूरक'], ['Complementary', 'पूरक'], ['Adjacent', 'आसन्न'], ['Vertical', 'सम्मुख'],
        ], 1),
      ]),
      ch('comparing-quantities', 'Comparing Quantities & Percentages', 'राशियों की तुलना और प्रतिशत', [
        q('What is 20% of 150?', '150 का 20% क्या है?', [
          ['20', '20'], ['30', '30'], ['15', '15'], ['25', '25'],
        ], 1),
        q('If the ratio of boys to girls is 3:2, and there are 15 boys, how many girls are there?', 'यदि लड़कों और लड़कियों का अनुपात 3:2 है और 15 लड़के हैं, तो कितनी लड़कियां हैं?', [
          ['5', '5'], ['10', '10'], ['12', '12'], ['20', '20'],
        ], 1),
        q('Simple interest on ₹1000 at 10% per year for 2 years is?', '₹1000 पर 10% वार्षिक दर से 2 वर्ष का साधारण ब्याज क्या है?', [
          ['₹100', '₹100'], ['₹200', '₹200'], ['₹1100', '₹1100'], ['₹1200', '₹1200'],
        ], 1),
        q('A profit of ₹20 on a cost price of ₹100 is what percent profit?', '₹100 लागत पर ₹20 लाभ कितने प्रतिशत लाभ है?', [
          ['10%', '10%'], ['20%', '20%'], ['5%', '5%'], ['25%', '25%'],
        ], 1),
        q('Convert 3/5 to a percentage.', '3/5 को प्रतिशत में बदलें।', [
          ['30%', '30%'], ['60%', '60%'], ['35%', '35%'], ['50%', '50%'],
        ], 1),
      ]),
    ],
  },

  // ══════════════════════════ Class 8 ══════════════════════════
  {
    classLevel: 'Class 8',
    subject: 'Science',
    chapters: [
      ch('crop-microorganisms', 'Crop Production & Microorganisms', 'फसल उत्पादन और सूक्ष्मजीव', [
        q('Which of these is a synthetic fibre?', 'इनमें से कौन सा एक कृत्रिम रेशा है?', [
          ['Cotton', 'कपास'], ['Wool', 'ऊन'], ['Nylon', 'नायलॉन'], ['Silk', 'रेशम'],
        ], 2),
        q('Which microorganism is used to make curd?', 'दही बनाने के लिए किस सूक्ष्मजीव का उपयोग होता है?', [
          ['Yeast', 'खमीर'], ['Bacteria (Lactobacillus)', 'बैक्टीरिया (लैक्टोबैसिलस)'], ['Virus', 'विषाणु'], ['Protozoa', 'प्रोटोजोआ'],
        ], 1),
        q('The process of adding fertilisers to soil is called?', 'मिट्टी में उर्वरक डालने की प्रक्रिया क्या कहलाती है?', [
          ['Manuring', 'खाद डालना'], ['Irrigation', 'सिंचाई'], ['Threshing', 'गहाई'], ['Weeding', 'निराई'],
        ], 0),
        q('Antibiotics are obtained from?', 'एंटीबायोटिक किससे प्राप्त होते हैं?', [
          ['Plants only', 'केवल पौधों से'], ['Microorganisms', 'सूक्ष्मजीवों से'], ['Rocks', 'चट्टानों से'], ['Metals', 'धातुओं से'],
        ], 1),
        q('Rabi crops are grown in which season?', 'रबी फसलें किस मौसम में उगाई जाती हैं?', [
          ['Summer', 'गर्मी'], ['Winter', 'सर्दी'], ['Monsoon', 'मानसून'], ['Autumn only', 'केवल शरद'],
        ], 1),
      ]),
      ch('force-pressure-sound', 'Force, Pressure & Sound', 'बल, दाब और ध्वनि', [
        q('Which mirror is used in vehicle side mirrors?', 'वाहन के साइड मिरर में कौन सा दर्पण उपयोग होता है?', [
          ['Concave', 'अवतल'], ['Convex', 'उत्तल'], ['Plane', 'समतल'], ['None', 'कोई नहीं'],
        ], 1),
        q('Pressure is defined as force per unit?', 'दाब को प्रति इकाई किसके रूप में परिभाषित किया जाता है?', [
          ['Area', 'क्षेत्रफल'], ['Volume', 'आयतन'], ['Mass', 'द्रव्यमान'], ['Length', 'लंबाई'],
        ], 0),
        q('Sound travels fastest through?', 'ध्वनि सबसे तेज किसमें यात्रा करती है?', [
          ['Vacuum', 'निर्वात'], ['Air', 'हवा'], ['Water', 'पानी'], ['Solids', 'ठोस'],
        ], 3),
        q('The number of oscillations per second is called?', 'प्रति सेकंड दोलनों की संख्या क्या कहलाती है?', [
          ['Amplitude', 'आयाम'], ['Frequency', 'आवृत्ति'], ['Wavelength', 'तरंगदैर्घ्य'], ['Time period', 'आवर्तकाल'],
        ], 1),
        q('Friction acts in a direction that is?', 'घर्षण किस दिशा में कार्य करता है?', [
          ['Same as motion', 'गति की समान दिशा'], ['Opposite to motion', 'गति के विपरीत'], ['Perpendicular to motion', 'गति के लंबवत'], ['Random', 'यादृच्छिक'],
        ], 1),
      ]),
      ch('chemical-effects-cell', 'Chemical Effects & Cell Structure', 'रासायनिक प्रभाव और कोशिका संरचना', [
        q('Rusting of iron is an example of a?', 'लोहे में जंग लगना किसका उदाहरण है?', [
          ['Physical change', 'भौतिक परिवर्तन'], ['Chemical change', 'रासायनिक परिवर्तन'], ['No change', 'कोई परिवर्तन नहीं'], ['Nuclear change', 'नाभिकीय परिवर्तन'],
        ], 1),
        q('The smallest unit of life is the?', 'जीवन की सबसे छोटी इकाई क्या है?', [
          ['Tissue', 'ऊतक'], ['Cell', 'कोशिका'], ['Organ', 'अंग'], ['Organism', 'जीव'],
        ], 1),
        q('A solution that conducts electricity is called?', 'बिजली संचालित करने वाला विलयन क्या कहलाता है?', [
          ['Insulator', 'कुचालक'], ['Electrolyte', 'वैद्युत अपघट्य'], ['Solvent', 'विलायक'], ['Suspension', 'निलंबन'],
        ], 1),
        q('The cell organelle that controls all activities of the cell is the?', 'कोशिका की सभी गतिविधियों को नियंत्रित करने वाला अंगक कौन सा है?', [
          ['Mitochondria', 'माइटोकॉन्ड्रिया'], ['Nucleus', 'केंद्रक'], ['Ribosome', 'राइबोसोम'], ['Vacuole', 'रिक्तिका'],
        ], 1),
        q('Galvanisation is coating iron with?', 'गैल्वनीकरण में लोहे पर किसकी परत चढ़ाई जाती है?', [
          ['Copper', 'तांबा'], ['Zinc', 'जस्ता'], ['Gold', 'सोना'], ['Silver', 'चांदी'],
        ], 1),
      ]),
    ],
  },
  {
    classLevel: 'Class 8',
    subject: 'Mathematics',
    chapters: [
      ch('rational-squares', 'Rational Numbers & Squares', 'परिमेय संख्याएं और वर्ग', [
        q('What is the square root of 144?', '144 का वर्गमूल क्या है?', [
          ['11', '11'], ['12', '12'], ['13', '13'], ['14', '14'],
        ], 1),
        q('The additive inverse of -5/7 is?', '-5/7 का योज्य प्रतिलोम क्या है?', [
          ['5/7', '5/7'], ['-5/7', '-5/7'], ['7/5', '7/5'], ['0', '0'],
        ], 0),
        q('What is 2 to the power of 5?', '2 की घात 5 क्या है?', [
          ['16', '16'], ['32', '32'], ['64', '64'], ['10', '10'],
        ], 1),
        q('Is every whole number a rational number?', 'क्या हर पूर्ण संख्या एक परिमेय संख्या है?', [
          ['Yes', 'हां'], ['No', 'नहीं'], ['Sometimes', 'कभी-कभी'], ['Never', 'कभी नहीं'],
        ], 0),
        q('The square of an odd number is always?', 'किसी विषम संख्या का वर्ग सदैव कैसा होता है?', [
          ['Even', 'सम'], ['Odd', 'विषम'], ['Zero', 'शून्य'], ['Negative', 'ऋणात्मक'],
        ], 1),
      ]),
      ch('equations-mensuration', 'Linear Equations & Mensuration', 'रैखिक समीकरण और क्षेत्रमिति', [
        q('Solve for x: 2x + 3 = 11', 'x हल करें: 2x + 3 = 11', [
          ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'],
        ], 1),
        q('The sum of angles in a quadrilateral is?', 'चतुर्भुज के कोणों का योग कितना होता है?', [
          ['180°', '180°'], ['270°', '270°'], ['360°', '360°'], ['90°', '90°'],
        ], 2),
        q('The area of a rectangle with length 8 and breadth 5 is?', 'लंबाई 8 और चौड़ाई 5 वाले आयत का क्षेत्रफल क्या है?', [
          ['13', '13'], ['26', '26'], ['40', '40'], ['45', '45'],
        ], 2),
        q('The perimeter of a square with side 6 cm is?', '6 सेमी भुजा वाले वर्ग की परिधि क्या है?', [
          ['12 cm', '12 सेमी'], ['24 cm', '24 सेमी'], ['36 cm', '36 सेमी'], ['6 cm', '6 सेमी'],
        ], 1),
        q('A quadrilateral with all sides equal and all angles 90° is a?', 'सभी भुजाएं बराबर और सभी कोण 90° वाला चतुर्भुज क्या है?', [
          ['Rectangle', 'आयत'], ['Square', 'वर्ग'], ['Rhombus', 'समचतुर्भुज'], ['Trapezium', 'समलंब'],
        ], 1),
      ]),
      ch('data-algebra', 'Data Handling & Algebra', 'आंकड़ों का प्रबंधन और बीजगणित', [
        q('A graph using bars of uniform width is called a?', 'समान चौड़ाई की पट्टियों वाला ग्राफ क्या कहलाता है?', [
          ['Pie chart', 'पाई चार्ट'], ['Bar graph', 'दंड आलेख'], ['Line graph', 'रेखा आलेख'], ['Histogram only', 'केवल हिस्टोग्राम'],
        ], 1),
        q('Simplify: 3x + 2x', 'सरल करें: 3x + 2x', [
          ['5x', '5x'], ['6x', '6x'], ['5x²', '5x²'], ['x', 'x'],
        ], 0),
        q('The probability of getting a head in a coin toss is?', 'सिक्का उछालने पर चित (head) आने की प्रायिकता क्या है?', [
          ['1', '1'], ['0', '0'], ['1/2', '1/2'], ['2', '2'],
        ], 2),
        q('Factorise: x² + 5x', 'गुणनखंड करें: x² + 5x', [
          ['x(x+5)', 'x(x+5)'], ['x²(5)', 'x²(5)'], ['5(x+x)', '5(x+x)'], ['(x+5)²', '(x+5)²'],
        ], 0),
        q('The mean of 2, 4, 6, 8 is?', '2, 4, 6, 8 का माध्य क्या है?', [
          ['4', '4'], ['5', '5'], ['6', '6'], ['8', '8'],
        ], 1),
      ]),
    ],
  },

  // ══════════════════════════ Class 9 ══════════════════════════
  {
    classLevel: 'Class 9',
    subject: 'Science',
    chapters: [
      ch('matter-nature', "Matter & Its Nature", 'पदार्थ और उसकी प्रकृति', [
        q('The basic unit of matter is the?', 'पदार्थ की मूल इकाई क्या है?', [
          ['Molecule', 'अणु'], ['Atom', 'परमाणु'], ['Cell', 'कोशिका'], ['Electron', 'इलेक्ट्रॉन'],
        ], 1),
        q('Matter exists in how many common physical states?', 'पदार्थ कितनी सामान्य भौतिक अवस्थाओं में पाया जाता है?', [
          ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ], 1),
        q('The process of a solid changing directly to gas is called?', 'ठोस से सीधे गैस में बदलने की प्रक्रिया क्या कहलाती है?', [
          ['Evaporation', 'वाष्पीकरण'], ['Sublimation', 'ऊर्ध्वपातन'], ['Condensation', 'संघनन'], ['Melting', 'गलन'],
        ], 1),
        q('Which of these is a mixture?', 'इनमें से कौन एक मिश्रण है?', [
          ['Water', 'पानी'], ['Salt', 'नमक'], ['Air', 'हवा'], ['Gold', 'सोना'],
        ], 2),
        q('Diffusion occurs faster in which state of matter?', 'विसरण किस अवस्था में सबसे तेज होता है?', [
          ['Solid', 'ठोस'], ['Liquid', 'द्रव'], ['Gas', 'गैस'], ['Plasma only', 'केवल प्लाज़्मा'],
        ], 2),
      ]),
      ch('cells-tissues', 'Cells & Tissues', 'कोशिकाएं और ऊतक', [
        q('Which organelle is the "powerhouse of the cell"?', 'कौन सा अंगक कोशिका का "पावरहाउस" कहलाता है?', [
          ['Nucleus', 'केंद्रक'], ['Ribosome', 'राइबोसोम'], ['Mitochondria', 'माइटोकॉन्ड्रिया'], ['Golgi body', 'गॉल्जी बॉडी'],
        ], 2),
        q('A group of similar cells performing the same function is called a?', 'समान कार्य करने वाली समान कोशिकाओं के समूह को क्या कहते हैं?', [
          ['Organ', 'अंग'], ['Tissue', 'ऊतक'], ['System', 'तंत्र'], ['Organism', 'जीव'],
        ], 1),
        q('Which part of the cell controls what enters and exits?', 'कोशिका का कौन सा भाग यह नियंत्रित करता है कि क्या प्रवेश करे और क्या निकले?', [
          ['Cell wall', 'कोशिका भित्ति'], ['Cell membrane', 'कोशिका झिल्ली'], ['Nucleolus', 'केंद्रिका'], ['Cytoplasm', 'कोशिका द्रव्य'],
        ], 1),
        q('Plant cells differ from animal cells because they have a?', 'पादप कोशिका, जंतु कोशिका से इसलिए अलग है क्योंकि इसमें क्या होता है?', [
          ['Nucleus', 'केंद्रक'], ['Cell wall', 'कोशिका भित्ति'], ['Mitochondria', 'माइटोकॉन्ड्रिया'], ['Cytoplasm', 'कोशिका द्रव्य'],
        ], 1),
        q('Xylem tissue in plants is mainly responsible for transporting?', 'पौधों में जाइलम ऊतक मुख्यतः किसके परिवहन के लिए जिम्मेदार है?', [
          ['Food', 'भोजन'], ['Water and minerals', 'पानी और खनिज'], ['Oxygen only', 'केवल ऑक्सीजन'], ['Hormones', 'हार्मोन'],
        ], 1),
      ]),
      ch('motion-force-gravitation', 'Motion, Force & Gravitation', 'गति, बल और गुरुत्वाकर्षण', [
        q('SI unit of force is?', 'बल का SI मात्रक क्या है?', [
          ['Joule', 'जूल'], ['Newton', 'न्यूटन'], ['Watt', 'वाट'], ['Pascal', 'पास्कल'],
        ], 1),
        q("Newton's first law is also called the law of?", 'न्यूटन का पहला नियम किस नाम से भी जाना जाता है?', [
          ['Inertia', 'जड़त्व'], ['Motion', 'गति'], ['Gravitation', 'गुरुत्वाकर्षण'], ['Action-reaction', 'क्रिया-प्रतिक्रिया'],
        ], 0),
        q('The rate of change of velocity is called?', 'वेग परिवर्तन की दर क्या कहलाती है?', [
          ['Speed', 'चाल'], ['Acceleration', 'त्वरण'], ['Displacement', 'विस्थापन'], ['Momentum', 'संवेग'],
        ], 1),
        q("The value of g (acceleration due to gravity) on Earth is approximately?", 'पृथ्वी पर गुरुत्वीय त्वरण (g) का मान लगभग कितना है?', [
          ['9.8 m/s²', '9.8 मी/से²'], ['5 m/s²', '5 मी/से²'], ['1 m/s²', '1 मी/से²'], ['20 m/s²', '20 मी/से²'],
        ], 0),
        q('Momentum is the product of mass and?', 'संवेग द्रव्यमान और किसका गुणनफल है?', [
          ['Velocity', 'वेग'], ['Force', 'बल'], ['Time', 'समय'], ['Distance', 'दूरी'],
        ], 0),
      ]),
    ],
  },
  {
    classLevel: 'Class 9',
    subject: 'Mathematics',
    chapters: [
      ch('numbers-polynomials', 'Number Systems & Polynomials', 'संख्या पद्धति और बहुपद', [
        q('Is 0 a rational number?', 'क्या 0 एक परिमेय संख्या है?', [
          ['Yes', 'हां'], ['No', 'नहीं'], ['Sometimes', 'कभी-कभी'], ['Undefined', 'अपरिभाषित'],
        ], 0),
        q('What is the degree of the polynomial 5x³ + 2x - 1?', 'बहुपद 5x³ + 2x - 1 की घात क्या है?', [
          ['1', '1'], ['2', '2'], ['3', '3'], ['5', '5'],
        ], 2),
        q('An irrational number cannot be expressed as?', 'अपरिमेय संख्या को किस रूप में व्यक्त नहीं किया जा सकता?', [
          ['p/q form', 'p/q रूप'], ['Decimal', 'दशमलव'], ['Real number', 'वास्तविक संख्या'], ['Point on number line', 'संख्या रेखा पर बिंदु'],
        ], 0),
        q('A polynomial with 3 terms is called a?', '3 पदों वाला बहुपद क्या कहलाता है?', [
          ['Monomial', 'एकपदी'], ['Binomial', 'द्विपदी'], ['Trinomial', 'त्रिपदी'], ['Quadrinomial', 'चतुष्पदी'],
        ], 2),
        q('The value of a zero polynomial\'s degree is?', 'शून्य बहुपद की घात क्या होती है?', [
          ['0', '0'], ['1', '1'], ['Not defined', 'अपरिभाषित'], ['Infinite', 'अनंत'],
        ], 2),
      ]),
      ch('coordinate-geometry', 'Coordinate Geometry & Lines', 'निर्देशांक ज्यामिति और रेखाएं', [
        q('In coordinate geometry, the point (0,0) is called the?', 'निर्देशांक ज्यामिति में बिंदु (0,0) क्या कहलाता है?', [
          ['Origin', 'मूल बिंदु'], ['Axis', 'अक्ष'], ['Quadrant', 'चतुर्थांश'], ['Vertex', 'शीर्ष'],
        ], 0),
        q('The x-coordinate of a point is also called its?', 'किसी बिंदु का x-निर्देशांक किस नाम से भी जाना जाता है?', [
          ['Ordinate', 'कोटि'], ['Abscissa', 'भुज'], ['Origin', 'मूल बिंदु'], ['Slope', 'प्रवणता'],
        ], 1),
        q('A linear equation in two variables has how many solutions?', 'दो चरों वाले रैखिक समीकरण के कितने हल होते हैं?', [
          ['One', 'एक'], ['Two', 'दो'], ['Infinitely many', 'अनंत'], ['None', 'कोई नहीं'],
        ], 2),
        q('The point (3, 0) lies on which axis?', 'बिंदु (3, 0) किस अक्ष पर स्थित है?', [
          ['x-axis', 'x-अक्ष'], ['y-axis', 'y-अक्ष'], ['Origin', 'मूल बिंदु'], ['Neither', 'किसी पर नहीं'],
        ], 0),
        q('In which quadrant does the point (-2, 3) lie?', 'बिंदु (-2, 3) किस चतुर्थांश में स्थित है?', [
          ['First', 'प्रथम'], ['Second', 'द्वितीय'], ['Third', 'तृतीय'], ['Fourth', 'चतुर्थ'],
        ], 1),
      ]),
      ch('euclid-triangles', "Euclid's Geometry & Triangles", 'यूक्लिड की ज्यामिति और त्रिभुज', [
        q("Euclid's fifth postulate deals with?", 'यूक्लिड की पांचवीं अभिधारणा किससे संबंधित है?', [
          ['Circles', 'वृत्त'], ['Parallel lines', 'समांतर रेखाएं'], ['Triangles', 'त्रिभुज'], ['Angles only', 'केवल कोण'],
        ], 1),
        q('The sum of interior angles of a triangle is?', 'त्रिभुज के अंतःकोणों का योग कितना होता है?', [
          ['90°', '90°'], ['180°', '180°'], ['270°', '270°'], ['360°', '360°'],
        ], 1),
        q('Two triangles are congruent if all corresponding sides and angles are?', 'यदि सभी संगत भुजाएं और कोण समान हों तो दो त्रिभुज कैसे होते हैं?', [
          ['Similar', 'समरूप'], ['Equal (congruent)', 'सर्वांगसम'], ['Different', 'भिन्न'], ['Unrelated', 'असंबंधित'],
        ], 1),
        q('A triangle with two equal sides is called?', 'दो बराबर भुजाओं वाला त्रिभुज क्या कहलाता है?', [
          ['Scalene', 'विषमबाहु'], ['Isosceles', 'समद्विबाहु'], ['Equilateral', 'समबाहु'], ['Right', 'समकोण'],
        ], 1),
        q("Euclid's axioms are considered to be?", 'यूक्लिड की अभिगृहीत किस रूप में मानी जाती हैं?', [
          ['Universal truths', 'सार्वभौमिक सत्य'], ['Only for geometry', 'केवल ज्यामिति के लिए'], ['False statements', 'असत्य कथन'], ['Unprovable guesses', 'अप्रमाणित अनुमान'],
        ], 0),
      ]),
    ],
  },

  // ══════════════════════════ Class 10 ══════════════════════════
  {
    classLevel: 'Class 10',
    subject: 'Science',
    chapters: [
      ch('chemical-reactions', 'Chemical Reactions & Equations', 'रासायनिक अभिक्रियाएं और समीकरण', [
        q('Which gas is released during photosynthesis?', 'प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?', [
          ['Carbon dioxide', 'कार्बन डाइऑक्साइड'], ['Oxygen', 'ऑक्सीजन'], ['Nitrogen', 'नाइट्रोजन'], ['Hydrogen', 'हाइड्रोजन'],
        ], 1),
        q('pH of a neutral solution is?', 'उदासीन विलयन का pH मान कितना होता है?', [
          ['0', '0'], ['7', '7'], ['14', '14'], ['1', '1'],
        ], 1),
        q('A reaction where a single product is formed from two or more reactants is called?', 'जिस अभिक्रिया में दो या अधिक अभिकारकों से एक उत्पाद बनता है, वह क्या कहलाती है?', [
          ['Decomposition', 'वियोजन'], ['Combination', 'संयोजन'], ['Displacement', 'विस्थापन'], ['Double displacement', 'द्वि-विस्थापन'],
        ], 1),
        q('Rancidity in food is prevented by adding?', 'भोजन में विकृतगंधिता को रोकने के लिए क्या मिलाया जाता है?', [
          ['Water', 'पानी'], ['Antioxidants', 'एंटीऑक्सीडेंट'], ['Salt only', 'केवल नमक'], ['Sugar only', 'केवल चीनी'],
        ], 1),
        q('The chemical formula of baking soda is?', 'बेकिंग सोडा का रासायनिक सूत्र क्या है?', [
          ['NaCl', 'NaCl'], ['NaHCO₃', 'NaHCO₃'], ['CaCO₃', 'CaCO₃'], ['Na₂CO₃', 'Na₂CO₃'],
        ], 1),
      ]),
      ch('life-processes', 'Life Processes', 'जीवन प्रक्रियाएं', [
        q('Which part of the human eye controls the amount of light entering?', 'मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?', [
          ['Retina', 'रेटिना'], ['Cornea', 'कॉर्निया'], ['Iris', 'आइरिस'], ['Lens', 'लेंस'],
        ], 2),
        q('The functional unit of the kidney is the?', 'गुर्दे की कार्यात्मक इकाई क्या है?', [
          ['Neuron', 'न्यूरॉन'], ['Nephron', 'वृक्काणु (नेफ्रॉन)'], ['Alveolus', 'वायुकोष'], ['Villus', 'रसांकुर'],
        ], 1),
        q('The process by which plants lose water vapour is called?', 'पौधों से जलवाष्प के निकलने की प्रक्रिया क्या कहलाती है?', [
          ['Respiration', 'श्वसन'], ['Transpiration', 'वाष्पोत्सर्जन'], ['Photosynthesis', 'प्रकाश संश्लेषण'], ['Excretion', 'उत्सर्जन'],
        ], 1),
        q('Human heart has how many chambers?', 'मानव हृदय में कितने कक्ष होते हैं?', [
          ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ], 2),
        q('Which pigment absorbs sunlight for photosynthesis?', 'प्रकाश संश्लेषण के लिए कौन सा वर्णक सूर्य के प्रकाश को अवशोषित करता है?', [
          ['Haemoglobin', 'हीमोग्लोबिन'], ['Chlorophyll', 'क्लोरोफिल'], ['Melanin', 'मेलानिन'], ['Carotene', 'कैरोटीन'],
        ], 1),
      ]),
      ch('light-electricity', 'Light & Electricity', 'प्रकाश और विद्युत', [
        q('The image formed by a plane mirror is?', 'समतल दर्पण द्वारा बना प्रतिबिंब कैसा होता है?', [
          ['Real and inverted', 'वास्तविक और उल्टा'], ['Virtual and erect', 'आभासी और सीधा'], ['Real and erect', 'वास्तविक और सीधा'], ['No image formed', 'कोई प्रतिबिंब नहीं'],
        ], 1),
        q("Ohm's law relates voltage, current and?", 'ओम का नियम वोल्टेज, धारा और किसे जोड़ता है?', [
          ['Power', 'शक्ति'], ['Resistance', 'प्रतिरोध'], ['Energy', 'ऊर्जा'], ['Charge', 'आवेश'],
        ], 1),
        q('The SI unit of electric power is?', 'विद्युत शक्ति का SI मात्रक क्या है?', [
          ['Volt', 'वोल्ट'], ['Ampere', 'एम्पियर'], ['Watt', 'वाट'], ['Ohm', 'ओम'],
        ], 2),
        q('A converging lens is also called a?', 'अभिसारी लेंस को और क्या कहा जाता है?', [
          ['Concave lens', 'अवतल लेंस'], ['Convex lens', 'उत्तल लेंस'], ['Plane lens', 'समतल लेंस'], ['Cylindrical lens', 'बेलनाकार लेंस'],
        ], 1),
        q('When resistors are connected in series, the total resistance?', 'जब प्रतिरोधकों को श्रेणीक्रम में जोड़ा जाता है, तो कुल प्रतिरोध कैसा होता है?', [
          ['Decreases', 'घटता है'], ['Increases (adds up)', 'बढ़ता है (जुड़ता है)'], ['Stays the same', 'समान रहता है'], ['Becomes zero', 'शून्य हो जाता है'],
        ], 1),
      ]),
    ],
  },
  {
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapters: [
      ch('real-numbers-polynomials', 'Real Numbers & Polynomials', 'वास्तविक संख्याएं और बहुपद', [
        q('The HCF of 12 and 18 is?', '12 और 18 का म.स. (HCF) क्या है?', [
          ['3', '3'], ['6', '6'], ['9', '9'], ['12', '12'],
        ], 1),
        q('Euclid\'s Division Lemma states a = bq + r, where r must satisfy?', 'यूक्लिड विभाजन लेम्मा a = bq + r में r की शर्त क्या है?', [
          ['0 ≤ r < b', '0 ≤ r < b'], ['r > b', 'r > b'], ['r = b', 'r = b'], ['r < 0', 'r < 0'],
        ], 0),
        q('A quadratic polynomial has at most how many zeroes?', 'द्विघात बहुपद के अधिकतम कितने शून्यक होते हैं?', [
          ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
        ], 1),
        q('The sum of zeroes of x² - 5x + 6 is?', 'x² - 5x + 6 के शून्यकों का योग क्या है?', [
          ['5', '5'], ['-5', '-5'], ['6', '6'], ['-6', '-6'],
        ], 0),
        q('√2 is an example of a/an?', '√2 किसका उदाहरण है?', [
          ['Rational number', 'परिमेय संख्या'], ['Irrational number', 'अपरिमेय संख्या'], ['Whole number', 'पूर्ण संख्या'], ['Integer', 'पूर्णांक'],
        ], 1),
      ]),
      ch('quadratics-trigonometry', 'Quadratic Equations & Trigonometry', 'द्विघात समीकरण और त्रिकोणमिति', [
        q('If a quadratic equation has equal roots, its discriminant is?', 'यदि किसी द्विघात समीकरण के मूल बराबर हों, तो उसका विविक्तकर क्या होता है?', [
          ['Positive', 'धनात्मक'], ['Negative', 'ऋणात्मक'], ['Zero', 'शून्य'], ['Undefined', 'अपरिभाषित'],
        ], 2),
        q('sin 90° equals?', 'sin 90° का मान क्या है?', [
          ['0', '0'], ['1', '1'], ['-1', '-1'], ['½', '½'],
        ], 1),
        q('cos 0° equals?', 'cos 0° का मान क्या है?', [
          ['0', '0'], ['1', '1'], ['-1', '-1'], ['½', '½'],
        ], 1),
        q('The standard form of a quadratic equation is?', 'द्विघात समीकरण का मानक रूप क्या है?', [
          ['ax + b = 0', 'ax + b = 0'], ['ax² + bx + c = 0', 'ax² + bx + c = 0'], ['ax³ + b = 0', 'ax³ + b = 0'], ['a/x = b', 'a/x = b'],
        ], 1),
        q('tan θ is defined as?', 'tan θ को किस प्रकार परिभाषित किया जाता है?', [
          ['sin θ / cos θ', 'sin θ / cos θ'], ['cos θ / sin θ', 'cos θ / sin θ'], ['1/sin θ', '1/sin θ'], ['sin θ × cos θ', 'sin θ × cos θ'],
        ], 0),
      ]),
      ch('circles-stats-probability', 'Circles, Statistics & Probability', 'वृत्त, सांख्यिकी और प्रायिकता', [
        q('The total surface area formula uses which constant for a circle?', 'वृत्त के लिए कौन सा स्थिरांक उपयोग होता है?', [
          ['e', 'e'], ['π (pi)', 'π (पाई)'], ['φ', 'φ'], ['i', 'i'],
        ], 1),
        q('A tangent to a circle touches it at how many points?', 'वृत्त की स्पर्श रेखा उसे कितने बिंदुओं पर स्पर्श करती है?', [
          ['1', '1'], ['2', '2'], ['3', '3'], ['Infinite', 'अनंत'],
        ], 0),
        q('The probability of an impossible event is?', 'असंभव घटना की प्रायिकता क्या होती है?', [
          ['1', '1'], ['0', '0'], ['0.5', '0.5'], ['Undefined', 'अपरिभाषित'],
        ], 1),
        q('The median of 3, 5, 7, 9, 11 is?', '3, 5, 7, 9, 11 की माध्यिका क्या है?', [
          ['5', '5'], ['7', '7'], ['9', '9'], ['6', '6'],
        ], 1),
        q('The mode of a data set is the value that?', 'किसी आंकड़ा समुच्चय का बहुलक किस मान को कहते हैं?', [
          ['Occurs most frequently', 'सबसे अधिक बार आता है'], ['Is the middle value', 'मध्य मान होता है'], ['Is the average', 'औसत होता है'], ['Is the largest', 'सबसे बड़ा होता है'],
        ], 0),
      ]),
    ],
  },

  // ══════════════════════════ Class 11 ══════════════════════════
  {
    classLevel: 'Class 11',
    subject: 'Science',
    chapters: [
      ch('physics-units-laws', 'Physics: Units, Motion & Laws', 'भौतिकी: मात्रक, गति और नियम', [
        q('SI unit of electric current is?', 'विद्युत धारा का SI मात्रक क्या है?', [
          ['Volt', 'वोल्ट'], ['Ampere', 'एम्पियर'], ['Ohm', 'ओम'], ['Watt', 'वाट'],
        ], 1),
        q("Newton's second law relates force to?", 'न्यूटन का दूसरा नियम बल को किससे जोड़ता है?', [
          ['Mass and acceleration', 'द्रव्यमान और त्वरण'], ['Only mass', 'केवल द्रव्यमान'], ['Only velocity', 'केवल वेग'], ['Energy alone', 'केवल ऊर्जा'],
        ], 0),
        q('The SI unit of work and energy is the?', 'कार्य और ऊर्जा का SI मात्रक क्या है?', [
          ['Newton', 'न्यूटन'], ['Joule', 'जूल'], ['Watt', 'वाट'], ['Pascal', 'पास्कल'],
        ], 1),
        q('Which quantity is a vector?', 'इनमें से कौन सी राशि सदिश है?', [
          ['Mass', 'द्रव्यमान'], ['Displacement', 'विस्थापन'], ['Speed', 'चाल'], ['Time', 'समय'],
        ], 1),
        q("Newton's third law states that every action has an equal and opposite?", 'न्यूटन का तीसरा नियम कहता है कि हर क्रिया की समान और विपरीत क्या होती है?', [
          ['Force', 'बल'], ['Reaction', 'प्रतिक्रिया'], ['Mass', 'द्रव्यमान'], ['Direction', 'दिशा'],
        ], 1),
      ]),
      ch('chemistry-atomic-bonding', 'Chemistry: Atomic Structure & Bonding', 'रसायन विज्ञान: परमाणु संरचना और आबंधन', [
        q('Which quantum number describes the shape of an orbital?', 'कौन सी क्वांटम संख्या कक्षक के आकार का वर्णन करती है?', [
          ['Principal', 'मुख्य'], ['Azimuthal', 'दिगंशी'], ['Magnetic', 'चुंबकीय'], ['Spin', 'चक्रण'],
        ], 1),
        q('An ionic bond is formed by the?', 'आयनिक बंधन किस प्रकार बनता है?', [
          ['Sharing of electrons', 'इलेक्ट्रॉनों का साझा होना'], ['Transfer of electrons', 'इलेक्ट्रॉनों का स्थानांतरण'], ['Sharing of protons', 'प्रोटॉनों का साझा होना'], ['Loss of neutrons', 'न्यूट्रॉनों की हानि'],
        ], 1),
        q('The modern periodic table is arranged by increasing?', 'आधुनिक आवर्त सारणी किसके बढ़ते क्रम में व्यवस्थित है?', [
          ['Atomic mass', 'परमाणु द्रव्यमान'], ['Atomic number', 'परमाणु क्रमांक'], ['Number of neutrons', 'न्यूट्रॉनों की संख्या'], ['Valency', 'संयोजकता'],
        ], 1),
        q('Which particle has no charge?', 'किस कण पर कोई आवेश नहीं होता?', [
          ['Proton', 'प्रोटॉन'], ['Electron', 'इलेक्ट्रॉन'], ['Neutron', 'न्यूट्रॉन'], ['Ion', 'आयन'],
        ], 2),
        q('The number of electrons in the outermost shell determines an atom\'s?', 'बाह्यतम कोश में इलेक्ट्रॉनों की संख्या किसे निर्धारित करती है?', [
          ['Mass', 'द्रव्यमान'], ['Valency', 'संयोजकता'], ['Isotope', 'समस्थानिक'], ['Density', 'घनत्व'],
        ], 1),
      ]),
      ch('biology-cell-diversity', 'Biology: Cell & Diversity of Life', 'जीव विज्ञान: कोशिका और जीवन की विविधता', [
        q('The powerhouse organelle found in plant cells that traps sunlight is?', 'पौधों की कोशिका में सूर्य के प्रकाश को पकड़ने वाला अंगक कौन सा है?', [
          ['Mitochondria', 'माइटोकॉन्ड्रिया'], ['Chloroplast', 'क्लोरोप्लास्ट'], ['Nucleus', 'केंद्रक'], ['Vacuole', 'रिक्तिका'],
        ], 1),
        q('The scientific naming system using two names is called?', 'दो नामों का उपयोग करने वाली वैज्ञानिक नामकरण प्रणाली क्या कहलाती है?', [
          ['Classification', 'वर्गीकरण'], ['Binomial nomenclature', 'द्विपद नामकरण'], ['Taxonomy only', 'केवल वर्गिकी'], ['Phylogeny', 'जातिवृत्त'],
        ], 1),
        q('Organisms that can prepare their own food are called?', 'जो जीव अपना भोजन स्वयं बना सकते हैं, वे क्या कहलाते हैं?', [
          ['Heterotrophs', 'परपोषी'], ['Autotrophs', 'स्वपोषी'], ['Decomposers', 'अपघटक'], ['Parasites', 'परजीवी'],
        ], 1),
        q('The five kingdom classification was proposed by?', 'पांच जगत वर्गीकरण किसने प्रस्तावित किया?', [
          ['Linnaeus', 'लिनियस'], ['R.H. Whittaker', 'आर.एच. व्हिटेकर'], ['Darwin', 'डार्विन'], ['Mendel', 'मेंडल'],
        ], 1),
        q('Which kingdom includes organisms without a true nucleus?', 'किस जगत में सच्चे केंद्रक रहित जीव शामिल हैं?', [
          ['Monera', 'मोनेरा'], ['Protista', 'प्रोटिस्टा'], ['Fungi', 'कवक'], ['Animalia', 'जंतु जगत'],
        ], 0),
      ]),
    ],
  },
  {
    classLevel: 'Class 11',
    subject: 'Mathematics',
    chapters: [
      ch('sets-functions', 'Sets, Relations & Functions', 'समुच्चय, संबंध और फलन', [
        q('A set with no elements is called?', 'बिना किसी अवयव वाला समुच्चय क्या कहलाता है?', [
          ['Universal set', 'सार्वत्रिक समुच्चय'], ['Empty set', 'रिक्त समुच्चय'], ['Infinite set', 'अनंत समुच्चय'], ['Subset', 'उपसमुच्चय'],
        ], 1),
        q('If A has 3 elements and B has 4, how many elements does A × B have?', 'यदि A में 3 और B में 4 अवयव हैं, तो A × B में कितने अवयव होंगे?', [
          ['7', '7'], ['12', '12'], ['1', '1'], ['34', '34'],
        ], 1),
        q('A relation where every element of A maps to exactly one element of B is a?', 'जिस संबंध में A का हर अवयव B के ठीक एक अवयव से जुड़ा हो, वह क्या कहलाता है?', [
          ['Set', 'समुच्चय'], ['Function', 'फलन'], ['Domain', 'प्रांत'], ['Range', 'परिसर'],
        ], 1),
        q('The union of two sets A and B contains?', 'दो समुच्चयों A और B का सर्वनिष्ठ (संघ) किसमें शामिल होता है?', [
          ['Only common elements', 'केवल सामान्य अवयव'], ['All elements of both', 'दोनों के सभी अवयव'], ['Only A\'s elements', 'केवल A के अवयव'], ['Neither', 'कोई नहीं'],
        ], 1),
        q('The domain of f(x) = 1/x excludes which value?', 'f(x) = 1/x के प्रांत में कौन सा मान शामिल नहीं है?', [
          ['1', '1'], ['0', '0'], ['-1', '-1'], ['All values', 'सभी मान'],
        ], 1),
      ]),
      ch('trigonometry-complex', 'Trigonometry & Complex Numbers', 'त्रिकोणमिति और सम्मिश्र संख्याएं', [
        q('The value of sin²θ + cos²θ is always?', 'sin²θ + cos²θ का मान सदैव क्या होता है?', [
          ['0', '0'], ['1', '1'], ['2', '2'], ['θ', 'θ'],
        ], 1),
        q('The general form of a complex number is?', 'सम्मिश्र संख्या का सामान्य रूप क्या है?', [
          ['a + bi', 'a + bi'], ['a - b', 'a - b'], ['a/b', 'a/b'], ['a²+b²', 'a²+b²'],
        ], 0),
        q('The value of i² (iota squared) is?', 'i² (आयोटा वर्ग) का मान क्या है?', [
          ['1', '1'], ['-1', '-1'], ['0', '0'], ['i', 'i'],
        ], 1),
        q('One radian equals approximately how many degrees?', 'एक रेडियन लगभग कितनी डिग्री के बराबर होता है?', [
          ['57.3°', '57.3°'], ['90°', '90°'], ['180°', '180°'], ['45°', '45°'],
        ], 0),
        q('The modulus of a complex number a + bi is?', 'सम्मिश्र संख्या a + bi का मापांक क्या है?', [
          ['a + b', 'a + b'], ['√(a² + b²)', '√(a² + b²)'], ['a - b', 'a - b'], ['ab', 'ab'],
        ], 1),
      ]),
      ch('sequences-permutations', 'Sequences, Series & Permutations', 'अनुक्रम, श्रेणी और क्रमचय', [
        q('The number of ways to arrange 3 distinct objects is?', '3 भिन्न वस्तुओं को व्यवस्थित करने के तरीकों की संख्या क्या है?', [
          ['3', '3'], ['6', '6'], ['9', '9'], ['12', '12'],
        ], 1),
        q('In an arithmetic progression, the difference between consecutive terms is?', 'समांतर श्रेणी में क्रमागत पदों के बीच अंतर कैसा होता है?', [
          ['Constant', 'स्थिर'], ['Variable', 'परिवर्तनशील'], ['Always zero', 'सदैव शून्य'], ['Always negative', 'सदैव ऋणात्मक'],
        ], 0),
        q('The sum of the first n natural numbers is?', 'प्रथम n प्राकृत संख्याओं का योग क्या है?', [
          ['n(n+1)/2', 'n(n+1)/2'], ['n²', 'n²'], ['n(n-1)', 'n(n-1)'], ['2n', '2n'],
        ], 0),
        q('nCr represents?', 'nCr किसे दर्शाता है?', [
          ['Permutations', 'क्रमचय'], ['Combinations', 'संचय'], ['Sequences', 'अनुक्रम'], ['Series sum', 'श्रेणी योग'],
        ], 1),
        q('A geometric progression has a constant?', 'गुणोत्तर श्रेणी में स्थिर क्या होता है?', [
          ['Common difference', 'सार्व अंतर'], ['Common ratio', 'सार्व अनुपात'], ['First term only', 'केवल प्रथम पद'], ['Sum', 'योग'],
        ], 1),
      ]),
    ],
  },

  // ══════════════════════════ Class 12 ══════════════════════════
  {
    classLevel: 'Class 12',
    subject: 'Science',
    chapters: [
      ch('electrostatics-current', 'Electrostatics & Current Electricity', 'स्थिरवैद्युतिकी और धारा विद्युत', [
        q('The SI unit of electric charge is?', 'विद्युत आवेश का SI मात्रक क्या है?', [
          ['Coulomb', 'कूलॉम'], ['Ampere', 'एम्पियर'], ['Farad', 'फैराड'], ['Ohm', 'ओम'],
        ], 0),
        q("Lenz's law is a consequence of the conservation of?", 'लेंज का नियम किसके संरक्षण का परिणाम है?', [
          ['Charge', 'आवेश'], ['Energy', 'ऊर्जा'], ['Momentum', 'संवेग'], ['Mass', 'द्रव्यमान'],
        ], 1),
        q("Coulomb's law describes the force between two?", 'कूलॉम का नियम दो किनके बीच के बल का वर्णन करता है?', [
          ['Masses', 'द्रव्यमान'], ['Point charges', 'बिंदु आवेश'], ['Magnets', 'चुंबक'], ['Currents', 'धाराएं'],
        ], 1),
        q('The capacitance unit Farad is named after?', 'धारिता की इकाई फैराड किसके नाम पर रखी गई है?', [
          ['Faraday', 'फैराडे'], ['Ohm', 'ओम'], ['Ampere', 'एम्पियर'], ['Volta', 'वोल्टा'],
        ], 0),
        q('Resistivity of a material depends on?', 'किसी पदार्थ की प्रतिरोधकता किस पर निर्भर करती है?', [
          ['Length only', 'केवल लंबाई'], ['Nature of the material', 'पदार्थ की प्रकृति'], ['Area only', 'केवल क्षेत्रफल'], ['Shape only', 'केवल आकार'],
        ], 1),
      ]),
      ch('kinetics-bonding', 'Chemical Kinetics & Bonding', 'रासायनिक बलगतिकी और आबंधन', [
        q('Which type of bond is formed by sharing of electron pairs?', 'इलेक्ट्रॉन युग्मों को साझा करके कौन सा बंधन बनता है?', [
          ['Ionic bond', 'आयनिक बंधन'], ['Covalent bond', 'सहसंयोजक बंधन'], ['Metallic bond', 'धात्विक बंधन'], ['Hydrogen bond', 'हाइड्रोजन बंधन'],
        ], 1),
        q('The rate of a chemical reaction generally increases with?', 'रासायनिक अभिक्रिया की दर सामान्यतः किसके साथ बढ़ती है?', [
          ['Decreasing temperature', 'तापमान घटने से'], ['Increasing temperature', 'तापमान बढ़ने से'], ['Removing catalyst', 'उत्प्रेरक हटाने से'], ['Decreasing concentration', 'सांद्रता घटने से'],
        ], 1),
        q('A catalyst works by?', 'उत्प्रेरक कैसे कार्य करता है?', [
          ['Increasing activation energy', 'सक्रियण ऊर्जा बढ़ाकर'], ['Lowering activation energy', 'सक्रियण ऊर्जा घटाकर'], ['Consuming reactants', 'अभिकारकों का उपभोग करके'], ['Changing products', 'उत्पाद बदलकर'],
        ], 1),
        q('Order of reaction is determined by?', 'अभिक्रिया की कोटि किससे निर्धारित होती है?', [
          ['The balanced equation', 'संतुलित समीकरण से'], ['Experimental data', 'प्रायोगिक आंकड़ों से'], ['Guessing', 'अनुमान से'], ['Temperature only', 'केवल तापमान से'],
        ], 1),
        q('sp3 hybridisation results in what molecular shape?', 'sp3 संकरण से कौन सी आणविक आकृति बनती है?', [
          ['Linear', 'रैखिक'], ['Tetrahedral', 'चतुष्फलकीय'], ['Planar', 'समतलीय'], ['Bent', 'मुड़ी हुई'],
        ], 1),
      ]),
      ch('genetics-evolution-ecology', 'Genetics, Evolution & Ecology', 'आनुवंशिकी, विकास और पारिस्थितिकी', [
        q('DNA replication occurs during which phase of the cell cycle?', 'कोशिका चक्र के किस चरण में DNA प्रतिकृति होती है?', [
          ['G1', 'G1'], ['S phase', 'S चरण'], ['G2', 'G2'], ['M phase', 'M चरण'],
        ], 1),
        q("Mendel's law of independent assortment applies to?", 'मेंडल का स्वतंत्र अपव्यूहन नियम किस पर लागू होता है?', [
          ['One gene', 'एक जीन'], ['Two or more genes on different chromosomes', 'भिन्न गुणसूत्रों पर दो या अधिक जीन'], ['Only dominant genes', 'केवल प्रभावी जीन'], ['Only recessive genes', 'केवल अप्रभावी जीन'],
        ], 1),
        q('The theory of natural selection was proposed by?', 'प्राकृतिक चयन का सिद्धांत किसने प्रस्तावित किया?', [
          ['Mendel', 'मेंडल'], ['Darwin', 'डार्विन'], ['Lamarck', 'लैमार्क'], ['Watson', 'वॉटसन'],
        ], 1),
        q('A group of interbreeding organisms living in an area is called a?', 'किसी क्षेत्र में रहने वाले अंतःप्रजनन करने वाले जीवों के समूह को क्या कहते हैं?', [
          ['Community', 'समुदाय'], ['Population', 'समष्टि'], ['Ecosystem', 'पारिस्थितिकी तंत्र'], ['Biome', 'जैवोम'],
        ], 1),
        q('The flow of energy in an ecosystem is?', 'पारिस्थितिकी तंत्र में ऊर्जा का प्रवाह कैसा होता है?', [
          ['Cyclic', 'चक्रीय'], ['Unidirectional', 'एकदिशीय'], ['Random', 'यादृच्छिक'], ['Reversible', 'प्रतिवर्ती'],
        ], 1),
      ]),
    ],
  },
  {
    classLevel: 'Class 12',
    subject: 'Mathematics',
    chapters: [
      ch('relations-matrices', 'Relations, Functions & Matrices', 'संबंध, फलन और आव्यूह', [
        q('A matrix with equal rows and columns is called?', 'समान पंक्तियों और स्तंभों वाला आव्यूह क्या कहलाता है?', [
          ['Rectangular matrix', 'आयताकार आव्यूह'], ['Square matrix', 'वर्ग आव्यूह'], ['Null matrix', 'शून्य आव्यूह'], ['Row matrix', 'पंक्ति आव्यूह'],
        ], 1),
        q('A relation that is reflexive, symmetric and transitive is called?', 'जो संबंध स्वतुल्य, सममित और संक्रामक हो, वह क्या कहलाता है?', [
          ['Function', 'फलन'], ['Equivalence relation', 'तुल्यता संबंध'], ['Partial order', 'आंशिक क्रम'], ['Empty relation', 'रिक्त संबंध'],
        ], 1),
        q('The determinant of a 2×2 matrix [[a,b],[c,d]] is?', '2×2 आव्यूह [[a,b],[c,d]] का सारणिक क्या है?', [
          ['ad + bc', 'ad + bc'], ['ad - bc', 'ad - bc'], ['ac - bd', 'ac - bd'], ['a + d', 'a + d'],
        ], 1),
        q('A function that is both one-one and onto is called?', 'जो फलन एकैकी और आच्छादक दोनों हो, वह क्या कहलाता है?', [
          ['Injective only', 'केवल एकैकी'], ['Surjective only', 'केवल आच्छादक'], ['Bijective', 'द्विभाजक'], ['Constant', 'अचर'],
        ], 2),
        q('The identity matrix has what values on its main diagonal?', 'तत्समक आव्यूह के मुख्य विकर्ण पर कौन से मान होते हैं?', [
          ['0', '0'], ['1', '1'], ['-1', '-1'], ['Varies', 'भिन्न-भिन्न'],
        ], 1),
      ]),
      ch('calculus-differentiation', 'Calculus: Differentiation & Integration', 'कलन: अवकलन और समाकलन', [
        q('The derivative of sin(x) is?', 'sin(x) का अवकलज क्या है?', [
          ['cos(x)', 'cos(x)'], ['-cos(x)', '-cos(x)'], ['-sin(x)', '-sin(x)'], ['tan(x)', 'tan(x)'],
        ], 0),
        q('The integral of 1/x dx is?', '1/x dx का समाकलन क्या है?', [
          ['ln|x| + C', 'ln|x| + C'], ['x² + C', 'x² + C'], ['1/x² + C', '1/x² + C'], ['e^x + C', 'e^x + C'],
        ], 0),
        q('The derivative of a constant is?', 'किसी स्थिरांक का अवकलज क्या होता है?', [
          ['1', '1'], ['0', '0'], ['The constant itself', 'स्थिरांक स्वयं'], ['Infinity', 'अनंत'],
        ], 1),
        q('The derivative of x^n is?', 'x^n का अवकलज क्या है?', [
          ['nx^(n-1)', 'nx^(n-1)'], ['x^(n-1)', 'x^(n-1)'], ['nx^n', 'nx^n'], ['x^n / n', 'x^n / n'],
        ], 0),
        q('A definite integral gives the?', 'एक निश्चित समाकल क्या देता है?', [
          ['Slope of a curve', 'वक्र की प्रवणता'], ['Area under a curve', 'वक्र के नीचे का क्षेत्रफल'], ['A general function', 'एक सामान्य फलन'], ['A derivative', 'एक अवकलज'],
        ], 1),
      ]),
      ch('probability-vectors', 'Probability & Vectors', 'प्रायिकता और सदिश', [
        q('Two events are independent if?', 'दो घटनाएं स्वतंत्र होती हैं यदि?', [
          ['P(A∩B) = P(A)+P(B)', 'P(A∩B) = P(A)+P(B)'],
          ['P(A∩B) = P(A)·P(B)', 'P(A∩B) = P(A)·P(B)'],
          ['P(A)=P(B)', 'P(A)=P(B)'],
          ['P(A∪B) = 1', 'P(A∪B) = 1'],
        ], 1),
        q('A vector has both magnitude and?', 'एक सदिश में परिमाण के साथ और क्या होता है?', [
          ['Direction', 'दिशा'], ['Mass', 'द्रव्यमान'], ['Volume', 'आयतन'], ['Energy', 'ऊर्जा'],
        ], 0),
        q('The dot product of two perpendicular vectors is?', 'दो लंबवत सदिशों का बिंदु गुणनफल क्या होता है?', [
          ['1', '1'], ['0', '0'], ['-1', '-1'], ['Undefined', 'अपरिभाषित'],
        ], 1),
        q('Conditional probability P(A|B) is defined as?', 'सशर्त प्रायिकता P(A|B) को कैसे परिभाषित किया जाता है?', [
          ['P(A∩B)/P(B)', 'P(A∩B)/P(B)'], ['P(A)+P(B)', 'P(A)+P(B)'], ['P(A)/P(B)', 'P(A)/P(B)'], ['P(A)·P(B)', 'P(A)·P(B)'],
        ], 0),
        q('The magnitude of a unit vector is always?', 'इकाई सदिश का परिमाण सदैव क्या होता है?', [
          ['0', '0'], ['1', '1'], ['-1', '-1'], ['Variable', 'परिवर्तनशील'],
        ], 1),
      ]),
    ],
  },
]

export function quizFor(classLevel: string, subject: QuizSubject): Quiz | undefined {
  return QUIZZES.find((qz) => qz.classLevel === classLevel && qz.subject === subject)
}

export function chaptersFor(classLevel: string, subject: QuizSubject): QuizChapter[] {
  return quizFor(classLevel, subject)?.chapters ?? []
}

export function chapterQuestions(classLevel: string, subject: QuizSubject, chapterId: string): QuizChapter | undefined {
  return chaptersFor(classLevel, subject).find((c) => c.id === chapterId)
}

export function classesWithQuizzes(): string[] {
  return Array.from(new Set(QUIZZES.map((qz) => qz.classLevel)))
}
