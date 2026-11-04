export interface Artwork {
  id: string;
  title: string;
  medium: string;
  category: "watercolour" | "pastel" | "graphite";
  image: string;
  width: number;
  height: number;
  aspect: "portrait" | "landscape" | "square";
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image: string;
  description: string;
}

export interface RecommendationLetter {
  id: string;
  author: string;
  role: string;
  organization: string;
  date: string;
  image: string;
  summary: string;
  quote: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  role: string;
  periodOrGrade: string;
  organization?: string;
  description: string;
  findings?: string;
  keyStats: { label: string; value: string }[];
  judgesOrMentors?: string;
  images?: string[];
  tags: string[];
}

export interface Honour {
  id: string;
  title: string;
  details: string;
  year?: string;
  featured?: boolean;
  certificateImage?: string;
}

export const SITE_METADATA = {
  name: "Deetya Behl",
  title: "Deetya Behl | Psychology Researcher, Founder of Project Nazariya & Classical Dancer",
  description:
    "Portfolio of Deetya Behl — IB Diploma student, psychology researcher (IRIS APA Special Award), founder of Project Nazariya, FlickerScope creator, and classical dancer.",
  url: "https://deetyabehl.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/deetyabehl",
    email: "deetya.behl@invictus.edu.in", // Placeholder: update with your preferred contact email
    location: "Amritsar, Punjab, India",
    school: "Invictus International School, Amritsar",
  },
};

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: "Deetya Behl",
  subtitle:
    "IB Diploma student at Invictus International School, Amritsar. Psychology researcher, founder of Project Nazariya, classical dancer.",
  centralQuestion:
    "When someone struggles, is it the brain, the task, or the room around them?",
  supportingParagraph:
    "Almost everything I do comes back to this question. My research looks at the brain, my tools look at the task, and my community work looks at the room.",
  recognitionBadge:
    "At Harvard for the Crimson Global Business Competition",
  profileImage: "/images/hero/profile.jpg",
  pillars: [
    { label: "The Brain", subtitle: "Cognitive Research", anchor: "#research" },
    { label: "The Task", subtitle: "FlickerScope Tools", anchor: "#tools" },
    { label: "The Room", subtitle: "Nazariya Environments", anchor: "#environments" },
  ],
};

export const THREE_THEMES = [
  {
    id: "brain",
    pillarNumber: "01",
    theme: "The brain",
    title: "Research",
    description:
      "ADHD, executive function and attention: IRIS National Fair, ThinkNeuro, GNDU, Mind Detox.",
    anchor: "#research",
    color: "accent-rose",
    badge: "Cognitive Science",
    highlight: "APA Special Award · Top 3 IRIS",
  },
  {
    id: "task",
    pillarNumber: "02",
    theme: "The task",
    title: "Tools",
    description:
      "FlickerScope, an $11 wearable that links LED flicker to restlessness.",
    anchor: "#tools",
    color: "accent-terracotta",
    badge: "Hardware & Prototype",
    highlight: "$11 Build Cost · 39/44 Impact",
  },
  {
    id: "room",
    pillarNumber: "03",
    theme: "The room",
    title: "Environments",
    description:
      "Project Nazariya: changing parks, police stations, workplaces and classrooms.",
    anchor: "#environments",
    color: "accent-sage",
    badge: "Inclusive Spatial Design",
    highlight: "800+ Families · 8+ Public Spaces",
  },
];

export const RESEARCH_CONTENT: {
  sectionLabel: string;
  sectionTitle: string;
  intro: string;
  items: ResearchItem[];
} = {
  sectionLabel: "The brain",
  sectionTitle: "Research",
  intro:
    "I study why the same task is easy for one person and exhausting for another, starting with ADHD and executive function.",
  items: [
    {
      id: "adhd-triad",
      title: "The ADHD Triad",
      role: "Lead Investigator — IRIS National Fair 2026",
      periodOrGrade: "Grades 9–12 · Developmental Neuropsychology",
      description:
        "An independent study of 40 students asking how executive function, classroom behaviour and home environment together predict functional impairment in ADHD. I chose the measures, ran every Stroop session and did the analysis, then built a model grounded in ICD-11.",
      findings:
        "Classrooms that brought in visual schedules, task chunking and consistent reinforcement saw impulsivity fall. The project placed in the top 3 for Behavioural Sciences, and I was the sole recipient of the American Psychological Association's Special Award for Research.",
      keyStats: [
        { label: "IRIS 2026", value: "Top 3 Behavioural Sciences" },
        { label: "Impulsivity reduction", value: "37% with routines" },
        { label: "American Psychological Association", value: "Special Award Sole Recipient" },
      ],
      judgesOrMentors:
        "Judged by Dr. Suniti Yadav (University of Delhi, formerly ICMR), Dr. Sultan Ahmed Ismail, and Dr. Shubha Tripathi.",
      images: [
        "/images/projects/iris-1.jpg",
        "/images/projects/iris-2.jpg",
        "/images/projects/iris-3.jpg",
      ],
      tags: ["ADHD", "Stroop Effect", "ICD-11", "Executive Function", "IRIS National Fair"],
    },
    {
      id: "thinkneuro",
      title: "Mapping 100 ADHD Studies",
      role: "Research Analyst & Co-author — ThinkNeuro SRIP",
      periodOrGrade: "Summer 2026 · 80 hours of neuroscience and R",
      organization: "ThinkNeuro Summer Research Internship Program",
      description:
        "Using R and Biblioshiny, I mapped citation trends across the 100 most-cited studies on ADHD, working memory and executive function, and co-authored a poster synthesising 43 papers with students from Georgia State, UConn and Trinity. I presented it at the ThinkNeuro symposium and earned distinction in R and bibliometrics.",
      keyStats: [
        { label: "Neuroscience & R", value: "80 Hours" },
        { label: "Citation mapping", value: "Top 100 Studies" },
        { label: "Paper synthesis", value: "43 Papers Co-authored" },
      ],
      images: [
        "/images/projects/thinkneuro-1.jpg",
        "/images/projects/thinkneuro-2.jpg",
      ],
      tags: ["Bibliometrics", "R Programming", "Biblioshiny", "Citation Networks"],
    },
    {
      id: "gndu",
      title: "Brain-based Framing and Blame",
      role: "Student Researcher & Manuscript Author",
      organization: "Department of Laws, Guru Nanak Dev University (GNDU)",
      periodOrGrade: "Mentored Research Project",
      description:
        "A mentored study design asking whether explaining behaviour in terms of the brain changes how people assign blame and stigma to offenders. I synthesised 21 studies and ran 6,000 Monte Carlo simulations across 4 outcomes to plan the study.",
      keyStats: [
        { label: "Studies synthesised", value: "21 Studies" },
        { label: "Monte Carlo simulations", value: "6,000 Iterations" },
        { label: "Outcomes modelled", value: "4 Distinct Outcomes" },
      ],
      tags: ["Neuro-jurisprudence", "Monte Carlo", "Stigma Reduction", "Cognitive Bias"],
    },
    {
      id: "mind-detox",
      title: "Inside the Therapy Room",
      role: "Pre-professional Clinical Psychology Trainee — Mind Detox",
      periodOrGrade: "Supervised Clinical Traineeship",
      organization: "Mind Detox",
      description:
        "Shadowed a licensed psychologist in therapy sessions and analysed them in supervision, building active listening, biopsychosocial formulation and ethics skills. Certified by the Counsellors Council of India.",
      keyStats: [
        { label: "Accreditation", value: "Counsellors Council of India" },
        { label: "Core focus", value: "Biopsychosocial Formulation" },
      ],
      tags: ["Clinical Practice", "CCI Certified", "Biopsychosocial", "Active Listening"],
    },
    {
      id: "neurosphere",
      title: "Journal Clubs and Expert Talks",
      role: "Community Scholar — NeuroSphere · USC Neuro Scholars",
      periodOrGrade: "Global Academic Network",
      organization: "NeuroSphere · USC Neuro Scholars",
      description:
        "I critique studies linking brain, cognition, behaviour and mental health with a global network of more than 2,500 members, and question researchers at live talks.",
      keyStats: [
        { label: "Global network", value: "2,500+ Members" },
        { label: "Focus areas", value: "Cognition & Behaviour" },
      ],
      tags: ["USC Scholars", "NeuroSphere", "Peer Review", "Scientific Discourse"],
    },
  ],
};

export const TOOLS_CONTENT = {
  sectionLabel: "The task",
  sectionTitle: "Tools",
  projectName: "FlickerScope",
  role: "Wearable-tech engineer & Principal Investigator",
  headline: "FlickerScope: can a light bulb make you fidget?",
  description:
    "Cheap LED bulbs flicker faster than the eye can see. I built an $11 flicker detector and a wearable motion tracker to test whether that hidden flicker shows up as restlessness.",
  researchResult:
    "Of 44 students with ADHD or autistic traits, 39 fidgeted more under flickering light.",
  impact:
    "From the results I drafted flicker-safe lighting rules for schools.",
  metrics: [
    { value: "$11", label: "Total build cost", detail: "Accessible open hardware design" },
    { value: "39 / 44", label: "Fidgeted more under flicker", detail: "Statistically verified response" },
    { value: "Classroom Rules", label: "Drafted for schools", detail: "Actionable institutional policy" },
  ],
  image: "/images/projects/flickerscope.jpg",
  schematicPoints: [
    { title: "Optical Sensor", desc: "Measures sub-perceptual pulse-width modulation frequencies." },
    { title: "Wearable IMU", desc: "Tracks micro-fidget movements and restlessness metrics." },
    { title: "Low-Cost Microcontroller", desc: "Keeps total production under eleven dollars." },
  ],
};

export const ENVIRONMENTS_CONTENT = {
  sectionLabel: "The room",
  sectionTitle: "Project Nazariya",
  brandLogo: "/images/projects/project-nazariya.jpg",
  tagline: "One city, many ways of experiencing it.",
  description:
    "Nazariya changes everyday spaces so that people who think, learn and communicate differently can use them without having to explain themselves.",
  role: "Founder & Behavioural Design Strategist — Grades 11–12",
  location: "Amritsar, Punjab",
  method: "Listen, notice the barrier, try one change, ask again.",
  coreExplanation:
    "I developed one framework and adapted it for parks, classrooms, factory floors and police stations, so teachers, supervisors and officers share the same method. Stress and noise use up working memory and attention. Nazariya's tools give some of that back: a visible next step, instructions broken into short steps, and a way to ask for help without needing words or a diagnosis.",
  keyStatistics: [
    { value: "800+", label: "Families surveyed across Amritsar" },
    { value: "8+", label: "Public spaces transformed (incl. Company Bagh)" },
    { value: "3", label: "Languages: English, Hindi, Punjabi" },
    { value: "61", label: "Pages across three published handbooks" },
  ],
  interventions: [
    { title: "AAC Communication Aids", desc: "Non-verbal communication cards for sensory overload." },
    { title: "Now / Next Boards", desc: "Visual structure easing procedural and temporal anxiety." },
    { title: "Show, Break Down, Check", desc: "Instruction framework reducing working memory fatigue." },
    { title: "Anonymous Barrier Feedback", desc: "Direct participatory feedback loops for public visitors." },
  ],
  spaces: [
    {
      id: "police-stations",
      title: "Designed for a Stressful Room",
      subtitle: "Police Stations",
      locationDate: "Police Station Majitha Road, Amritsar — October 2026",
      details: ["17-page handbook", "Multilingual Posters", "Communication cards"],
      description:
        "Stress shrinks working memory, so an overloaded person can look evasive or uncooperative. Visitors can point to what they need — 'one step at a time', 'give me a moment' — instead of having to explain it under pressure, and Now / Next boards ease the anxiety of not knowing what happens next. I ran awareness workshops with the officers who use them.",
      images: [
        "/images/design/stress-free/design-stressful-handbook-1.jpg",
        "/images/design/stress-free/design-stressful-handbook-2.jpg",
        "/images/design/stress-free/design-stressful-handbook-3.jpg",
      ],
    },
    {
      id: "workplaces",
      title: "Same Workplace, Different Experiences",
      subtitle: "Factory Floors & Workplaces",
      locationDate: "Industrial Workplaces, Amritsar — 2026",
      details: ["17-page handbook", "Visual glare/noise poster", "10 practical load cards"],
      description:
        "Noise, glare and interruptions drain attention before work begins. The poster lets workers name these loads, and each card takes one demand off working memory. The handbook teaches supervisors to demonstrate, split work into short steps, and watch instead of asking 'do you understand?'",
      images: [
        "/images/experience/workplace-1.jpg",
        "/images/experience/workplace-2.jpg",
        "/images/experience/workplace-3.jpg",
        "/images/experience/workplace-4.jpg",
      ],
    },
    {
      id: "schools",
      title: "Adjust the Task, Not the Expectation",
      subtitle: "K–12 Classrooms",
      locationDate: "Amritsar & Regional Schools — 2025–2026",
      details: ["27-page K–12 teacher handbook", "PRASHAST aligned", "Student questionnaires"],
      description:
        "Students who seem careless or slow are often just overloaded. The handbook, aligned with PRASHAST, gives teachers classroom-ready ways to cut cognitive and sensory load without labelling anyone. I briefed teachers and parents, and used questionnaires to ask students what makes learning easier or harder.",
      images: [
        "/images/design/k12/k12-teacher-handbook-1.jpg",
        "/images/design/k12/k12-teacher-handbook-2.jpg",
      ],
    },
  ],
};

export const LEADERSHIP_CONTENT = {
  sectionLabel: "People",
  sectionTitle: "Community & Leadership",
  initiatives: [
    {
      id: "ibadat",
      organization: "IBADAT Special School",
      role: "Art Workshop Lead & Creative Curator",
      projectTitle: "A Year Through Their Eyes",
      gradeOrDate: "2025–2026",
      details: "8 workshops conducted with 25 student artists",
      description:
        "I co-created artwork with 25 students with 12 different developmental conditions, then curated one piece for each month of a Punjabi-English 2027 calendar. Each page pairs the art with a practical inclusion tip, and no diagnosis is disclosed. 500 copies went out across the city.",
      keyStats: [
        { label: "Student artists", value: "25 Students" },
        { label: "Conditions represented", value: "12 Conditions" },
        { label: "Calendars distributed", value: "500 Copies" },
      ],
      additionalNote: "Also spearheaded a Children's Day winter-wear drive at IBADAT, November 2025.",
      images: [
        "/images/art/workshops/art-workshop-1.jpg",
        "/images/art/workshops/art-workshop-2.jpg",
        "/images/art/workshops/art-workshop-3.jpg",
        "/images/art/workshops/art-workshop-4.jpg",
      ],
    },
    {
      id: "invictus",
      organization: "Invictus Student Body",
      role: "Head Girl: Student Wellbeing & Peer Advocacy",
      projectTitle: "Making Help-Seeking Routine",
      gradeOrDate: "Grade 12",
      details: "School-wide student governance & wellbeing advocacy",
      description:
        "I designed and launched five school-wide wellbeing programmes for more than 1,000 students from grades 1 to 12 and their families. Counsellor visits rose 31% as asking for help became normal. They include art corners where younger children can take a short drawing break when they need a pause. I also serve as a Tobacco-Free Educational Institution (ToFEI) Student Monitor.",
      keyStats: [
        { label: "Wellbeing programmes", value: "5 Programmes" },
        { label: "Students reached", value: "1,000+ Students" },
        { label: "Counsellor visits increase", value: "+31% Rise" },
      ],
      images: [
        "/images/leadership/head-girl-1.jpg",
        "/images/leadership/head-girl-2.jpg",
        "/images/leadership/head-girl-3.jpg",
      ],
    },
  ],
};

export const HONOURS_AWARDS: Honour[] = [
  {
    id: "apa-award",
    title: "APA Special Award for Research",
    details: "Sole recipient, IRIS National Fair 2026; Top 3 in Behavioural Sciences",
    year: "2026",
    featured: true,
  },
  {
    id: "ipsyo",
    title: "International Psychology Olympiad",
    details: "Higher Distinction — Appreciated for academic excellence in studies and performance",
    year: "2026",
    featured: true,
    certificateImage: "/images/recognition/certificates/honours-certificate-1.jpg",
  },
  {
    id: "harvard-quiz-bowl",
    title: "Harvard Crimson Global Quiz Bowl",
    details: "Honors Recipient, Biology — High School Category (G9–G12)",
    year: "2026",
    featured: true,
    certificateImage: "/images/recognition/certificates/honours-certificate-2.jpg",
  },
  {
    id: "harvard-business",
    title: "Harvard Crimson Business Competition",
    details: "Global Finalist — The only qualifying team from India; competed in person at Harvard University",
    year: "2026",
    featured: true,
  },
  {
    id: "sen-gupta",
    title: "Narendra Nath Sen Gupta Award for Psychological Science",
    details: "Awarded to one student across the entire school for outstanding psychological scientific inquiry",
    year: "2025–26",
    featured: true,
    certificateImage: "/images/recognition/certificates/honours-certificate-3.jpg",
  },
  {
    id: "ap-scholar",
    title: "AP Scholar with Distinction Award",
    details: "College Board — Score of 3 or higher on five or more exams, average 3.5+",
    year: "2026",
    featured: true,
    certificateImage: "/images/recognition/certificates/honours-certificate-4.jpg",
  },
  {
    id: "punjab-welfare",
    title: "Excellence in Community Welfare Award",
    details: "Presented by Sandeep Rishi, IAS, Chief Administrator of GMADA, Government of Punjab",
    year: "2025",
    featured: true,
  },
  {
    id: "power-pitch",
    title: "Young Entrepreneur of the Year, Power Pitch",
    details: "Winner 2023–24; National runner-up 2025–26",
    year: "2024–26",
  },
  {
    id: "duke-edinburgh",
    title: "Duke of Edinburgh's International Award",
    details: "Silver Award for leadership, community service, and personal challenge",
    year: "2025",
  },
  {
    id: "amc-10",
    title: "American Mathematics Competitions (AMC 10)",
    details: "School Rank 3 for mathematical problem solving",
    year: "2025",
  },
];

export const RECOMMENDATION_LETTERS: RecommendationLetter[] = [
  {
    id: "punjab-police",
    author: "Inspector Shaminder Singh",
    role: "SHO, Police Station Majitha Road",
    organization: "Punjab Police",
    date: "October 2026",
    image: "/images/recognition/lor/punjab-police-lor.jpg",
    summary:
      "Commendation for conducting mental health & neurodiversity awareness workshops, preparing trilingual handbooks, and deploying communication cards.",
    quote:
      "Her workshops emphasised the importance of patience, clear communication, and sensitivity... Her efforts reflect the valuable role young citizens can play in promoting awareness and responsible community engagement.",
  },
  {
    id: "former-cabinet-minister",
    author: "Anil Joshi",
    role: "Former Punjab Minister for Local Bodies & Medical Education",
    organization: "Member, Indian National Congress (Amritsar North)",
    date: "31 October 2026",
    image: "/images/recognition/lor/former-cabinet-minister-lor.jpg",
    summary:
      "Letter of Recognition and Commendation for youth-led scientific innovation and human-centred community development through Nazariya and FlickerScope.",
    quote:
      "Rather than pursuing the prototype as an isolated technical exercise, she has connected it to a broader effort to reconsider how existing environments can be made more responsive to different human needs.",
  },
  {
    id: "punjab-government",
    author: "Sandeep Rishi, IAS",
    role: "Chief Administrator, GMADA",
    organization: "Government of Punjab",
    date: "30 October 2025",
    image: "/images/recognition/lor/government-of-punjab-lor.jpg",
    summary:
      "Official Letter of Excellence presenting the Community Welfare Award in recognition of steadfast commitment to public service.",
    quote:
      "Deetya has demonstrated commendable initiative, genuine compassion and a strong sense of civic responsibility. Her thoughtful judgment, dependable leadership and respectful engagement reflect genuine sincerity.",
  },
];

export const ART_DANCE_CONTENT = {
  sectionLabel: "Off the clock",
  sectionTitle: "Art & Dance",
  intro:
    "Drawing is how I slow down and pay attention. Classical dance asks for the opposite kind of attention: rhythm, posture and expression all held at once.",
  dance: {
    role: "Choreographer, Performer & Volunteer Teacher",
    styles: "Kathak & Bharatanatyam",
    details: "10 years of formal classical training",
    projectTitle: "Dance as Psychology Outreach",
    description:
      "I choreograph story dances that use abhinaya, classical expressive acting, to take apart myths about mental health. They have been staged at several venues for audiences of 1,000 to 1,200, and I teach free weekly classes.",
    stats: [
      { label: "Formal Training", value: "10 Years" },
      { label: "Largest Audience", value: "1,200 Spectators" },
      { label: "Weekly Classes", value: "Free & Accessible" },
    ],
    images: [
      "/images/art/dance/art-dance-1.jpg",
      "/images/art/dance/art-dance-2.jpg",
      "/images/art/dance/art-dance-3.jpg",
    ],
  },
  artworks: [
    {
      id: "blue-door",
      title: "Blue door",
      medium: "Watercolour & ink",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-1.jpg",
      width: 693,
      height: 972,
      aspect: "portrait",
    },
    {
      id: "tea",
      title: "Tea",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-2.jpg",
      width: 720,
      height: 870,
      aspect: "portrait",
    },
    {
      id: "ladybird",
      title: "Ladybird",
      medium: "Pastel",
      category: "pastel",
      image: "/images/art/watercolour/watercolour-3.jpg",
      width: 720,
      height: 1080,
      aspect: "portrait",
    },
    {
      id: "terracotta-pots",
      title: "Terracotta pots",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-4.jpg",
      width: 645,
      height: 975,
      aspect: "portrait",
    },
    {
      id: "orange",
      title: "Orange",
      medium: "Pastel",
      category: "pastel",
      image: "/images/art/watercolour/watercolour-5.jpg",
      width: 1179,
      height: 1166,
      aspect: "landscape",
    },
    {
      id: "blossom-by-the-water",
      title: "Blossom by the water",
      medium: "Pastel",
      category: "pastel",
      image: "/images/art/watercolour/watercolour-6.jpg",
      width: 1179,
      height: 1152,
      aspect: "landscape",
    },
    {
      id: "auto-rickshaw",
      title: "Auto-rickshaw",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-7.jpg",
      width: 1185,
      height: 685,
      aspect: "landscape",
    },
    {
      id: "eye-studies",
      title: "Eye studies",
      medium: "Graphite",
      category: "graphite",
      image: "/images/art/watercolour/watercolour-8.jpg",
      width: 970,
      height: 490,
      aspect: "landscape",
    },
    {
      id: "lily-with-water-drops",
      title: "Lily with water drops",
      medium: "Graphite",
      category: "graphite",
      image: "/images/art/watercolour/watercolour-9.jpg",
      width: 636,
      height: 923,
      aspect: "portrait",
    },
    {
      id: "ganesha",
      title: "Ganesha",
      medium: "Graphite",
      category: "graphite",
      image: "/images/art/watercolour/watercolour-10.jpg",
      width: 675,
      height: 995,
      aspect: "portrait",
    },
    {
      id: "iris-dragonfly",
      title: "Iris & dragonfly",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-11.jpg",
      width: 625,
      height: 1190,
      aspect: "portrait",
    },
    {
      id: "teapot-fruit",
      title: "Teapot with fruit",
      medium: "Pastel & Mixed Media", // As noted in requirements: medium to be confirmed
      category: "pastel",
      image: "/images/art/watercolour/watercolour-12.jpg",
      width: 705,
      height: 1060,
      aspect: "portrait",
    },
    {
      id: "carrots",
      title: "Carrots",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-13.jpg",
      width: 812,
      height: 1070,
      aspect: "portrait",
    },
    {
      id: "blueberries",
      title: "Blueberries",
      medium: "Watercolour",
      category: "watercolour",
      image: "/images/art/watercolour/watercolour-14.jpg",
      width: 630,
      height: 770,
      aspect: "portrait",
    },
  ] as Artwork[],
};

export const FOOTER_CONTENT = {
  name: "Deetya Behl",
  education: "Invictus International School, Amritsar",
  curriculum: "IB Diploma: Biology, Psychology, Mathematics AA (Higher Level)",
  linkedinUrl: "https://www.linkedin.com/in/deetyabehl",
  copyrightYear: 2026,
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Research", href: "#research" },
    { label: "Tools", href: "#tools" },
    { label: "Environments", href: "#environments" },
    { label: "Leadership", href: "#leadership" },
    { label: "Honours", href: "#honours" },
    { label: "Art & Dance", href: "#art" },
    { label: "Contact", href: "#contact" },
  ],
};
