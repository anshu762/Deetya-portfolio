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
    "I'm in my final year of the IB Diploma at Invictus International School in Amritsar. I do psychology research, run Project Nazariya with communities across the city, and dance classical Kathak and Bharatanatyam.",
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
      "I study why the same task feels easy for one person and impossible for another. My work covers ADHD, executive function, and attention across four projects.",
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
      "I built a cheap flicker detector and wearable motion tracker to find out if invisible LED pulse patterns actually make students fidget more.",
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
      "Nazariya started with a question: who does this space actually work for? I've adapted one framework for parks, police stations, factory floors and classrooms in Amritsar.",
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
    "My research started with one question: why does the same classroom feel manageable to one student and overwhelming to another? I've been working through that question since grade 9.",
  items: [
    {
      id: "adhd-triad",
      title: "The ADHD Triad",
      role: "Lead Investigator — IRIS National Fair 2026",
      periodOrGrade: "Grades 9–12 · Developmental Neuropsychology",
      description:
        "I ran this study independently with 40 students, asking how executive function, classroom behaviour and home environment together predict functional impairment in ADHD. I chose every measure, administered every Stroop session myself, did the analysis, and built the diagnostic model around ICD-11.",
      findings:
        "Classrooms that added visual schedules, task chunking and consistent reinforcement saw impulsivity drop by 37%. The study placed top 3 in Behavioural Sciences at IRIS 2026, and I received the APA Special Award — given to one student nationally.",
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
        "Over 80 hours I used R and Biblioshiny to map which 100 papers have shaped ADHD and working memory research most, then co-authored a synthesis poster with students from Georgia State, UConn and Trinity. I presented at the ThinkNeuro symposium and earned a distinction in R and bibliometrics.",
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
        "Does framing behaviour as 'brain-based' change how people judge an offender? I synthesised 21 papers and ran 6,000 Monte Carlo simulations across four outcomes to design this study under mentorship at GNDU's law department.",
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
        "I sat in on sessions with a licensed psychologist at Mind Detox, then worked through each one in supervision — building a habit of biopsychosocial thinking and learning where the ethical hard calls actually show up in practice. Certified by the Counsellors Council of India.",
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
        "NeuroSphere and USC Neuro Scholars run weekly journal clubs with researchers globally. I read and critique papers connecting brain, cognition and behaviour, and ask questions directly to researchers at their talks.",
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
    "Most cheap LED bulbs flicker at frequencies the eye can't follow, but the nervous system might. I built an $11 flicker detector and a wearable that tracks fidgeting to see whether that invisible pattern actually shows up in body movement.",
  researchResult:
    "Of 44 students with ADHD or autistic traits, 39 fidgeted more under flickering light.",
  impact:
    "The results were clear enough that I wrote a set of flicker-safe lighting guidelines that schools could actually apply.",
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
    "Nazariya's premise is simple: a lot of public spaces aren't built for the range of ways people actually think, learn and communicate. I wanted to change that without asking anyone to justify why they needed it.",
  role: "Founder & Behavioural Design Strategist — Grades 11–12",
  location: "Amritsar, Punjab",
  method: "Listen, notice the barrier, try one change, ask again.",
  coreExplanation:
    "I built one framework and adapted it for every space, so teachers, supervisors and police officers are all working from the same logic. The core insight is straightforward: stress and noise drain working memory before anything else has a chance to happen. Nazariya's tools give some of that capacity back — a visible next step, instructions in short pieces, a way to signal 'I need a moment' without having to explain why.",
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
        "A police station is one of the highest-stress environments most people ever enter. When someone is overwhelmed, they can easily seem uncooperative — even when they're not. I designed communication tools so visitors could point to what they needed rather than explain it, and ran awareness sessions with the officers so they knew how to use what was now on the wall.",
      highlights: [
        {
          title: "Non-Verbal AAC Pointing Boards",
          desc: "Visual icons allowing distressed or overwhelmed citizens to indicate urgent needs without verbal speech.",
        },
        {
          title: "Officer Sensitisation Training",
          desc: "Briefed duty officers and staff to identify cognitive freeze, sensory shutdown, and anxiety cues during inquiry.",
        },
      ],
      commendation:
        "Official institutional commendation received from Inspector Shaminder Singh, SHO, Police Station Majitha Road (Punjab Police).",
      metrics: [
        { value: "17 Pages", label: "Protocol Handbook" },
        { value: "3 Languages", label: "Punjabi, Hindi, English" },
        { value: "Punjab Police", label: "Official Partner" },
      ],
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
        "On a factory floor, noise, glare and constant interruption can make it genuinely hard to concentrate — not because of the person, but because of the environment. Each load card names one demand and removes it from working memory. The handbook teaches supervisors to demonstrate instead of explain, and to look rather than ask 'do you understand?'",
      highlights: [
        {
          title: "10 Tactile Load Cards",
          desc: "Mounted visual step-by-step checklists at high-noise industrial workstations to prevent working memory slips.",
        },
        {
          title: "Demonstrate, Don't Interrogate",
          desc: "Supervisor workflow replacing abstract verbal questioning with direct observable task checkpoints.",
        },
      ],
      commendation:
        "Piloted across manufacturing assembly lines in Amritsar with participatory feedback loops from line operators.",
      metrics: [
        { value: "17 Pages", label: "Supervisor Handbook" },
        { value: "10 Cards", label: "Workstation Load Aids" },
        { value: "Amritsar Hub", label: "Industrial Facilities" },
      ],
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
        "A student who looks careless or slow is often just overloaded. The K–12 handbook, aligned with PRASHAST, gives teachers practical ways to reduce cognitive and sensory demand without labelling or diagnosing anyone. I briefed both teachers and parents, then gave students questionnaires to find out what actually makes learning feel easier for them.",
      highlights: [
        {
          title: "PRASHAST Screening Alignment",
          desc: "Classroom task adjustments aligned with Department of School Education disability screening standards.",
        },
        {
          title: "Sensory Demand Questionnaires",
          desc: "Participatory student surveys discovering specific environmental triggers (flickering glare, ambient echo).",
        },
      ],
      commendation:
        "Comprehensive K–12 teacher reference deployed across regional classrooms to prevent student cognitive fatigue.",
      metrics: [
        { value: "27 Pages", label: "Teacher Handbook" },
        { value: "PRASHAST", label: "Framework Aligned" },
        { value: "Regional K–12", label: "Classrooms Piloted" },
      ],
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
        "I ran eight workshops at IBADAT Special School with 25 student artists across 12 developmental conditions, then chose one piece per month for a 2027 Punjabi-English calendar. Each page pairs the artwork with one practical inclusion tip — no diagnosis mentioned, no labels used. 500 copies went to schools, clinics and families across Amritsar.",
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
        "As Head Girl I designed and ran five wellbeing programmes for everyone from grade 1 to grade 12 — and their families. One of them sets up 'art corners' where younger kids can take a quiet drawing break when they're overwhelmed. Counsellor visits went up 31%, which to me means help-seeking stopped being something to hide.",
      additionalNote:
        "Designated Student Monitor for Tobacco-Free Educational Institution (ToFEI) compliance & school-wide student advocacy.",
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
      "I use abhinaya — the expressive storytelling dimension of classical Indian dance — to build performances that actually engage with mental health myths rather than avoid them. They've been staged for audiences between 1,000 and 1,200 people. I also teach a free weekly class, because I think movement should be accessible.",
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
