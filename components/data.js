export const SITE = {
  title: 'Bautis',
  fullName: 'Bautis Chileshe',
  company: 'Bautis Digital Innovations Ltd',
  location: 'Lusaka, ZM',
  email: 'chileshebautis@gmail.com',
  github: 'https://github.com/Bautis123',
  githubLabel: 'github.com/Bautis123',
  logo: 'Innovations Ltd.png',
  photo: '5852720529918333611_121.jpg',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact', cta: true },
];

export const HERO = {
  eyebrow: 'Available for opportunities',
  heading: 'Full-Stack Developer<br>based in Lusaka.',
  summary: 'I build practical software - mobile apps, web platforms, IoT systems. Final-year Computing &amp; Informatics student at UNZA and founder of Bautis Digital Innovations Ltd.',
  primaryAction: { label: 'View my work', href: '#projects' },
  secondaryAction: { label: 'Get in touch', href: '#contact' },
};

export const PROFILE_ROWS = [
  { key: 'Degree', value: 'BSc Computing &amp; Informatics' },
  { key: 'Institution', value: 'University of Zambia' },
  { key: 'Company', value: 'Bautis Digital Innovations Ltd' },
  { key: 'Projects', value: '6 deployed' },
  { key: 'Status', value: '&#9679; Open to work', tone: 'green' },
];

export const SKILL_BLOCKS = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'Cloudinary', 'DPO Pay'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'JWT Auth', 'REST APIs'],
  },
  {
    title: 'Frontend',
    items: ['HTML/CSS/JS', 'React', 'Next.js', 'Tailwind', 'Sanity CMS'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Sanity'],
  },
  {
    title: 'IoT & Hardware',
    items: ['Arduino Uno', 'Python', 'Serial Bridge', 'Ultrasonic Sensors'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Git / GitHub', 'Vercel', 'Netlify', 'esbuild', 'Resend'],
  },
];

export const ABOUT_COLUMNS = [
  [
    'I\'m a final-year <strong>Computing &amp; Informatics</strong> student at the University of Zambia, wrapping up my degree while running <strong>Bautis Digital Innovations Ltd</strong> - a freelance development company serving clients across Lusaka.',
    'My work spans the full stack: Flutter mobile apps, Node.js backends, PHP/MySQL web systems, and IoT integrations with Arduino. Every project here has been deployed, used by real people, or built for a paying client.',
    'I\'m interested in building software that fits the local context - the right payment gateways, the right constraints, the right problems worth solving for Zambian users, students, and businesses.',
  ],
  [
    'Currently finishing my <strong>Final Year Project</strong> (InteliBin - a smart waste monitoring system), completing freelance client work, and preparing Student Nest for market launch after PACRA registration.',
    'Comfortable working across the stack independently - from a UI to a database schema to a hardware sensor bridge.',
  ],
];

export const PROJECTS = [
  {
    icon: '&#127968;',
    image: 'studentnest.jpeg',
    badge: 'Mobile App',
    name: 'Student Nest',
    description: 'Accommodation marketplace for Zambia\'s 75,000+ university students. Landlords list properties, students browse. K300/yr Basic and K800/yr Premium subscription model. Backend complete; DPO payment integration pending PACRA registration.',
    stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Cloudinary', 'JWT'],
    featured: true,
  },
  {
    icon: '&#128465;',
    badge: 'IoT &middot; FYP',
    name: 'InteliBin',
    description: 'Smart waste bin monitoring system. Arduino Uno with ultrasonic sensors tracks fill levels in real time. A Python serial bridge pipes data to MySQL, visualised on a PHP dashboard. Final Year Project at UNZA.',
    stack: ['Arduino', 'Python', 'PHP', 'MySQL'],
    featured: true,
  },
  {
    icon: '&#128188;',
    badge: 'Client Work',
    name: 'Taurus Technology Solutions',
    description: 'Company profile website with full CMS for an IT reseller in Lusaka. Product catalogue supports 500+ items via Sanity. Contact form via Resend. Live on Vercel at trustaurus.com.',
    stack: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
    link: 'https://taurus-ts-website.vercel.app',
  },
  {
    icon: '&#127974;',
    image: 'bacma-logo.png',
    badge: 'Client Work',
    name: 'BACMA',
    description: 'Management system for a lending institution. Handles borrower records, loan tracking, repayment schedules, and reporting - built for non-technical staff.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    icon: '&#128218;',
    image: 'MK Tutorials.png',
    badge: 'Client Work',
    name: 'MK Tutorials',
    description: 'Management system for a university tutoring company. Handles tutor and student records, session scheduling, and payments in one place.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    icon: '&#127807;',
    image: 'Mood Journal.png',
    badge: 'Personal',
    name: 'Mood Journal',
    description: 'PWA with animated 3D SVG avatar companions, mood tracking, and 255 activity suggestions. Refactored from monolithic HTML to a 10-module ES architecture with esbuild. Auto-deploys via Netlify.',
    stack: ['Vanilla JS', 'ES Modules', 'esbuild', 'Netlify'],
    link: 'https://github.com/Bautis123/moodJournal',
  },
];

export const CONTACT = {
  heading: 'Let\'s build<br>something.',
  intro: 'Open to freelance projects, graduate roles, and collaborations. Based in Lusaka - available remotely or on-site.',
  prompt: 'Have a project or opportunity in mind?',
  note: 'Whether it\'s a mobile app, a web platform, or something more specific to the Zambian market - if you need it built well, I\'m interested.',
  actionLabel: 'Send a message',
  items: [
    { icon: '&#9993;', label: SITE.email, href: `mailto:${SITE.email}` },
    { icon: '&#8997;', label: SITE.githubLabel, href: SITE.github },
    { icon: '&#128205;', label: 'Lusaka, Zambia' },
  ],
};
