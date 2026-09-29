// ─────────────────────────────────────────────────────────────
// content.js — Oar Health case study
//
// IMAGES: each `image` has `src: null` + a `placeholder` saying
// which Figma screenshot to export. The site shows a dashed
// placeholder box until you set `src` to the path in the comment
// (drop files into /public/projects/oar/).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Your Name',
  role: 'Product Designer',
  tagline: "I'm [Name], a product designer who turns complex health journeys into calm, legible experiences.",
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',
  social: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
    { label: 'GitHub', url: 'https://github.com/yourname' },
    { label: 'X', url: 'https://x.com/yourname' },
  ],
};

export const experience = [
  { year: '2022–2026', company: 'Oar Health', role: 'Product Designer', url: 'https://www.oarhealth.com' },
  // add earlier roles here, most recent first
];

export const projects = [
  {
    slug: 'oar-health-member-dashboard',
    title: 'Designing the member experience at Oar Health',
    subtitle: 'Oar Health • Telehealth • Product Design',
    tag: 'Case study',

    // src when ready: '/projects/oar/hero-dashboard-active.png'
    // → Final ACTIVE dashboard, desktop 1440px.
    cover: '/projects/WLCV.mp4',
    coverPlaceholder:
      'HERO — Final active dashboard (desktop 1440px): member stats bar + Shipment / Prescription / Subscription cards.',

    summary:
      'Oar Health helps people change their relationship with alcohol through medication-assisted treatment. I designed the member dashboard, video visit flow, and messaging center — and ran the intake study that lifted conversion by 23%.',
    role: 'Product Designer',
    team: 'Design, Product, Clinical, Engineering',
    tools: 'Figma, Userlytics',
    outcome: '23% lift in intake conversion. One system across web and mobile.',

    metrics: [
      { value: '23%', label: 'lift in the intake conversion funnel' },
      { value: '84%', label: 'positive purchase sentiment in the test variant — vs. 0% in control' },
      { value: '4', label: 'surfaces designed: dashboard, visits, messaging, care hub' },
    ],

    sections: {
      // ── PROBLEM ──────────────────────────────────────────────
      challenge: {
        title: 'People were dropping out before care began',
        paragraphs: [
          'Signing up for alcohol treatment is an emotionally loaded moment. The product didn’t honor it: a flat dashboard with no guided path from sign-up to a first clinician visit, and an intake that asked for hundreds of dollars before a clinician had even said yes.',
          'Motivated people were quitting at the doorstep.',
        ],
        // src when ready: '/projects/oar/before-dashboard.png'
        // → The OLD flat dashboard (the "Old Dashboard" annotated frame).
        image: {
          src: '/projects/WLC1.gif',
          placeholder: 'The old flat dashboard — no onboarding hierarchy, no task states, no next step.',
          caption: 'Where we started: a flat layout with no sense of what to do next.',
        },
      },

      // "What I owned" (.role-list)
      ownership: {
        rows: [
          { term: 'Member dashboard', detail: 'New features and full redesign' },
          { term: 'Video visit flow', detail: 'Preparation → visit → next steps' },
          { term: 'Messaging center', detail: 'Doorknob — two-channel support' },
          { term: 'Intake research', detail: 'Moderated A/B study → 23% lift' },
          { term: 'Mentorship', detail: 'Guided a junior designer on the mobile app' },
        ],
      },

      // ── PRINCIPLES ───────────────────────────────────────────
      strategy: {
        title: 'Reduce uncertainty, everywhere',
        intro: 'Four principles, one goal: a member should always know where they stand and what happens next.',
        items: [
          { label: 'Clarity over density', text: 'Scannable cards, not data tables.' },
          { label: 'Progressive disclosure', text: 'Show only the next step — the rest can wait.' },
          { label: 'Trust through transparency', text: 'Named clinicians, explicit pricing, visible timelines.' },
          { label: 'Status-forward', text: 'Every card declares its state, in words — never color alone.' },
        ],
      },

      // ── INTAKE STUDY ─────────────────────────────────────────
      research: {
        eyebrow: 'Research — intake study',
        title: 'Watching eight people hesitate at the same screen',
        paragraphs: [
          'I ran a moderated A/B study with people who matched our real audience. The variant made one structural change: pay $15 for the clinical review today, and for medication only after a clinician approves you.',
        ],
        studyMeta: [
          { term: 'Method', detail: 'Moderated sessions + A/B variant, Userlytics' },
          { term: 'Control (A)', detail: 'Full plan charged up front' },
          { term: 'Variant (B)', detail: '$15 today, medication after approval' },
        ],
        compare: [
          {
            title: 'Group A — control',
            text: '100% called the purchase decision difficult. Everyone defaulted to the shortest plan.',
          },
          {
            title: 'Group B — variant',
            text: '84% called it easy. Selections spread across all three plans.',
          },
        ],
        findingsTitle: 'What the sessions surfaced',
        findings: [
          { stat: '80%', title: 'Wanted a lower-commitment start', text: 'A month-to-month option we didn’t offer.' },
          { stat: '66%', title: 'Picked the shortest plan', text: 'Nobody could see the value of committing longer.' },
          {
            stat: '100%',
            title: 'Understood costs — when stated',
            text: 'The variant’s calculated total removed the mental math.',
          },
          {
            stat: '0',
            title: 'Timing expectations set',
            text: 'People expected a review “ASAP” and meds in 1–2 weeks. The flow said neither.',
          },
        ],
        result: {
          value: '23%',
          strong: 'lift in the intake conversion funnel',
          text: 'after shipping the redesign: deferred charge, stated totals, explicit review and delivery timing.',
        },
        // src when ready: '/projects/oar/intake-ab-variant.png'
        // → Variant B: "Select Delivery Frequency" + "Review Your Order"
        //   with the orange $15-today / $0-after-approval annotations.
        image: {
          src: null,
          placeholder:
            'Variant B intake — “Select Delivery Frequency” + “Review Your Order” with the orange annotations: $15 due today, medication billed after approval.',
          caption: 'The one change that mattered most: pay after approval, and say the total out loud.',
        },
      },

      // ── EXPLORATION ──────────────────────────────────────────
      exploration: {
        title: 'Going wide before landing',
        paragraphs: [
          '129 frames on video visits. 287 on the messaging center. Early ideas included an in-chat medical advisor and competing models for on-demand vs. scheduled visits.',
          'It all converged on a simple mental model: a dashboard for today, a care hub for everything else, and two message channels — because a billing question and a side-effects question deserve different rooms.',
        ],
        // src when ready: '/projects/oar/exploration-canvas.png'
        image: {
          src: null,
          placeholder: 'Zoomed-out Figma canvas — the wall of iterations (Sync Visits or Doorknob V1→V2 pages).',
          caption: 'Exploration before convergence.',
        },
      },

      // ── ITERATION ────────────────────────────────────────────
      validation: {
        title: 'Sharpening the risky moments',
        text: 'Review cycles with clinical and engineering focused on where members could get lost. Dual competing CTAs became one primary “Start video visit.” A bare activity sidebar became a full message center. Onboarding became an explicit “1 of 2 — Please Complete” tracker.',
        markers: ['Welcome → setup', 'Medical history + ID', 'Prepare → join visit', 'Post-visit next steps'],
        // src when ready: '/projects/oar/visit-flow-sequence.png'
        image: {
          src: null,
          placeholder:
            '3-up visit flow — “Get ready to start your video visit” → clinician review screen → post-visit next steps.',
          caption: 'The visit flow: prepare, meet your clinician, know exactly what happens next.',
        },
      },

      // ── SOLUTION ─────────────────────────────────────────────
      flows: {
        title: 'Where we landed: four connected states',
        items: [
          {
            number: '01',
            title: 'Welcome / Setup',
            text: 'A warm overlay walks new members through medical history and ID verification, with a visible completion tracker.',
          },
          {
            number: '02',
            title: 'Active Dashboard',
            text: 'Shipments, prescription details, and subscription in one view — under a personal progress bar: days quit.',
          },
          {
            number: '03',
            title: 'Video Visit',
            text: 'Meet a clinician now or schedule later. Named credentials before, clear pharmacy steps after.',
          },
          {
            number: '04',
            title: 'Messaging — Doorknob',
            text: 'Two channels: Customer Service for accounts, Medical Care for dosage and side effects.',
          },
        ],
        // src when ready: '/projects/oar/doorknob-message-center.png'
        image: {
          src: null,
          placeholder:
            'Doorknob final design — illustrated hero, Customer Service / Medical Care channels, threaded inbox. Bonus: mobile version beside it.',
          caption: 'Doorknob: the right question reaches the right team.',
        },
      },

      // ── KEY DECISIONS ────────────────────────────────────────
      decisions: {
        quote: 'In healthcare, clarity about what happens next matters as much as the clinical content itself.',
        items: [
          'An interruptive welcome overlay — because members must not miss the steps that gate their treatment.',
          'Charge for review first, medication after approval — the research’s biggest lever.',
          'Warm words, clinical precision: members arrive anxious and leave with a prescription.',
          'Status in text and color, responsive from 1440px down to 375px.',
        ],
      },

      // ── OUTCOME ──────────────────────────────────────────────
      outcome: {
        title: 'More people reached a clinician',
        paragraphs: [
          'The redesigned intake shipped and lifted conversion by 23%. The full member experience — onboarding, dashboard, visits, messaging — moved through MVP into production review.',
          'Along the way I mentored a junior designer translating the system to mobile. The same four states carried across platforms — a good sign the model was right.',
        ],
        // src when ready: '/projects/oar/responsive-lineup.png'
        image: {
          src: null,
          placeholder:
            'Responsive lineup — desktop (1440), tablet (1200), mobile (375) versions of the active dashboard.',
          caption: 'One system, three widths — the surface the mobile app work built on.',
        },
      },

      // ── REFLECTION ───────────────────────────────────────────
      reflection: {
        title: 'What I took forward',
        text: 'The highest-impact change wasn’t a screen — it was a payment sequence, found by watching eight people hesitate at the same moment. And mentoring taught me a design system is only as good as the reasoning you can hand to someone else.',
      },
    },
  },

  // ── OTHER PROJECTS (fill in later) ─────────────────────────
  {
    slug: 'project-two',
    title: 'Another project title',
    subtitle: 'Company or context • 2025',
    tag: 'Shipped',
    cover: '/projects/project-two-cover.png',
    summary: 'One sentence on what the project is and why it mattered.',
    body: ['Set up the problem.', 'Describe your approach.', 'Close with the outcome.'],
  },
];

export const about = {
  heading: 'A bit more about me.',
  paragraphs: [
    'Write two or three short paragraphs about your background, what got you into design, and what you care about in your work.',
    'Mention what you’re curious about right now, or what kind of problems you like to work on.',
    'A line about outside interests keeps this human.',
  ],
};

export const fun = {
  heading: 'Outside of work.',
  intro: 'A few things I make or do that aren’t on my resume.',
  items: [
    { title: 'A side project', description: 'One line on what it is and why you made it.' },
    { title: 'A hobby or craft', description: 'One line about it.' },
    { title: 'Something you’re learning', description: 'One line about it.' },
  ],
};
