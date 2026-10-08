/**
 * Central portfolio data — sourced from Akhil A. Kumar's current resume and public portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Akhil A Kumar',
  displayName: 'Akhil A Kumar',
  firstName: 'AKHIL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN AKHIL ORIGINAL',
  role: 'Associate Data Science Engineer',
  tagline: ['Generative AI', 'LLMs', 'RAG'],
  intro:
    "I am Akhil A Kumar, an Associate Data Science Engineer at Omnex Systems, where I design and develop AI/ML systems powered by LLMs, RAG pipelines, vector databases, and agent-based architectures. My work sits at the intersection of machine learning, generative AI, and practical product development for real-world business problems.",
  location: 'Alappuzha, Kerala, India',
  email: 'akhilajithkumar91@gmail.com',
  phone: '+91 9446087507',
  links: {
    linkedin: 'https://www.linkedin.com/in/akhil-a-kumar-357042258/',
    github: 'https://github.com/Akhilajithkumar2459',
  },
  resumePdf: '/assets/Akhil_A_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Akhil A Kumar',
  },
  interests: ['Machine Learning', 'Generative AI', 'LLMs', 'RAG', 'Computer Vision', 'NLP'],
};

export const education = [
  {
    school: 'Amrita Vishwa Vidyapeetham',
    place: 'Amritapuri',
    degree: 'M.Tech — Artificial Intelligence',
    period: 'August 2024 – June 2026',
    score: 'CGPA 9.0',
  },
  {
    school: 'College of Engineering Chengannur',
    place: 'Chengannur',
    degree: 'B.Tech — Electronics and Instrumentation Engineering',
    period: 'August 2018 – June 2022',
    score: 'Completed',
  },
];

export const experience = [
  {
    company: 'Omnex Systems',
    role: 'Associate Data Science Engineer',
    place: 'Kerala, India',
    period: 'Current',
    points: [
      'Work on AI/ML solutions involving LLMs, retrieval-augmented generation (RAG), vector databases, agent-based architectures, and intelligent automation.',
      'Build data-driven AI systems that solve real-world business problems with practical model deployment and product-oriented thinking.',
    ],
  },
  {
    company: 'Hut Labs',
    role: 'Research Intern',
    place: 'Research',
    period: 'Research Internship',
    points: [
      'Conducted research on motion forecasting for autonomous systems using deep learning trajectory prediction models.',
      'Worked on research-oriented AI problem solving with a focus on advanced modeling and system intelligence.',
    ],
  },
  {
    company: 'Pantech.AI',
    role: 'Deep Learning Intern',
    place: 'India',
    period: 'Internship',
    points: [
      'Built a hand sign language detector using computer vision and deep learning techniques.',
      'Strengthened hands-on experience in applying AI models to practical computer vision use cases.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'anime-recommendation',
    title: 'Anime Recommendation System',
    year: '2025',
    genre: 'ML • Recommendation • Data Science',
    logline: 'A recommendation model that suggests anime based on user preference patterns and similarity signals.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    build: [
      'Built a recommendation workflow that analyzes anime preferences and explores similarity-based ranking to suggest relevant content.',
      'Used structured data processing and ML heuristics to turn raw ratings into prediction-friendly features and recommendation outputs.',
    ],
    features: [
      'Preference-based recommendation logic',
      'Similarity and ranking approach',
      'Python workflow for AI-driven suggestions',
      'Data exploration and model evaluation',
    ],
    metrics: [
      { value: '1', label: 'public ML project' },
      { value: 'Python', label: 'core stack' },
      { value: 'AI', label: 'recommendation focus' },
      { value: 'GitHub', label: 'public portfolio' },
    ],
    github: 'https://github.com/Akhilajithkumar2459/Anime-Recommendation-',
    palette: { from: '#1b0f2d', via: '#6935b4', to: '#08070d', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'blogify-app',
    title: 'Blogify App',
    year: '2025',
    genre: 'Web • Product • Full-Stack',
    logline: 'A web application for creating and managing blog content with a simple publishing workflow.',
    stack: ['Python', 'Flask', 'Web App', 'Frontend'],
    build: [
      'Created a content-focused web app for creating, managing, and browsing blog content in a lightweight workflow.',
      'Worked across front-end and app logic to structure a user-friendly interface around writing and publishing posts.',
    ],
    features: [
      'Blog creation and content management',
      'Simple app-based publishing flow',
      'User-friendly interface',
      'Practical full-stack product design',
    ],
    metrics: [
      { value: '1', label: 'web app project' },
      { value: 'Python', label: 'backend core' },
      { value: 'CRUD', label: 'content workflow' },
      { value: 'GitHub', label: 'project portfolio' },
    ],
    github: 'https://github.com/Akhilajithkumar2459/Blogify-App',
    palette: { from: '#0d1f1f', via: '#0d7b69', to: '#060b0a', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommender System',
    year: '2025',
    genre: 'AI • Recommendation • Analytics',
    logline: 'A movie recommendation project focused on ranking and suggesting relevant titles from user and item patterns.',
    stack: ['Python', 'Scikit-learn', 'Recommendation Systems', 'Data Analysis'],
    build: [
      'Designed a movie recommendation system to rank and suggest titles using data-driven pattern analysis and model logic.',
      'Applied recommender-system thinking to build a practical project around user preferences and item similarity.',
    ],
    features: [
      'Movie suggestion engine',
      'Similarity-driven recommendation logic',
      'Data analysis for personalized ranking',
      'Python ML project workflow',
    ],
    metrics: [
      { value: '1', label: 'recommender project' },
      { value: 'ML', label: 'primary method' },
      { value: 'Python', label: 'implementation' },
      { value: 'GitHub', label: 'public project' },
    ],
    github: 'https://github.com/Akhilajithkumar2459/Movie-Recommender-system-Project',
    palette: { from: '#1b0f0b', via: '#8d4513', to: '#0a0907', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'co2-forecast',
    title: 'CO2 Emissions Prediction',
    year: '2025',
    genre: 'Data Science • Forecasting • Analytics',
    logline: 'A predictive analytics project studying CO2 emissions and environmental factor patterns across datasets.',
    stack: ['Python', 'Statistics', 'Forecasting', 'Data Science'],
    build: [
      'Analyzed emissions data to reveal relationships between major drivers and environmental output patterns.',
      'Built a forecasting-focused project using structured analysis and model evaluation for data-driven insights.',
    ],
    features: [
      'Environmental data analysis',
      'Predictive modeling',
      'Insights from structured dataset patterns',
      'Forecasting and analytics workflow',
    ],
    metrics: [
      { value: '1', label: 'forecasting project' },
      { value: 'Python', label: 'analysis stack' },
      { value: 'Data', label: 'driven decisions' },
      { value: 'GitHub', label: 'public project' },
    ],
    github: 'https://github.com/Akhilajithkumar2459/CO2-Emissions-prediction',
    palette: { from: '#081b1a', via: '#0f6460', to: '#060c0b', accent: '#4cc9ff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'github-portfolio',
    title: 'Public GitHub Portfolio',
    org: 'GitHub',
    detail: '53 public repositories covering machine learning, analytics, recommendation systems, and applied Python projects.',
    laurel: 'Public Work',
  },
  {
    id: 'recommendation-systems',
    title: 'Recommendation System Projects',
    org: 'AI Projects',
    detail: 'Built anime and movie recommendation workflows focused on similarity and preference-driven suggestions.',
    laurel: 'Recommender Models',
  },
  {
    id: 'forecasting',
    title: 'Forecasting & Analytics',
    org: 'Data Science',
    detail: 'Worked on environmental prediction, customer analytics, and time-series-oriented challenges using Python-based methods.',
    laurel: 'Prediction Work',
  },
  {
    id: 'web-projects',
    title: 'Web Product Projects',
    org: 'Product Work',
    detail: 'Created practical web experiences including a blog app and URL shortening project with usable product logic.',
    laurel: 'Web Apps',
  },
  {
    id: 'self-learning',
    title: 'Continuous Applied Learning',
    org: 'GitHub + Practice',
    detail: 'Built a steady stream of hands-on assignments and portfolio work across ML, data analysis, deep learning, and AI topics.',
    laurel: 'Learning Loop',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'GitHub', name: 'Machine Learning Practice', link: 'https://github.com/Akhilajithkumar2459/ML-Practice' },
  { issuer: 'GitHub', name: 'Generative AI Course', link: 'https://github.com/Akhilajithkumar2459/Generative_AI_Course' },
  { issuer: 'GitHub', name: 'Deep Learning Assignments', link: 'https://github.com/Akhilajithkumar2459/Deep_Learning-Assignments' },
  { issuer: 'GitHub', name: 'Recommendation System Assignment', link: 'https://github.com/Akhilajithkumar2459/Recommendation_system_Assignment' },
  { issuer: 'GitHub', name: 'Forecasting Assignment', link: 'https://github.com/Akhilajithkumar2459/Forecasting_Assignment' },
  { issuer: 'GitHub', name: 'Data Analysis Project', link: 'https://github.com/Akhilajithkumar2459/Data-Analysis-project' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python-first AI workflows',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    subtitle: 'Applied intelligence systems',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Generative AI', mono: 'GA' },
      { name: 'LLMs', mono: 'LL' },
    ],
  },
  {
    id: 'mlops',
    title: 'RAG & Agents',
    subtitle: 'Production AI architecture',
    skills: [
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Vector Databases', mono: 'Vd' },
    ],
  },
  {
    id: 'vision',
    title: 'Vision & NLP',
    subtitle: 'Data and perception',
    skills: [
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'AI Agents', mono: 'Ag' },
      { name: 'Data Analysis', mono: 'Da' },
    ],
  },
  {
    id: 'tools',
    title: 'Core Tools',
    subtitle: 'Practical applied workflows',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Power BI', mono: 'Pb' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Anime Recommendation System', 'CO2 Emissions Prediction', 'Blogify App', 'AI/ML Engineering'],
  SQL: ['Data Analysis project', 'Customer Segmentation Project'],
  C: ['Python + algorithmic practice'],
  Java: ['Core programming practice'],
  'Machine Learning': ['Anime Recommendation System', 'Movie Recommender System', 'CO2 Emissions Prediction'],
  'Deep Learning': ['ANN_Assignment', 'Customer_churn_ANN', 'Face-mask-Detection', 'Hand sign detection'],
  'Generative AI': ['LLM workflows', 'RAG-based systems', 'Agent architectures'],
  LLMs: ['LLM use cases', 'RAG systems', 'Intelligent automation'],
  RAG: ['Retrieval pipelines', 'Knowledge-grounded AI systems'],
  LangChain: ['LLM application development', 'RAG orchestration'],
  LangGraph: ['Agent-oriented application design', 'Execution workflows'],
  'Vector Databases': ['Semantic retrieval', 'RAG pipelines'],
  'Computer Vision': ['Face-mask-Detection', 'Hand_sign_Detection_Project', 'Autonomous systems research'],
  NLP: ['Text mining', 'Language-based AI systems', 'LLM interfaces'],
  'AI Agents': ['Agent-based architecture', 'Automation workflows'],
  Statistics: ['Basic-statistics-1', 'Basis_statistics2', 'Hypothesis-testing-Assignment'],
  Forecasting: ['CO2 Emissions Prediction', 'Forecasting_Assignment', 'Motion_forecasting_Dataset_'],
  Pandas: ['Data Analysis project', 'Customer Segmentation Project'],
  'Scikit-learn': ['Movie Recommender System', 'Diabetes-Prediction-Project-Healthcare-dataset-', 'Customer_churn_ANN'],
  'Power BI': ['HR-Analytics-project-using-power-BI'],
  'Recommendation Systems': ['Anime Recommendation System', 'Movie Recommender System'],
  'Data Analysis': ['Data-Analysis-project', 'Customer_Segmentation_Project'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Foundation',
    period: '2023 – 2024',
    synopsis: 'Started with statistics, assignments, and the basics of Python-driven analytical thinking.',
    episodes: [
      {
        code: 'A01 E01',
        title: 'Statistics & Basics',
        description: 'Worked through probability, regression, hypothesis testing, and core analytical assignments to build a stronger data foundation.',
        tags: ['Statistics', 'Python', 'Assignments'],
        runtime: '2023 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Machine Learning',
    period: '2024 – 2025',
    synopsis: 'Moved into supervised learning, deep learning, and practical predictive work across multiple domains.',
    episodes: [
      {
        code: 'A02 E01',
        title: 'Learning Models',
        description: 'Explored logistic regression, decision trees, random forests, clustering, ANN, and related machine learning techniques.',
        tags: ['ML', 'ANN', 'Classification'],
        runtime: '2024 – 2025',
        palette: violet,
      },
      {
        code: 'A02 E02',
        title: 'Prediction Work',
        description: 'Applied ML to projects including diabetes prediction, churn modeling, customer segmentation, and emissions forecasting.',
        tags: ['Prediction', 'Pandas', 'Scikit-learn'],
        runtime: 'Practise-driven',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Recommendation & Data Projects',
    period: '2025',
    synopsis: 'Built projects around user recommendations, content ranking, and structured data analysis with real-world use cases.',
    episodes: [
      {
        code: 'A03 E01',
        title: 'Anime Recommender',
        description: 'Built a recommendation model to surface anime suggestions based on preference and similarity patterns.',
        tags: ['Recommendation Systems', 'Python', 'AI'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'A03 E02',
        title: 'Movie Recommender',
        description: 'Extended the same idea to movie recommendation and ranking using data-driven logic and ML reasoning.',
        tags: ['Movie ML', 'Ranking', 'Analytics'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Web + Product Experiments',
    period: '2025 – Present',
    synopsis: 'Balanced analytics work with practical web and app projects to build more product-ready skills.',
    episodes: [
      {
        code: 'A04 E01',
        title: 'Blogify App',
        description: 'Built a content-oriented web application for writing and managing blog posts in a simple, usable workflow.',
        tags: ['Web App', 'Flask', 'Product'],
        runtime: '2025',
        palette: amber,
      },
      {
        code: 'A04 E02',
        title: 'URL Shortener',
        description: 'Created a compact project focused on link handling, URL transformation, and app logic.',
        tags: ['Web app', 'Python', 'Utility'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'A04 E03',
        title: 'Public Portfolio',
        description: 'Continued publishing work on GitHub, building a consistent trail of projects and experiments across data science and product thinking.',
        tags: ['GitHub', 'Portfolio', 'Learning'],
        runtime: 'Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Associate DS Engineer', detail: 'Working at Omnex Systems on AI/ML and intelligent automation', palette: amber },
  { label: 'Core strengths', title: 'LLMs + RAG', detail: 'Applied generative AI systems with retrieval and orchestration workflows', palette: crimson },
  { label: 'AI systems', title: 'Agent Architecture', detail: 'Building practical agent-based solutions and intelligent workflows', palette: ocean },
  { label: 'Research lens', title: 'Motion Forecasting', detail: 'Deep learning trajectory prediction for autonomous systems', palette: violet },
  { label: 'Vision work', title: 'Hand Sign Detection', detail: 'Computer vision-based sign language recognition project', palette: jade },
  { label: 'Project style', title: 'Real-world AI', detail: 'Applied models with product thinking, business value, and case-based learning', palette: amber },
  { label: 'AI scope', title: 'Machine + Deep Learning', detail: 'Strong foundation across ML, DL, and modern AI systems', palette: crimson },
  { label: 'Data analysis', title: 'ML + Analytics', detail: 'Analysis-driven decision support for data-rich product work', palette: ocean },
  { label: 'Research interest', title: 'NLP & LLMs', detail: 'Language models, retrieval, and intelligent interfaces', palette: jade },
  { label: 'Current mission', title: 'Build Useful AI', detail: 'Design solutions that go beyond experimentation into deployment', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Associate Data Science Engineer',
    lines: ['Akhil A Kumar', 'AI/ML, LLMs, RAG, and data-driven product development'],
    chips: ['Python', 'LLMs', 'RAG'],
  },
  {
    kicker: 'Current Work',
    title: 'Omnex Systems',
    lines: ['AI/ML solutions', 'LLMs • RAG pipelines • vector databases • agent systems'],
    chips: ['Generative AI', 'AI Agents', 'Automation'],
  },
  {
    kicker: 'Focus',
    title: 'Applied AI',
    lines: ['Machine learning • generative AI • intelligent automation', 'From research prototypes to practical product systems'],
  },
  {
    kicker: 'Projects',
    title: 'Public portfolio trail',
    lines: ['Anime Recommendation System', 'Movie Recommender System', 'CO2 Emissions Prediction', 'Blogify App'],
  },
  {
    kicker: 'Learned skills',
    title: 'Python-first toolkit',
    lines: ['Pandas • NumPy • Scikit-learn • SQL', 'Deep learning, computer vision, NLP, and LLM workflows'],
  },
  {
    kicker: 'Current direction',
    title: 'Build useful AI',
    lines: ['RAG • LangChain • LangGraph • vector search', 'AI systems that solve real-world tasks'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Akhil',
    blurb: 'The full story, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
