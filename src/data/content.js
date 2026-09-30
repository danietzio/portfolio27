// ─────────────────────────────────────────────────────────────
// content.js — Oar Health case study (final structure)
//
// PAGE: hero → metrics → Overview (problem → solution → ownership)
// → Dashboard → Care+ → Intake → Research (animated charts) →
// Messaging → Design System → Leadership → Reflection.
//
// EACH WORK SECTION: Problem / Opportunity / Solution (text, no
// images) → solution HERO image → showcase rows (image left,
// text right) → optional screenshot GRID (2 or 3 columns).
//
// IMAGES: src null → dashed placeholder describing which Figma
// export goes there. Drop files into /public/projects/oar/ and
// set src. .png/.jpg/.gif/.mp4/.webm all work everywhere.
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
];

export const projects = [
  {
    slug: 'oar-health-member-experience',
    title: 'Designing the member experience at Oar Health',
    subtitle: 'Oar Health • Telehealth • Product Design',
    tag: 'Case study',

    // Set to your video: '/projects/oar/hero.mp4' (image paths work too).
    // The video plays while on screen and pauses when scrolled past.
    cover: '/projects/WLCV.mp4',
    coverPlaceholder:
      'HERO — your cover video (hero.mp4): it will autoplay muted while in view and pause when scrolled past.',

    summary:
      'Oar Health helps people change their relationship with alcohol through medication-assisted treatment. I designed the member dashboard, the Care+ hub, the intake flow, and the messaging center — and ran the research that lifted intake conversion by 23%.',
    role: 'Product Designer',
    team: 'Design, Product, Clinical, Engineering',
    tools: 'Figma, Userlytics',
    outcome: '23% lift in intake conversion. One design system across web and mobile.',

    metrics: [
      { value: '23%', label: 'lift in the intake conversion funnel' },
      { value: '4', label: 'product surfaces: dashboard, Care+, intake, messaging' },
      { value: '1', label: 'design system, carried from web to the mobile app' },
    ],

    nav: [
      { id: 'overview', label: 'Overview' },
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'careplus', label: 'Care+' },
      { id: 'intake', label: 'Intake' },
      { id: 'research', label: 'Research' },
      { id: 'messaging', label: 'Messaging' },
      { id: 'system', label: 'System' },
      { id: 'process', label: 'Process' },
      { id: 'reflection', label: 'Reflection' },
    ],

    sections: {
      // ══ OVERVIEW ══════════════════════════════════════════════
      overview: {
        id: 'overview',
        problemEyebrow: 'The problem',
        problemParagraphs: [
          'Signing up for alcohol treatment is an emotionally loaded moment. The product didn’t honor it: a flat dashboard with no guided path to a first clinician visit, an intake that asked for hundreds of dollars before a clinician had said yes, and one undifferentiated channel for every question.',
          'Motivated people were quitting at the doorstep.',
        ],
        eyebrow: 'The answer',
        titleLead: 'One system.',
        titleRest: 'From sign-up to treatment, nobody gets lost.',
        paragraphs: [
          'Over several release cycles I redesigned each surface a member touches — and tied them together with a shared design system and research that changed how we charge for care.',
        ],
        ownership: {
          rows: [
            { term: 'Member dashboard', detail: 'From one flat layout to a state-aware experience' },
            { term: 'Care+', detail: 'A new hub for resources, visits, and surveys' },
            { term: 'Intake flow', detail: 'Conversion funnel redesign, validated by testing' },
            { term: 'Messaging center', detail: 'Doorknob — two-channel support' },
            { term: 'Research', detail: 'Moderated A/B study → 23% lift' },
            { term: 'Design system', detail: 'Shared components across web and mobile' },
            { term: 'Mentorship', detail: 'Guided a junior designer on the mobile app' },
          ],
        },
      },

      // ══ WORK SECTIONS ════════════════════════════════════════
      work: [
        // ── 01 DASHBOARD ───────────────────────────────────────
        {
          id: 'dashboard',
          eyebrow: 'Section 01',
          titleLead: 'The dashboard.',
          titleRest: 'Always one clear next step.',
          pos: {
            problem:
              'The old dashboard was one flat layout for everyone. Required setup tasks sat next to treatment data with no hierarchy — new members couldn’t tell what to do next, and stalled before their first clinician visit.',
            opportunity:
              'If the dashboard understood where a member was in their journey, it could guide instead of just display — and every completed step would pull them closer to care.',
            solution:
              'A state-aware dashboard. A warm welcome overlay and a “1 of 2 — Please Complete” tracker guide setup; once active, shipment, prescription, and subscription live in scannable cards under a personal progress bar: member since, quit date, days quit.',
          },
          hero: {
            // Set to your video: '/projects/oar/dashboard-hero.mp4'
            // (plays while on screen, pauses when scrolled past).
            src: '/projects/OarHealth/dashboard.mp4',
            placeholder: 'SOLUTION HERO VIDEO — dashboard-hero.mp4: the active dashboard in motion.',
            caption: 'The active state: treatment at a glance.',
          },
          showcase: [
            {
              heading: 'Impossible to miss',
              text: 'The welcome overlay and completion tracker walk new members through medical history and ID verification — with Finished and Incomplete stated in words, never color alone.',
              image: {
                src: '/projects/OarHealth/dashboard1.png', // '/projects/oar/dashboard-setup.png' or .mp4
                placeholder:
                  'Setup state — welcome overlay + “1 of 2” tracker with status badges. (Recording works great.)',
              },
            },
            {
              heading: 'A visit you can’t get lost in',
              text: 'Prepare with a named clinician’s credentials, join the review, and leave knowing exactly how the pharmacy process works.',
              image: {
                src: '/projects/OarHealth/dashboard2.mp4', // '/projects/oar/visit-flow.mp4'
                placeholder:
                  'RECORDING — “Get ready to start your video visit” → clinician review → post-visit next steps.',
              },
            },
            {
              heading: 'From flat to state-aware',
              text: 'The old dashboard showed everyone the same thing. The redesign meets you where you are.',
              image: {
                src: '/projects/OarHealth/dashboard3.png', // '/projects/oar/dashboard-before-after.png'
                placeholder: 'ONE combined before/after frame — old flat dashboard left, redesign right.',
              },
            },
          ],
          grid: {
            title: 'Across every screen size',
            cols: 3,
            images: [
              { src: '/projects/OarHealth/dashboard4.png', placeholder: 'Desktop 1440px' },
              { src: '/projects/OarHealth/dashboard5.png', placeholder: 'Tablet 1200px' },
              { src: '/projects/OarHealth/dashboard6.png', placeholder: 'Mobile 375px' },
            ],
          },
        },

        // ── 02 CARE+ ───────────────────────────────────────────
        {
          id: 'careplus',
          eyebrow: 'Section 02',
          titleLead: 'Care+.',
          titleRest: 'A home for everything beyond today’s tasks.',
          pos: {
            problem:
              'The dashboard was built around today: tasks, shipments, the next visit. Everything else — visit summaries, surveys, guides, help articles — had no home, so members left the product to find answers.',
            opportunity:
              'Treatment is long. A dedicated space for the quieter, ongoing work of care could keep members engaged between visits — and answer questions before they became support tickets.',
            solution:
              'Care+, a new second tab designed from scratch: Meetings & Surveys (visit summaries, surveys) and a Help Center (FAQs, blog, guides & tips, contact) in one calm, browsable layout.',
          },
          hero: {
            src: '/projects/OarHealth/care1.png', // '/projects/oar/careplus-hero.png'
            placeholder: 'SOLUTION HERO — the final Care+ tab: Meetings & Surveys + Help Center sections.',
            caption: 'Care+: the ongoing work of treatment, one tab away.',
          },
          showcase: [
            {
              heading: 'From card grid to two clear sections',
              text: 'Sixty frames of exploration moved Care+ from a flat card grid to a two-section layout that separates “my care” from “help me understand.”',
              image: {
                src: '/projects/OarHealth/care2.png', // '/projects/oar/careplus-iterations.png'
                placeholder: 'ONE combined frame — early Care+ card grid beside the final two-section layout.',
              },
            },
          ],
          grid: {
            title: 'Inside the hub',
            cols: 3,
            images: [
              { src: '/projects/OarHealth/care3.png', placeholder: 'Visits Summary' },
              { src: '/projects/OarHealth/care5.png', placeholder: 'Surveys' },
              { src: '/projects/OarHealth/care4.png', placeholder: 'Help Center / FAQs' },
            ],
          },
        },

        // ── 03 INTAKE ──────────────────────────────────────────
        {
          id: 'intake',
          eyebrow: 'Section 03',
          titleLead: 'The intake.',
          titleRest: 'Trust before money.',
          pos: {
            problem:
              'The intake asked members to commit hundreds of dollars for medication before any clinician had reviewed them. For someone already anxious about treatment, that was a wall — and the funnel showed it.',
            opportunity:
              'What if the first payment matched the first promise? Members were willing to pay for a clinical review — they just weren’t willing to gamble on medication a doctor hadn’t approved.',
            solution:
              'Flip the sequence: $15 for the clinical review today, medication charged only after clinical approval. State every total out loud, on the screen, with charge timing on every plan option.',
          },
          hero: {
            src: '/projects/OarHealth/intake1.png', // '/projects/oar/intake-hero.png'
            placeholder:
              'SOLUTION HERO — the redesigned “Select Delivery Frequency” screen with per-plan benefits and charge timing.',
            caption: 'Every plan says when you’ll actually be charged.',
          },
          showcase: [
            {
              heading: 'No mental math',
              text: 'The review screen states the calculated total: $15 due today, the plan billed after approval. In testing, the control group had to work this out themselves.',
              image: {
                src: '/projects/OarHealth/intake2.png', // '/projects/oar/intake-review.png'
                placeholder: '“Review Your Order” — $15 due today, plan billed after clinical approval.',
              },
            },
            {
              heading: 'The whole flow, start to finish',
              text: 'From landing to confirmation in one pass: plan selection, account, clinical review payment, and a clear picture of what happens next. Every step states where you are and what it costs.',
              image: {
                src: '/projects/OarHealth/intake3.mp4', // drop your recording at this path
                placeholder: 'RECORDING — the full intake flow walked end to end (intake3.mp4).',
              },
            },
          ],
        },

        // ── 04 RESEARCH (animated) ─────────────────────────────
        {
          id: 'research',
          type: 'research',
          eyebrow: 'Section 04',
          titleLead: 'The research.',
          titleRest: 'Eight people, one hesitation, 23%.',
          lede: 'The intake redesign wasn’t a hunch. I ran a moderated A/B study on Userlytics with participants who matched our real audience — people who wanted to make a change and were open to options.',
          studyMeta: [
            { term: 'Method', detail: 'Moderated sessions + A/B variant, Userlytics' },
            { term: 'Control (A)', detail: 'Full plan charged up front' },
            { term: 'Variant (B)', detail: '$15 today, medication after approval' },
          ],
          // Animated on scroll: one measure, two groups.
          chartEase: {
            title: 'Found the purchase decision easy',
            note: 'The only change between groups: when medication is charged.',
            bars: [
              { label: 'Group A — pay up front', value: 0, display: '0%' },
              { label: 'Group B — pay after approval', value: 84, display: '84%' },
            ],
          },
          chartPlans: {
            title: 'Which plan did participants prefer?',
            note: '“I want to start small before committing long-term.”',
            bars: [
              { label: '3-month plan', value: 66, display: '66%' },
              { label: '6-month plan', value: 20, display: '20%' },
              { label: '12-month plan', value: 14, display: '14%' },
            ],
          },
          findings: [
            {
              stat: 80,
              display: '80%',
              title: 'Wanted a month-to-month option',
              text: 'To see if it works before committing — a plan we didn’t offer.',
            },
            {
              stat: 100,
              display: '100%',
              title: 'Understood costs — when stated',
              text: 'The variant’s calculated total removed the mental math.',
            },
            {
              stat: 64,
              display: '64%',
              title: 'Found the price expensive',
              text: 'Payment timing and pay-later options became the friction levers.',
            },
          ],
          result: {
            value: 23,
            display: '23%',
            strong: 'lift in the intake conversion funnel',
            text: 'after shipping the redesign: deferred charge, stated totals, explicit review and delivery timing.',
          },
          hero: {
            src: '/projects/OarHealth/research.png', // '/projects/oar/research-variant.png'
            placeholder:
              'STUDY — Variant B test screens with the orange annotation pointers ($15 today / billed after approval).',
            caption: 'The variant under test, annotations and all.',
          },
        },

        // ── 05 MESSAGING ───────────────────────────────────────
        {
          id: 'messaging',
          eyebrow: 'Section 05',
          titleLead: 'Doorknob.',
          titleRest: 'The right question reaches the right team.',
          pos: {
            problem:
              'Members had one undifferentiated way to reach us. A question about a side effect could sit in the same queue as a billing question — the wrong wait, from the wrong team.',
            opportunity:
              'Administrative and medical questions have different stakes, different urgency, and different people who should answer them. The messaging center could route by intent from the very first tap.',
            solution:
              'Doorknob: a slide-out message center with two channels — Customer Service for membership and accounts, Medical Care for dosage and side effects — with threaded conversation history.',
          },
          hero: {
            src: '/projects/OarHealth/doorknob.png', // '/projects/oar/doorknob-hero.png' or .mp4 of the panel sliding open
            placeholder:
              'SOLUTION HERO — Doorknob open: illustrated hero, channel selection, inbox. (A recording of the panel sliding open works great.)',
            caption: 'Two channels, one panel, full history.',
          },
          showcase: [
            {
              heading: 'Each channel asks the right questions',
              text: 'Customer Service opens with a free-form message. Medical Care asks first: have you started your medication, are you experiencing warning symptoms — so the clinical team triages before reading a word.',
              image: {
                src: '/projects/OarHealth/doorknob3.png',
                placeholder:
                  'Channel entry forms — free-form Customer Service beside the structured Medical Care intake.',
              },
            },
            {
              heading: 'A conversation, not a ticket',
              text: 'Threaded history with named support, a privacy notice up front, and expectations stated in the thread itself: a response within 72 hours.',
              image: {
                src: '/projects/OarHealth/doorknob4.png',
                placeholder: 'Customer Service thread — privacy note, sent message, expert reply, follow-up.',
              },
            },
            {
              heading: 'Clinical answers, readable at a glance',
              text: 'The clinical team delivers treatment plans in the thread — dosage, timing, delivery — with a “Read Full Version” for the detail that doesn’t fit a bubble.',
              image: {
                src: '/projects/OarHealth/doorknob5.png',
                placeholder:
                  'Medical Care thread — treatment plan message with Read Full Version, dose-change follow-up.',
              },
            },
            {
              heading: 'It took 287 frames to get it right',
              text: 'It started as a bare activity sidebar. Two full rounds of exploration — including an in-chat medical advisor concept — converged on the channel model.',
              image: {
                src: '/projects/OarHealth/doorknob2.png',
                placeholder: 'ONE combined frame — Doorknob V1 (bare sidebar) beside V2 (full message center).',
              },
            },
          ],
        },

        // ── 06 DESIGN SYSTEM ───────────────────────────────────
        {
          id: 'system',
          eyebrow: 'Section 06',
          titleLead: 'The system.',
          titleRest: 'Design once, hold up everywhere.',
          pos: {
            problem:
              'Four surfaces, three breakpoints, and a mobile app in flight — designed ad hoc, they would have drifted apart within months.',
            opportunity:
              'The same components that made the dashboard legible — status badges, cards, steppers, message threads — could become a shared language for every surface, including mobile.',
            solution:
              'A component library underpinning all of it: status badges that always pair words with color, card patterns, the visit stepper, message components, and type and color tokens — reused from 1440px desktop down to the native app.',
          },
          hero: {
            src: '/projects/OarHealth/designSystem.png', // '/projects/oar/system-hero.png'
            placeholder:
              'SOLUTION HERO — a composed sheet of the design system: components, badges, cards, type and color tokens.',
            caption: 'The shared language behind every screen.',
          },
        },
      ],

      // ══ PROCESS & COLLABORATION ══════════════════════════════
      // How the work happened — not just what shipped. Steps use
      // the numbered list; partners use the tinted card grid.
      process: {
        id: 'process',
        eyebrow: 'Behind the screens',
        titleLead: 'The process.',
        titleRest: 'How work moved from Figma wall to production.',
        intro:
          'None of this shipped from a designer working alone. Every surface went through the same loop: explore wide, converge with the people who know what I don’t, validate with members, hand off precisely, and stay with it after launch.',
        steps: [
          {
            number: '01',
            title: 'Explore wide, on purpose',
            text: '129 frames for the visit flow, 287 for Doorknob, 60 for Care+. Cheap divergence first, so convergence has real options to choose from.',
          },
          {
            number: '02',
            title: 'Converge with clinical and product',
            text: 'Weekly reviews where clinicians corrected medical language and flow assumptions, and product tied decisions back to funnel metrics. The two-channel messaging model came out of one of these rooms.',
          },
          {
            number: '03',
            title: 'Validate with real members',
            text: 'Moderated sessions and an A/B variant on Userlytics before committing engineering time — the intake study that found the payment-timing insight.',
          },
          {
            number: '04',
            title: 'Hand off so nothing is ambiguous',
            text: 'Annotated specs for every state — Incomplete, Finished, Pending, empty, error — plus responsive behavior at 1440, 1200, and 375, and tokens engineers could consume directly. File statuses (“In review — not ready for development”) kept everyone honest about what was final.',
          },
          {
            number: '05',
            title: 'Stay with it after handoff',
            text: 'Design QA against the built UI, side by side with engineers — catching spacing, state, and copy drift before members ever saw it.',
          },
        ],
        // Optional: a Figma dev-mode / annotated spec screenshot.
        image: {
          src: null, // '/projects/OarHealth/handoff.png'
          placeholder:
            'OPTIONAL — a handoff artifact: annotated Figma spec, dev-mode measurements, or the file’s status/version structure.',
          caption: 'Specs annotated per state, so engineering never had to guess.',
        },
        partners: {
          title: 'Who was in the room',
          items: [
            {
              label: 'Engineering',
              text: 'Feasibility checks before polish, annotated handoffs, and shared design QA after each release.',
            },
            {
              label: 'Clinical team',
              text: 'Reviewed every flow and word that touched treatment — dosage copy, visit steps, medication guidance.',
            },
            {
              label: 'Product',
              text: 'Funnel data framed the problems; research findings went back into the roadmap as prioritized changes.',
            },
            {
              label: 'Design',
              text: 'Weekly critique with the junior designer I mentored — the mobile app kept the same state model because we reasoned it out together.',
            },
          ],
        },
        // Team photo — shown only when src is set. Get your
        // teammates' okay before publishing their faces.
        teamPhoto: {
          src: '/projects/OarHealth/team.jpeg', // '/projects/OarHealth/team.jpg'
          placeholder: 'OPTIONAL — a photo of the design team (with everyone’s permission).',
          caption: 'The design team behind the member experience.',
        },
      },

      // ══ LEADERSHIP ════════════════════════════════════════════
      leadership: {
        eyebrow: 'Beyond the screens',
        title: 'Mentoring the mobile translation',
        text: 'While the web experience shipped, I mentored a junior designer adapting the system to the native mobile app — weekly critiques, shared component decisions, and pairing on how the dashboard’s state model translates to mobile patterns. The same four states carried across platforms, which told us the model was right.',
      },

      // ══ REFLECTION ════════════════════════════════════════════
      reflection: {
        id: 'reflection',
        title: 'What I took forward',
        text: 'The highest-impact change wasn’t a screen — it was a payment sequence, found by watching eight people hesitate at the same moment. The strongest design moments reduced uncertainty: a stated total, a named clinician, a visible next step, a message routed to the right team. And mentoring taught me a design system is only as good as the reasoning you can hand to someone else.',
      },
    },
  },

  // ── OTHER PROJECTS ─────────────────────────────────────────
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
