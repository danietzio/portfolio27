// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the site yours. Nothing else needs to
// change for basic customization — components just read from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Your Name',
  role: 'Product Designer + Engineer',
  tagline: "I'm [Name], a [role] who [what you love doing].",
  email: 'you@example.com',
  resumeUrl: '/resume.pdf', // drop your resume PDF into /public
  social: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
    { label: 'GitHub', url: 'https://github.com/yourname' },
    { label: 'X', url: 'https://x.com/yourname' },
  ],
};

// Work experience — rendered as a timeline, most recent first.
export const experience = [
  { year: '2026', company: 'Company One', role: 'Design Engineering Intern', url: 'https://example.com' },
  { year: '2025', company: 'Company Two', role: 'Software Engineering Intern', url: 'https://example.com' },
  { year: '2025', company: 'Company Three', role: 'Product Design Intern', url: 'https://example.com' },
  { year: '2024', company: 'Company Four', role: 'Software Engineering Intern', url: 'https://example.com' },
];

// Projects — each needs a unique `slug` (used in the URL /projects/:slug).
// `body` accepts an array of paragraphs for the case-study page.
export const projects = [
  {
    slug: 'project-one',
    title: 'A short, specific project title',
    subtitle: 'Company or context • 2026',
    tag: 'Concept',
    cover: '/projects/oarHealth.png', // e.g. '/projects/project-one.jpg' — drop images in /public/projects
    summary: 'One sentence on what the project is and why it mattered.',
    body: [
      'Set up the problem: what was broken, unclear, or missing before you started.',
      'Describe your approach and the key decisions you made along the way.',
      'Close with the outcome — what shipped, what you learned, what changed.',
    ],
  },
  {
    slug: 'project-two',
    title: 'Another project title',
    subtitle: 'Company or context • 2025',
    tag: 'Shipped',
    cover: '/projects/oarHealth.png',
    summary: 'One sentence on what the project is and why it mattered.',
    body: ['Set up the problem.', 'Describe your approach.', 'Close with the outcome.'],
  },
  {
    slug: 'project-three',
    title: 'A third project title',
    subtitle: 'Company or context • 2024',
    tag: 'Handed off',
    cover: '/projects/oarHealth.png',
    summary: 'One sentence on what the project is and why it mattered.',
    body: ['Set up the problem.', 'Describe your approach.', 'Close with the outcome.'],
  },
];

export const about = {
  heading: 'A bit more about me.',
  paragraphs: [
    'Write two or three short paragraphs about your background, what got you into design and engineering, and what you care about in your work.',
    'Mention what you\u2019re curious about right now, or what kind of problems you like to work on.',
    'A line about outside interests keeps this human — climbing, ceramics, whatever it is for you.',
  ],
};

export const fun = {
  heading: 'Outside of work.',
  intro: 'A few things I make or do that aren\u2019t on my resume.',
  items: [
    { title: 'A side project', description: 'One line on what it is and why you made it.' },
    { title: 'A hobby or craft', description: 'One line about it.' },
    { title: 'Something you\u2019re learning', description: 'One line about it.' },
  ],
};
