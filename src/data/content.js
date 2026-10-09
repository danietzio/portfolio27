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
  name: 'Daniyal Nasiri Bavil',
  role: 'Product Designer',
  // ── Home hero, your reference's structure ──────────────────
  // One statement that IS the hero (name + role + what you do,
  // with **accent** words inside the sentence), then one quiet
  // "previously at" line under it. Rewrite in your own voice.
  // ── Home hero: exactly two things ──────────────────────────
  // 1. heroStatement — one short punch line. Your rarest fact, said
  //    plainly. Nothing else competes with it.
  // 2. intro — ONE dense factual paragraph: role, current chapter,
  //    proof. The **words** are the accent keywords.
  heroStatement: 'I’m Daniyal. I design the product — then I build the **interface**.',
  headline: 'Product Designer & Design Engineer', // fallback if heroStatement is null
  subline: null,
  credential: null, // folded into intro — one paragraph instead of three lines
  tagline: 'Designer since 2016, engineer by training — I design products and then build them to the pixel.',
  email: 'daniyal.nasiri-bavil@universite-paris-saclay.fr', // or your personal one
  resumeUrl: '/resume.pdf',
  // Your transparent-background portrait (PNG/WebP), shown top-right
  // of the hero. Drop the file into /public and set the path;
  // null hides the slot and the text takes the full width.
  portrait: '/portrait.png',
  location: 'Paris, France', // shown on the home hero — edit or set to null
  status: 'Open to senior product-design roles & HCI research internships', // ditto
  intro:
    'Senior product designer and front-end engineer — ten years of shipped products, top 3% on **Toptal**. I’ve designed for **Oar Health**, **Thinking Machine**, and **Backgammon Galaxy** (where I also wrote the front-end), and I’m now researching human–computer interaction in **Wendy Mackay’s** group at Université Paris-Saclay.',
  focus: 'Product design · Design systems · Front-end · HCI research',
  // Your logo for the nav bar (SVG preferred, or a transparent PNG
  // exported at 2x). Drop the file into /public; null falls back to
  // your name in the display serif.
  logo: '/logo.png',
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danial-nasiri/' },
    { label: 'GitHub', url: 'https://github.com/danietzio' },
    { label: 'Toptal', url: 'https://www.toptal.com/designers/resume/daniyal-nasiri-bavil' },
    { label: 'Behance', url: 'https://www.behance.net/CreativeDannies' },
    { label: 'Dribbble', url: 'https://dribbble.com/CreativeDannies' },
  ],
};

// Timeline — real history, newest first. (Oar Health and Thinking
// Machine were Toptal engagements, shown inside the Toptal entry.)
// Rendered as a compact ledger on the home page: year (never wraps),
// place, role. `note` is 1–2 sentences — what it was, what you took
// from it — revealed on hover (always visible on touch screens).
// These are drafts in my words: rewrite them in yours.
export const experience = [
  {
    year: '2026 —',
    company: 'Inria / LISN, ex)situ',
    role: 'HCI Researcher, Wendy Mackay’s group',
    url: 'https://ex-situ.lri.fr',
    note: 'Researching how scientists really collaborate across tools. Learning to treat design claims the way researchers treat hypotheses — tested, not asserted.',
  },
  {
    year: '2025 —',
    company: 'Université Paris-Saclay',
    role: 'MSc Human–Computer Interaction',
    url: 'https://www.universite-paris-saclay.fr',
    note: 'The theory behind a decade of instinct: interaction models, research methods, and studies I can defend question by question.',
  },
  {
    year: '2024–25',
    company: 'Backgammon Galaxy',
    role: 'Product Designer & Front-end Developer',
    url: 'https://www.backgammongalaxy.com',
    note: 'Redesigned the mobile app, rebranded the site, built the design system — then joined the codebase and closed the gap between Figma and production myself.',
  },
  {
    year: '2024–25',
    company: 'BioComputing UP Lab, Padova, Italy',
    role: 'Research Fellow',
    url: null,
    note: 'A funded year engineering protein databases used by working biologists. Taught me what “user” means when the user is a scientist mid-experiment.',
  },
  {
    year: '2022–24',
    company: 'Toptal',
    role: 'Senior UX Designer — Oar Health, Thinking Machine',
    url: 'https://www.toptal.com/designers/resume/daniyal-nasiri-bavil',
    note: 'Telehealth journeys at Oar Health, a no-code platform at Thinking Machine. Client work at this level teaches you to earn trust fast — and to leave every decision documented.',
  },
  {
    year: '2019–21',
    company: 'Nickelfox Technologies',
    role: 'UI/UX Designer',
    url: null,
    note: 'Part of a team ranked among Dribbble’s top 100 worldwide; one of my shots passed 57,000 views. Where I learned craft at speed.', // verify the 57k figure
  },
  {
    year: '2016–19',
    company: 'CreativeDannies',
    role: 'Founder — design & front-end',
    url: 'https://dribbble.com/CreativeDannies',
    note: 'My own studio: design and front-end for clients from Melbourne to New York. Where designing and building stopped being separate jobs.',
  },
];

export const projects = [
  {
    slug: 'oar-health-member-experience',
    thumb: '/projects/thumbs/oar.webp', // home-page thumbnail — your own design, not a case-study image
    thumbMobile: '/projects/thumbs/oar-mobile.webp', // taller composition served under 860px
    hook: '23% more people reached care.',
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

    // LinkedIn recommendations from the Oar team — quoted verbatim,
    // verifiable on linkedin.com/in/danial-nasiri
    testimonials: [
      {
        quote:
          'Daniyal is such a strong product designer. He is quick to understand the user problem and product needs. He always creates multiple versions of each design, making feedback sessions easier and more valuable. Daniyal also consistently works through all the user states and use cases to ensure that his design delivery is complete. He works well with product management, peer product designers, and engineering. Daniyal always is eager to vet designs with engineers, takes in feedback, and then delivers designs that are easy to build. It was such a pleasure to work with Daniyal and I hope to find the opportunity to work together again soon.',
        name: 'Jen Wirt',
        role: 'Product Manager, Oar Health', // her title while managing you — she's now Founder & CEO of Coral Care
        source: 'via LinkedIn',
      },
      {
        quote:
          'Looking for fresh ideas? Looking to gain movement rapidly in your product design? Daniyal is an excellent choice. I was impressed at how quickly Daniyal identified opportunities surrounding the product. He quickly understood the business and user goals and turned around beautiful work. Daniyal is a genuine teammate willing to listen, learn, guide, and collaborate in lockstep to produce well-balanced and functional product design.',
        name: 'Frank Vasquez',
        role: 'Product Designer, Oar Health',
        source: 'via LinkedIn',
      },
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
        rationale:
          'Every decision on this page serves one goal: reducing uncertainty at an emotionally loaded moment. When someone seeks help for drinking, confusion is a reason to quit.',
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
          rationale:
            'I chose a state-aware dashboard over a flat one because new members don’t need more information — they need the single next step toward care, impossible to miss.',
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
                src: '/projects/OarHealth/dashboard1.webp', // '/projects/oar/dashboard-setup.png' or .mp4
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
                src: '/projects/OarHealth/dashboard3.webp', // '/projects/oar/dashboard-before-after.png'
                placeholder: 'ONE combined before/after frame — old flat dashboard left, redesign right.',
              },
            },
          ],
          grid: {
            title: 'Across every screen size',
            cols: 3,
            images: [
              { src: '/projects/OarHealth/dashboard4.webp', placeholder: 'Desktop 1440px' },
              { src: '/projects/OarHealth/dashboard5.webp', placeholder: 'Tablet 1200px' },
              { src: '/projects/OarHealth/dashboard6.webp', placeholder: 'Mobile 375px' },
            ],
          },
        },

        // ── 02 CARE+ ───────────────────────────────────────────
        {
          id: 'careplus',
          eyebrow: 'Section 02',
          titleLead: 'Care+.',
          titleRest: 'A home for everything beyond today’s tasks.',
          rationale:
            'Care+ exists because treatment is long. The dashboard serves today; the quieter, ongoing work of care needed a home of its own.',
          pos: {
            problem:
              'The dashboard was built around today: tasks, shipments, the next visit. Everything else — visit summaries, surveys, guides, help articles — had no home, so members left the product to find answers.',
            opportunity:
              'Treatment is long. A dedicated space for the quieter, ongoing work of care could keep members engaged between visits — and answer questions before they became support tickets.',
            solution:
              'Care+, a new second tab designed from scratch: Meetings & Surveys (visit summaries, surveys) and a Help Center (FAQs, blog, guides & tips, contact) in one calm, browsable layout.',
          },
          hero: {
            src: '/projects/OarHealth/care1.webp', // '/projects/oar/careplus-hero.png'
            placeholder: 'SOLUTION HERO — the final Care+ tab: Meetings & Surveys + Help Center sections.',
            caption: 'Care+: the ongoing work of treatment, one tab away.',
          },
          showcase: [
            {
              heading: 'From card grid to two clear sections',
              text: 'Sixty frames of exploration moved Care+ from a flat card grid to a two-section layout that separates “my care” from “help me understand.”',
              image: {
                src: '/projects/OarHealth/care2.webp', // '/projects/oar/careplus-iterations.png'
                placeholder: 'ONE combined frame — early Care+ card grid beside the final two-section layout.',
              },
            },
          ],
          grid: {
            title: 'Inside the hub',
            cols: 3,
            images: [
              { src: '/projects/OarHealth/care3.webp', placeholder: 'Visits Summary' },
              { src: '/projects/OarHealth/care5.webp', placeholder: 'Surveys' },
              { src: '/projects/OarHealth/care4.webp', placeholder: 'Help Center / FAQs' },
            ],
          },
        },

        // ── 03 INTAKE ──────────────────────────────────────────
        {
          id: 'intake',
          eyebrow: 'Section 03',
          titleLead: 'The intake.',
          titleRest: 'Trust before money.',
          rationale:
            'We flipped the payment sequence because trust had to come first: nobody should gamble money on medication a doctor hasn’t approved yet.',
          pos: {
            problem:
              'The intake asked members to commit hundreds of dollars for medication before any clinician had reviewed them. For someone already anxious about treatment, that was a wall — and the funnel showed it.',
            opportunity:
              'What if the first payment matched the first promise? Members were willing to pay for a clinical review — they just weren’t willing to gamble on medication a doctor hadn’t approved.',
            solution:
              'Flip the sequence: $15 for the clinical review today, medication charged only after clinical approval. State every total out loud, on the screen, with charge timing on every plan option.',
          },
          hero: {
            src: '/projects/OarHealth/intake1.webp', // '/projects/oar/intake-hero.png'
            placeholder:
              'SOLUTION HERO — the redesigned “Select Delivery Frequency” screen with per-plan benefits and charge timing.',
            caption: 'Every plan says when you’ll actually be charged.',
          },
          showcase: [
            {
              heading: 'No mental math',
              text: 'The review screen states the calculated total: $15 due today, the plan billed after approval. In testing, the control group had to work this out themselves.',
              image: {
                src: '/projects/OarHealth/intake2.webp', // '/projects/oar/intake-review.png'
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
          rationale:
            'I tested before building because the most expensive screen is the one engineering builds twice. Eight moderated sessions found the insight that moved the funnel 23%.',
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
            src: '/projects/OarHealth/research.webp', // '/projects/oar/research-variant.png'
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
          rationale:
            'Two channels, because a billing question and a side-effect question carry different stakes — routing by intent respects both the member and the clinician.',
          pos: {
            problem:
              'Members had one undifferentiated way to reach us. A question about a side effect could sit in the same queue as a billing question — the wrong wait, from the wrong team.',
            opportunity:
              'Administrative and medical questions have different stakes, different urgency, and different people who should answer them. The messaging center could route by intent from the very first tap.',
            solution:
              'Doorknob: a slide-out message center with two channels — Customer Service for membership and accounts, Medical Care for dosage and side effects — with threaded conversation history.',
          },
          hero: {
            src: '/projects/OarHealth/doorknob.webp', // '/projects/oar/doorknob-hero.png' or .mp4 of the panel sliding open
            placeholder:
              'SOLUTION HERO — Doorknob open: illustrated hero, channel selection, inbox. (A recording of the panel sliding open works great.)',
            caption: 'Two channels, one panel, full history.',
          },
          showcase: [
            {
              heading: 'Each channel asks the right questions',
              text: 'Customer Service opens with a free-form message. Medical Care asks first: have you started your medication, are you experiencing warning symptoms — so the clinical team triages before reading a word.',
              image: {
                src: '/projects/OarHealth/doorknob3.webp',
                placeholder:
                  'Channel entry forms — free-form Customer Service beside the structured Medical Care intake.',
              },
            },
            {
              heading: 'A conversation, not a ticket',
              text: 'Threaded history with named support, a privacy notice up front, and expectations stated in the thread itself: a response within 72 hours.',
              image: {
                src: '/projects/OarHealth/doorknob4.webp',
                placeholder: 'Customer Service thread — privacy note, sent message, expert reply, follow-up.',
              },
            },
            {
              heading: 'Clinical answers, readable at a glance',
              text: 'The clinical team delivers treatment plans in the thread — dosage, timing, delivery — with a “Read Full Version” for the detail that doesn’t fit a bubble.',
              image: {
                src: '/projects/OarHealth/doorknob5.webp',
                placeholder:
                  'Medical Care thread — treatment plan message with Read Full Version, dose-change follow-up.',
              },
            },
            {
              heading: 'It took 287 frames to get it right',
              text: 'It started as a bare activity sidebar. Two full rounds of exploration — including an in-chat medical advisor concept — converged on the channel model.',
              image: {
                src: '/projects/OarHealth/doorknob2.webp',
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
          rationale:
            'The system exists so four surfaces couldn’t drift apart: states named in words, color never alone, components shared from desktop down to the native app.',
          pos: {
            problem:
              'Four surfaces, three breakpoints, and a mobile app in flight — designed ad hoc, they would have drifted apart within months.',
            opportunity:
              'The same components that made the dashboard legible — status badges, cards, steppers, message threads — could become a shared language for every surface, including mobile.',
            solution:
              'A component library underpinning all of it: status badges that always pair words with color, card patterns, the visit stepper, message components, and type and color tokens — reused from 1440px desktop down to the native app.',
          },
          hero: {
            src: '/projects/OarHealth/designSystem.webp', // '/projects/oar/system-hero.png'
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
        rationale:
          'Wide exploration first, validation before engineering — convergence is only honest when there were real alternatives to converge from.',
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
          src: '/projects/OarHealth/team1.webp', // '/projects/OarHealth/team.webp'
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

  // ═══════════════════════════════════════════════════════════
  // BACKGAMMON GALAXY — designer × developer case study.
  // Images go in /public/projects/Backgammon/ — every slot has a
  // placeholder saying what to export. Verify the numbers marked
  // "verify" before publishing.
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'backgammon-galaxy',
    thumb: '/projects/thumbs/backgammon.webp', // home-page thumbnail — your own design, not a case-study image
    hook: 'A 2-star app, rebuilt to 4.3.',
    title: 'Designing — and building — Backgammon Galaxy',
    subtitle: 'Backgammon Galaxy • Gaming • Product Design + Front-end',
    tag: 'Case study',

    // '/projects/Backgammon/hero.mp4' — gameplay in motion is the
    // strongest possible cover for a game product.
    cover: '/projects/Backgammon/cover1.webp',
    coverPlaceholder:
      'HERO — gameplay recording (hero.mp4): a live match with the hint arrows firing, or your best board frame.',

    summary:
      'Backgammon Galaxy is the world’s biggest backgammon community — 100,000+ games a day, founded by grandmasters, and organizer of live events from the World Championship in Monte Carlo to the UBC. I redesigned the mobile app end to end, rebranded the website, built the design system — and once developers delivered the first build, finished it myself in code until it matched the designs exactly.',
    role: 'Product Designer & Front-end Developer',
    team: 'Art Director, CEO, PM, Web / Mobile / Back-end Engineers, QA',
    tools: 'Figma, React, Git, Docker',
    outcome: 'A full mobile app, a rebranded website, and a 334-component design system — shipped pixel-perfect.',

    metrics: [
      { value: '2 → 4.3', label: 'app rating — old app vs. the redesign' }, // verify exact figures
      { value: '15k', label: 'peak concurrent players after rollout' }, // verify
      { value: '334', label: 'components in the design system' }, // verify against Figma
      { value: '100%', label: 'design-to-build fidelity, closed in code myself' },
    ],

    // Page theme — the app's own color grammar: blue = action,
    // gold = value. Applied while this case study is open;
    // leaving the page restores the site's light look.
    theme: {
      '--bg': '#0E1116',
      '--ink': '#F2F4F8',
      '--ink-soft': '#98A2B6',
      '--line': '#252C3A',
      '--accent': '#3D6BFF', // electric blue — action, navigation, links
      '--accent-soft': '#1A2130', // panel surfaces, chart tracks
      '--gold': '#F2B138', // value — metrics, stars, the 15,000
    },

    // Home-card paint only — the case study itself keeps the near-black
    // theme above; the home grid gets a richer navy so the card doesn't
    // read as plain black next to the light cards.
    cardTheme: {
      '--bg': '#1E2F63',
      '--ink': '#F2F4F8',
      '--ink-soft': '#B9C5EA',
      '--accent': '#F2B138',
    },

    nav: [
      { id: 'overview', label: 'Overview' },
      { id: 'mobile', label: 'Mobile' },
      { id: 'website', label: 'Website' },
      { id: 'academy', label: 'Academy' },
      { id: 'gameplay', label: 'Gameplay' },
      { id: 'system', label: 'System' },
      { id: 'guides', label: 'Guides' },
      { id: 'code', label: 'Design → Code' },
      { id: 'reflection', label: 'Reflection' },
    ],

    sections: {
      // ══ OVERVIEW ══════════════════════════════════════════════
      overview: {
        id: 'overview',
        problemEyebrow: 'The problem',
        problemParagraphs: [
          'Backgammon Galaxy is where the game lives online: **the world’s biggest backgammon community**, **100,000+ games a day**, founded by grandmasters — and behind live events from the **World Championship in Monte Carlo** to the Ultimate Backgammon Championship. A platform with those stakes deserved better than what it had.',
          'Backgammon is deep strategy under time pressure: board positions, candidate moves, the doubling cube — all evaluated while a clock runs. Yet the platform had an aging website, a mobile app players rated 2 out of 5, and no way to help players learn without interrupting the game.',
          'And between design and engineering sat a gap: an art director who didn’t work with developers, and developers who needed precise answers.',
        ],
        eyebrow: 'The answer',
        titleLead: 'Play and learn.',
        titleRest: 'One ecosystem — designed, systematized, and built.',
        rationale:
          'This page shows both halves of my craft: deciding designs at the source, then finishing the build in code so nothing gets lost in translation.',
        paragraphs: [
          'I worked both sides of the product: deciding the designs with the CEO and art director, briefing engineering through detailed Figma guides — and once developers delivered the first build, going into the code myself to close every gap between design and production.',
        ],
        ownership: {
          rows: [
            {
              term: 'Mobile app',
              detail: 'Redesigned end to end — sign-up through lobby, dashboard, messaging, analytics',
            },
            { term: 'Website', detail: 'Full redesign with new branding and new features' },
            { term: 'In-game coaching', detail: 'The Hint → Detailed Analysis system' },
            { term: 'Quiz Academy', detail: 'Expert courses turned into a structured learning journey' },
            { term: 'Design system', detail: '334 components covering a state-heavy product' },
            {
              term: 'Final-mile code',
              detail: 'Refined the developers’ front-end myself until it matched the designs',
            },
            {
              term: 'Design–dev bridge',
              detail: 'One line from CEO and art director to PM and developers — no back-and-forth',
            },
          ],
        },
      },

      // ══ WORK SECTIONS ════════════════════════════════════════
      work: [
        // ── 01 MOBILE APP ─────────────────────────────────────────────
        {
          id: 'mobile',
          eyebrow: 'Section 01',
          titleLead: 'The mobile app.',
          titleRest: 'From two stars to four point three.',
          rationale:
            'Landscape first, to meet existing players where they were; portrait V3 when the design deserved to break from the past. Knowing when to bridge and when to break was the real decision.',
          pos: {
            problem:
              'The old mobile app was landscape-only, carried the old branding, missed the ecosystem’s new features — and players said so: it sat at roughly 2 out of 5 in the stores.',
            opportunity:
              'A full redesign on the new design system and branding could bring the whole ecosystem — play, learning, social, economy, analytics — to the platform players actually carry.',
            solution:
              'A full redesign on the new system: sign-up through lobby, dashboard, messaging, boards, and the coin shop. Landscape first to meet old-app players where they were — then the portrait v3. The rating climbed from about 2 to 4.3.',
          },
          hero: {
            src: '/projects/Backgammon/mobile1.webp', // '/projects/Backgammon/mobile-hero.png'
            placeholder: 'SOLUTION HERO — the mobile lobby, or a lineup of the key mobile screens.',
            caption: 'The lobby: every way to play, one screen.',
          },
          showcase: [
            {
              heading: 'Landscape first, portrait when it counted',
              text: 'The old app was landscape, so the redesign started there — new branding and system on a format players already knew, shipped sooner. Then V3 rebuilt it in portrait: one-handed, natural, the best design of the three. Knowing when to bridge from the old and when to break from it was the job.',
              image: {
                src: '/projects/Backgammon/mobile2.webp', // '/projects/Backgammon/mobile-v1-v3.png'
                placeholder: 'ONE combined frame — the landscape V1 beside the portrait V3 of the same screen.',
              },
            },
            {
              heading: 'Onboarding that makes the experience unique',
              text: 'New players identify as Newbie through Advanced during sign-up — the foundation for personalized learning and fair matches, captured before the first game.',
              image: {
                src: '/projects/Backgammon/mobile3.webp', // '/projects/Backgammon/mobile-v1-v3.png'
                placeholder: 'Sign-up → verification → skill-level selection → lobby. Recording works great.',
              },
            },
            {
              heading: 'A dashboard that’s yours',
              text: 'Rating, bankroll, current board and avatar, matches, leaderboards — in configurable rows, so a grinder and a casual player see different homes.',
              image: {
                src: '/projects/Backgammon/mobile4.webp', // '/projects/Backgammon/mobile-dashboard.png'
                placeholder: 'Mobile dashboard with configurable rows.',
              },
            },
            {
              heading: 'A lot of data, very little screen',
              text: 'The analytics page had far more to say than a phone has room for — ratings, performance, match history, blunders. Most of the design time went into structure: what earns the first screen, what collapses, what waits behind a tap.',
              image: {
                src: '/projects/Backgammon/mobile5.webp', // '/projects/Backgammon/mobile-analytics.png'
                placeholder: 'Mobile analytics page — the dense-data layout, or 2–3 screens of its hierarchy.',
              },
            },
            {
              heading: 'Messaging, on both platforms',
              text: 'Friends, conversations, player search, invites — designed once as a system, shipped on mobile and web.',
              image: {
                src: '/projects/Backgammon/mobile6.webp', // '/projects/Backgammon/messaging.png'
                placeholder: 'Messaging — conversation list + chat, mobile and web side by side.',
              },
            },
          ],
          grid: {
            title: 'Around the app',
            cols: 3,
            images: [
              { src: '/projects/Backgammon/mobile7.webp', placeholder: 'Boards — selection & locked levels' },
              { src: '/projects/Backgammon/mobile8.webp', placeholder: 'Coin shop — bundles & bonuses' },
              { src: '/projects/Backgammon/mobile9.webp', placeholder: 'Profile / social screens' },
            ],
          },
          // Animated on scroll: stars fill from 2.0 to 4.3.
          impact: {
            type: 'rating',
            from: 2,
            to: 4.3, // verify exact figure
            outOf: 5,
            heading: 'What players said',
            label: 'App store rating after the redesign — up from about 2.0 on the old app.',
          },
        },

        // ── 02 WEBSITE ────────────────────────────────────────────────
        {
          id: 'website',
          eyebrow: 'Section 02',
          titleLead: 'The website.',
          titleRest: 'A rebrand, rebuilt page by page.',
          rationale:
            'One visual language across web and mobile — so every new feature could launch everywhere at once, instead of arriving platform by platform.',
          pos: {
            problem:
              'The existing site carried old branding and an old structure — and none of the features the platform was growing into.',
            opportunity:
              'The new brand — dark navy surfaces, electric blue, gold for currency — could carry an entirely rethought site, and every new feature could launch web and mobile together.',
            solution:
              'A full redesign under the new branding, with new sections throughout: the quiz, Play vs AI, Analytics, Play a Friend, messaging, and board selection — one visual language across the whole platform.',
          },
          hero: {
            src: '/projects/Backgammon/cover2.webp', // '/projects/Backgammon/web-hero.png'
            placeholder: 'SOLUTION HERO — the redesigned website main page, new branding on full display.',
            caption: 'The new face of the platform.',
          },
          showcase: [
            {
              heading: 'Old site, new site',
              text: 'Same platform, different decade. One combined before/after shows how far the rebrand moved it.',
              image: {
                src: '/projects/Backgammon/mobile21.webp', // '/projects/Backgammon/web-before-after.png'
                placeholder: 'ONE combined frame — old website beside the redesign.',
              },
            },
            {
              heading: 'Chat with your friends and opponents',
              text: 'Real-time conversation built into the platform — talk with your opponent mid-match or pick up a thread with friends, with the same messaging system carried across web and mobile.',
              image: {
                src: '/projects/Backgammon/mobile22.webp', // '/projects/Backgammon/web-analytics.png'
                placeholder: 'Analytics page — charts and match insights.',
              },
            },
          ],
          // Animated on scroll: counter + dot field fill to 15,000.
          impact: {
            type: 'peak',
            value: 15000, // verify exact figure
            heading: 'The whole galaxy, online at once',
            label: 'Peak concurrent players after the new version rolled out.',
          },
        },

        // ── 03 QUIZ ACADEMY & AI ──────────────────────────────────────
        {
          id: 'academy',
          eyebrow: 'Section 03',
          titleLead: 'The academy.',
          titleRest: 'Grandmaster knowledge, ten problems at a time.',
          rationale:
            'Learning had to feel like playing: the verdict lands before the explanation, because the emotional beat teaches more than the paragraph.',
          pos: {
            problem:
              'Advanced backgammon knowledge lives in dense books and engine outputs. Nothing in the product turned it into a journey a beginner could actually walk.',
            opportunity:
              'Expert-authored problems, structured like a game: categories, progress, streaks of feedback — learning that feels like playing.',
            solution:
              'Quiz Academy: Easy to Hard categories, courses of 10 to 50 problems with saved progress, instant “Excellent” / “Nope” feedback before the explanation, and a celebration at the end. Beside it, Play vs AI: opponents from Rookie to Galactic Master with configurable coaching, format, and fees.',
          },
          hero: {
            src: '/projects/Backgammon/cover3.webp', // '/projects/Backgammon/academy-hero.png'
            placeholder: 'SOLUTION HERO — the Quiz Academy entry: categories, courses, progress states.',
            caption: 'Courses with states, progress, and a reason to come back.',
          },
          showcase: [
            {
              heading: 'Feedback first, lesson second',
              text: 'Pick a move, get the verdict instantly, then see the correct move and why. The emotional beat lands before the explanation asks for attention.',
              image: {
                src: '/projects/Backgammon/mobile31.webp', // '/projects/Backgammon/quiz-flow.mp4'
                placeholder: 'RECORDING — a quiz problem: answer → “Excellent”/“Nope” → explanation → next.',
              },
            },
            {
              heading: 'An opponent for every level',
              text: 'Rookie to Galactic Master, with match format, coaching assistance, hints and pip count all configurable — and membership deciding how much flexibility you get.',
              image: {
                src: '/projects/Backgammon/mobile32.webp', // '/projects/Backgammon/play-vs-ai.png'
                placeholder:
                  'Play vs AI — opponent selection + match configuration, Free vs Star entitlements visible.',
              },
            },
          ],
        },

        // ── 04 GAMEPLAY & COACHING ────────────────────────────────────
        {
          id: 'gameplay',
          eyebrow: 'Section 04',
          titleLead: 'The game.',
          titleRest: 'Coaching that never interrupts the match.',
          rationale:
            'Coaching lives inside the match because lessons stick at the moment of the mistake — not in a report after the game is lost.',
          pos: {
            problem:
              'Evaluating moves and cube decisions under a running clock is where players blunder — and where they quit. Traditional analysis lives after the game, when the lesson no longer sticks.',
            opportunity:
              'Expert-grade analysis — equity differences, winning chances, cube verdicts — already existed in engines. The design question: surface it inside live play, progressively, without breaking the flow of a match.',
            solution:
              'A Hint → Detail system. Request a hint (coins permitting) and suggested-move arrows appear on the board; open Detail for candidate moves, equity, and winning chances. Cube decisions get their own verdicts — from No Double to Cube Blunder — and if you already made the best move, the system says so.',
          },
          hero: {
            src: '/projects/Backgammon/cover4.webp', // '/projects/Backgammon/gameplay-hero.png' or .mp4
            placeholder:
              'SOLUTION HERO — the live match screen: board, clocks, ratings, dice, with hint arrows visible. Recording > still.',
            caption: 'Everything a match needs, with coaching one tap away.',
          },
          showcase: [
            {
              heading: 'Hint, then Detail',
              text: 'Arrows suggest the move; Detail explains it — candidate moves ranked by equity and winning chances. After you move, it resets and the clock never stopped mattering.',
              image: {
                src: '/projects/Backgammon/mobile41.webp', // '/projects/Backgammon/hint-flow.mp4'
                placeholder: 'RECORDING — hint requested → arrows appear → Detail panel opens → move made.',
              },
            },
            {
              heading: 'Feedback that names the move',
              text: 'Correct, good, error, blunder — and the full cube vocabulary from Excellent Take to Missed Cube. Players learn the language of the game while playing it.',
              image: {
                src: '/projects/Backgammon/mobile42.webp', // '/projects/Backgammon/feedback-states.png'
                placeholder:
                  'Feedback states — correct / good / error / blunder plus cube verdicts, composed on one frame.',
              },
            },
            {
              heading: 'One event, three audiences',
              text: 'When a player goes inactive, three people see three different screens: the inactive player gets a countdown, the opponent gets context, the spectator gets an update. Role-specific communication instead of one generic notification.',
              image: {
                src: '/projects/Backgammon/mobile43.webp', // '/projects/Backgammon/inactivity.png'
                placeholder:
                  'ONE frame — the inactivity flow from all three perspectives: player, opponent, spectator.',
              },
            },
          ],
        },

        // ── 05 DESIGN SYSTEM ──────────────────────────────────────────
        {
          id: 'system',
          eyebrow: 'Section 05',
          titleLead: 'The system.',
          titleRest: '334 components for a thousand states.',
          rationale:
            'Every variant exists because a screen needed it. I was also the developer consuming this system — so it had to stay honest.',
          pos: {
            problem:
              'A product with live gameplay, an economy, memberships, and error states everywhere cannot be designed screen by screen — it drifts apart within a sprint.',
            opportunity:
              'Every repeated pattern — buttons, dialogs, countdowns, user tiles, chat messages, coin packs, board levels, pre-match dialogs — could become a component the whole team, including me as its developer, could trust.',
            solution:
              'A comprehensive component library: 80 component sets, 334 components, 5,000+ instances across the file — covering navigation, inputs and validation, overlays, notifications, gameplay messages, leaderboards, and the analysis sidebar.',
          },
          hero: {
            src: '/projects/Backgammon/cover5.webp', // '/projects/Backgammon/system-hero.png'
            placeholder: 'SOLUTION HERO — a composed sheet of the component library: sets, variants, states.',
            caption: 'The shared language of the whole platform.',
          },
          showcase: [
            {
              heading: 'Built to be built',
              text: 'Because I was also implementing these components in code, the system stayed honest: every variant existed because a screen needed it, named so a developer — me — could find it. The next maturity step I scoped: a semantic token layer and consolidation of legacy variants.',
              image: {
                src: '/projects/Backgammon/mobile51.webp', // '/projects/Backgammon/system-states.png'
                placeholder:
                  'A state-heavy component set — e.g. dialogs or gameplay messages with all variants visible.',
              },
            },
            {
              heading: 'One component, every variant',
              text: 'Each component set carries its full range — sizes, states, platforms — so no screen ever needed a one-off. When a developer reached for a button or a dialog, the exact variant was already there, named and ready.',
              image: {
                src: '/projects/Backgammon/mobile52.webp', // '/projects/Backgammon/system-variants.png'
                placeholder:
                  'VARIANTS — one component set opened up: every size, state and platform variant on one frame.',
              },
            },
          ],
        },

        // ── 06 THE GUIDES ─────────────────────────────────────────────
        // How detailed feedback + step-by-step instructions kept
        // the build at 100% accuracy. Cover + two showcase rows.
        {
          id: 'guides',
          eyebrow: 'Section 06',
          titleLead: 'The guides.',
          titleRest: 'Feedback so precise, nothing bounced back.',
          rationale:
            'Vague feedback loops forever. Naming the exact element, the exact value and the exact step turned reviews into checklists that converge.',
          pos: {
            problem:
              '“Make it match the design” is not an instruction. Left vague, every review round becomes a guessing game — and the gap between Figma and production never closes.',
            opportunity:
              'If feedback named the exact element, the exact value, and the exact step to take, developers could fix without asking — and reviews would converge instead of looping.',
            solution:
              'Detailed guides for every handoff and every review: annotated screens pointing at precise issues, with numbered steps to follow — spacing values, states, timing — so each round ended closer to 100%, not just different.',
          },
          hero: {
            src: '/projects/Backgammon/cover6.webp', // '/projects/Backgammon/guides1.png'
            placeholder:
              'COVER — a full annotated guide page: a screen marked up with numbered pointers and exact corrections.',
            caption: 'Not “fix the spacing” — which element, which value, which step.',
          },
          showcase: [
            {
              heading: 'Point at the pixel, not the page',
              text: 'Every issue got a numbered pointer on the exact element: the current value, the intended value, and the component it should come from. No translation needed on the other side.',
              image: {
                src: '/projects/Backgammon/mobile61.webp', // '/projects/Backgammon/guides2.png'
                placeholder:
                  'DETAIL — a close-up of annotated feedback: numbered markers, current vs. intended values.',
              },
            },
            {
              heading: 'Steps to follow, in order',
              text: 'Each guide ended as a checklist: do this, then this, verify against that frame. Developers could work through it top to bottom — and when the list was done, the screen matched the design.',
              image: {
                src: '/projects/Backgammon/mobile62.webp', // '/projects/Backgammon/guides3.png'
                placeholder: 'STEPS — the step-by-step instruction list a developer followed to close a screen.',
              },
            },
          ],
        },
      ],

      // ══ DESIGN → CODE (the differentiator) ═══════════════════
      process: {
        id: 'code',
        eyebrow: 'Both sides of the handoff',
        titleLead: 'Design → code.',
        titleRest: 'I was the handoff.',
        rationale:
          'I collapsed the loop between leadership and developers because the cheapest fix for endless back-and-forth is one person who speaks both languages.',
        intro:
          'Before this, every design decision bounced: CEO, art director, product manager, developers, and back again. I collapsed the loop — deciding at the source, briefing engineering precisely, and finishing the build myself in code so the back-and-forth ended.',
        steps: [
          {
            number: '01',
            title: 'Decide at the source',
            text: 'Design decisions made directly with the CEO and art director — the three of us as the decision-makers, so direction was settled before it ever reached a ticket.',
          },
          {
            number: '02',
            title: 'Brief through the PM',
            text: 'Detailed guides in Figma — exactly what should be what, state by state — handed to the product manager who ran the developer teams. Precision in, so questions didn’t come back out.',
          },
          {
            number: '03',
            title: 'Let the build land',
            text: 'Web, mobile, and back-end developers delivered the first version from those guides — about 80% of the way there.',
          },
          {
            number: '04',
            title: 'Close the last mile in code',
            text: 'Then I went into the front-end repositories myself — GitHub projects running in Docker containers — and refined the build until design and development were indistinguishable. No more rounds of feedback; I just fixed it.',
          },
        ],
        image: {
          src: null, // '/projects/Backgammon/design-to-code.png'
          placeholder:
            'OPTIONAL — a split shot: Figma frame beside the identical shipped screen, or your code/PR view next to the design.',
          caption: 'The design, and the build of it — indistinguishable on purpose.',
        },
        partners: {
          title: 'Who I worked between',
          items: [
            {
              label: 'CEO & Art Director',
              text: 'Design decided together at the source — no relay, no telephone game.',
            },
            {
              label: 'Product Manager',
              text: 'My channel into the developer teams — briefed with detailed Figma guides, not vague tickets.',
            },
            {
              label: 'Engineers',
              text: 'Web, mobile, and back-end delivered the first build; I finished it alongside them in the repos.',
            },
            { label: 'QA', text: 'Verified behavior after my fidelity pass had already caught the visual drift.' },
          ],
        },
      },

      // ══ REFLECTION ════════════════════════════════════════════
      reflection: {
        id: 'reflection',
        title: 'What building my own designs taught me',
        text: 'Finishing the build myself changed how I design: anything I drew, I might later have to code, so ambiguity stopped at the Figma file. Collapsing the loop between a CEO, an art director, a PM and three developer teams taught me the cheapest fix for endless back-and-forth is one person who speaks both languages — and the mobile app — from a 2-star landscape legacy to a 4.3-rated portrait redesign — taught me when to bridge from what users know and when to break from it.',
      },
    },
  },

  // ═══════════════════════════════════════════════════════════
  // SUITEFLOW / LA SUITE NUMÉRIQUE — HCI research case study.
  // DesignAthon team of three (you, Shubham Bhatt, Ons Sammari)
  // at LISN under Wendy Mackay — VERIFY teammates are okay being
  // named, and add/adjust supervisor credits as they'd want.
  // Images → /public/projects/LaSuite/. Your three screenshots:
  // canvas1.png, phases1.png, phases2.png (already wired).
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'la-suite-numerique',
    thumb: '/projects/thumbs/lasuite.webp', // home-page thumbnail — your own design, not a case-study image
    hook: 'Six apps became one canvas.',
    title: 'SuiteFlow: rethinking La Suite Numérique as one canvas',
    subtitle: 'La Suite Numérique • LISN, Université Paris-Saclay • HCI Research',
    tag: 'Research prototype',

    // Ideal cover: a recording of the scenario — the poll being
    // dragged into a spreadsheet beats any still.
    cover: '/projects/LaSuite/cover1.webp',
    coverPlaceholder:
      'HERO — the canvas in use: chat, video call, people list and spreadsheet side by side on one surface.',

    summary:
      'La Suite Numérique is Europe’s answer to Google Workspace — but it launched as separate look-alike apps: a Zoom, a Gmail, an Excel, a Slack. At LISN, under Wendy Mackay, our team of three asked what the suite could be if the apps actually knew each other — and designed SuiteFlow: a canvas where chats, sheets, calls and emails share one surface, one toolbar, and data that moves between them by drag.',
    role: 'HCI Research & Design — team of three', // with Shubham Bhatt & Ons Sammari (verify naming is okay)
    team: 'LISN, Université Paris-Saclay — supervised by Wendy Mackay', // verify full supervisor credits
    tools: 'Paper, video, Figma',
    outcome:
      'A working design concept demonstrated end to end: one scenario — reschedule a meeting, delegate the work — completed without ever leaving the canvas.',

    metrics: [
      { value: '7 → 1', label: 'separate services, rethought as one shared canvas' },
      { value: '4', label: 'prototyping methods before pixels: paper, storyboards, walkthroughs, video' },
      { value: '3', label: 'capabilities: temporal workflows, cross-app data transfer, personalization' },
    ],

    // La Suite's own look: cool paper, French blue.
    theme: {
      '--bg': '#F6F8FC',
      '--ink': '#1B2437',
      '--ink-soft': '#5D6A85',
      '--line': '#DCE3F0',
      '--accent': '#3A5FE5', // La Suite blue
      '--accent-soft': '#E9EEFB',
    },

    nav: [
      { id: 'overview', label: 'Overview' },
      { id: 'canvas', label: 'The canvas' },
      { id: 'scenario', label: 'The scenario' },
      { id: 'sharing', label: 'Sharing' },
      { id: 'method', label: 'Method' },
      { id: 'reflection', label: 'Reflection' },
    ],

    sections: {
      // ══ OVERVIEW ══════════════════════════════════════════════
      overview: {
        id: 'overview',
        problemEyebrow: 'The problem',
        problemParagraphs: [
          'La Suite Numérique is France’s push for **a sovereign European workspace** — but its first generation mirrored the thing it replaced: a copy of Zoom, a copy of Gmail, a copy of Excel, a copy of Slack. Separate apps, separate windows, nothing shared.',
          'The real work people do — reschedule a meeting, gather answers, brief an intern — cuts across all of them. Every app switch was a seam where context, data and attention leaked.',
        ],
        eyebrow: 'The answer',
        titleLead: 'SuiteFlow.',
        titleRest: 'A workspace where the apps finally know each other.',
        rationale:
          'Europe’s workspace shouldn’t copy the silos it replaces. The canvas exists so work can keep flowing where apps used to end.',
        paragraphs: [
          'We designed a workspace built on a shared canvas: chats, spreadsheets, documents, calls and emails live side by side as windows on one surface, draw from **one shared toolbar**, and pass data between each other by **drag** — everything behaving as a substrate, so information keeps its meaning as it moves. And we proved it the way the lab proves things: one real scenario, played end to end, from paper to video prototype.',
        ],
        ownership: {
          rows: [
            { term: 'The team', detail: 'Three of us, at LISN under Wendy Mackay' }, // name teammates if they agree
            {
              term: 'Concept & interaction design',
              detail: 'The canvas model, marquee menu, shared toolbar, cross-app flows',
            },
            { term: 'Paper prototyping', detail: 'The first canvas lived on paper, moved by hand' },
            { term: 'Storyboards & walkthroughs', detail: 'Generative walkthroughs of the scheduling scenario' },
            { term: 'Video prototype', detail: 'The full scenario, acted and filmed end to end' },
            { term: 'High-fidelity design', detail: 'The canvas, groups, access and storage system in Figma' },
          ],
        },
      },

      // ══ WORK SECTIONS ════════════════════════════════════════
      work: [
        // ── 01 THE CANVAS ─────────────────────────────────────────────
        {
          id: 'canvas',
          eyebrow: 'Section 01',
          titleLead: 'The canvas.',
          titleRest: 'Familiar at the edges, new in the middle.',
          rationale:
            'Novelty is spent only where it buys capability. The edges stay familiar so users’ hands know where to go; the middle becomes one shared surface.',
          pos: {
            problem:
              'Replace six apps with something alien, and nobody comes. Users arrive carrying mental models from Slack, Drive and Sheets — a new workspace that ignores them starts from zero trust.',
            opportunity:
              'Keep the edges familiar — people and conversations on the left, storage below, tools at the bottom, tabs on top — and spend the novelty where it pays: the middle, where apps become windows on one shared surface.',
            solution:
              'A canvas workspace. The left bar reads like Slack: Teams & People, Conversations, threads. Tabs on top work like a browser — each one its own canvas for its own workflow. The center is new: open a chat, create a spreadsheet beside it, start a call, draft an email, all arranged like a desk.',
          },
          hero: {
            src: '/projects/LaSuite/cover2.webp',
            placeholder:
              'HERO — the Intern Meeting canvas: chat, video call people list, and attendance spreadsheet side by side.',
            caption: 'One tab, one task: the chat, the call, and the attendance sheet share a desk.',
          },
          showcase: [
            {
              heading: 'One gesture to anything',
              text: 'Drag a rectangle on empty canvas — the way you select files on a desktop — and the marquee menu appears: pick a service, and without releasing, slide onto your recent people and teams. One continuous gesture takes you from blank space to an open chat with the whole design team.',
              image: {
                src: '/projects/LaSuite/video21.mp4', // '/projects/LaSuite/marquee.png' or .mp4 — a recording sells this gesture
                placeholder:
                  'THE MARQUEE MENU — drag-select on empty canvas → service menu pops → hover to “Design Team” → chat created. Recording strongly preferred.',
              },
            },
            {
              heading: 'Storage that takes anything',
              text: 'The cloud storage isn’t just for files. Drag a whole canvas into it and its latest state is saved as a reusable template; drag in a set of people, a call transcript, a poll. If it exists on the canvas, it can be kept, reused, and shared.',
              image: {
                src: '/projects/LaSuite/video22.mp4', // '/projects/LaSuite/storage.png'
                placeholder:
                  'DETAIL — the Cloud Storage panel: a saved canvas template, saved people, and a transcript alongside docs and tables.',
              },
            },
            {
              heading: 'One toolbar for every app',
              text: 'We observed that most La Suite tools share the same core instruments — so we gave them one toolbar. Bold works in the document, the spreadsheet cell, the chat. Alignment lines up text in a doc — and windows on the canvas. Learned once, used everywhere. This is **instrumental interaction** in practice — Michel Beaudouin-Lafon’s model of tools as first-class instruments, decoupled from any single application (CHI 2000).',
              image: {
                src: '/projects/LaSuite/image21.webp', // '/projects/LaSuite/toolbar.png'
                placeholder:
                  'DETAIL — the shared bottom toolbar acting on a document, a spreadsheet, and the canvas itself.',
              },
            },
            {
              heading: 'Old world, new world',
              text: 'Six separate look-alike services on one side; the canvas on the other. The layout kept what users already understood, so the leap in capability didn’t cost a leap in learning.',
              image: {
                src: '/projects/LaSuite/video23.mp4', // '/projects/LaSuite/old-new.png'
                placeholder:
                  'ONE combined frame — the old separate apps (grid of six) beside the new canvas workspace.',
              },
            },
          ],
          // How the canvas was found, not just what it became:
          // sticky notes, sketches, and paper prototypes. Drop your
          // photos into /public/projects/LaSuite/ and set the paths.
          // (Photos showing teammates' faces: get their okay first.)
          grid: {
            title: 'Before the pixels',
            cols: 3,
            images: [
              {
                src: '/projects/LaSuite/image22.webp',
                placeholder: 'Sticky notes — mapping the six apps into the canvas concept',
              },
              {
                src: '/projects/LaSuite/image23.webp',
                placeholder: 'Low-fi sketch — first canvas layout, edges vs. middle',
              },
              { src: '/projects/LaSuite/image24.webp', placeholder: 'Paper prototype — pieces on the table' },
            ],
          },
        },

        // ── 02 THE SCENARIO (substrates, end to end) ──────────────────
        {
          id: 'scenario',
          eyebrow: 'Section 02',
          titleLead: 'The scenario.',
          titleRest: 'Reschedule a meeting without leaving the canvas.',
          rationale:
            'One real task, played end to end — because a concept is only proven when data crosses every border without being retyped once. Substrates, the lab’s own research line, made that testable.',
          pos: {
            problem:
              'In the old suite this errand is six apps: read the message, poll the team, tally answers, make the list, schedule the call, send the email. Data is retyped at every border.',
            opportunity:
              'If every object is a substrate — data with behavior, not a picture of data — then a poll stays tabular, a column stays a list of people, a meeting stays joinable, wherever you drag it. This builds on the lab’s **information substrates** research (Webstrates — Klokmose, Eagan, Baader, Mackay & Beaudouin-Lafon, UIST 2015).',
            solution:
              'We played one real task end to end: Ross asks for the intern welcome meeting to be moved. From his first message to the final email — poll, spreadsheet, people list, scheduled call, invitation — nothing is retyped and nothing leaves the canvas.',
          },
          // The three personas the scenario follows (from the deck).
          cast: [
            { name: 'Ross', role: 'Head of the design team — asks for the meeting to move' },
            { name: 'Harry', role: 'HR — reschedules it without leaving the canvas' },
            { name: 'Teresa', role: 'The new intern — onboarded in the next section' },
          ],
          // No hero here on purpose: the seven steps below ARE the
          // scenario, told once, in order. A full recording up front
          // would spoil and then repeat them. (If you have the
          // polished screen recording, step images can be swapped
          // for short clips — each step showing only its own move.)
          hero: null,
          // A true sequence — told as one.
          showcase: [
            {
              heading: '1 — The ask arrives, with the calendar in it',
              text: 'Ross’s message lands: move the welcome meeting. He’s already dragged a slot from his calendar into the chat — not a screenshot of a date, a live slot, ready to be used downstream.',
              image: {
                src: '/projects/LaSuite/scenario1.mp4', // '/projects/LaSuite/flow1.png'
                placeholder: 'STEP 1 — Ross’s chat message with the live calendar slot (18 July) embedded.',
              },
            },
            {
              heading: '2 — Ask the team, where they already talk',
              text: 'One marquee gesture opens a chat with the design team. From the shared toolbar’s widgets, a poll drops into the thread: who can make the new date? Votes land as people answer.',
              image: {
                src: '/projects/LaSuite/scenario2.mp4', // '/projects/LaSuite/flow2.png'
                placeholder: 'STEP 2 — the poll widget inside the design-team chat, votes arriving.',
              },
            },
            {
              heading: '3 — The poll becomes a table',
              text: 'Drag the finished poll onto the canvas and it lands as a spreadsheet — the AI reads the content and names the columns itself: Name, Attending. Live rows, not a pasted picture.',
              image: {
                src: '/projects/LaSuite/scenario3.webp', // '/projects/LaSuite/flow3.png'
                placeholder: 'STEP 3 — the poll as spreadsheet rows, columns auto-named Name / Attending.',
              },
            },
            {
              heading: '4 — Ask the AI for the yes-list',
              text: 'Drop the AI instrument on the two columns and ask: “who’s joining?” It answers as a new spreadsheet — just the people who said yes.',
              image: {
                src: '/projects/LaSuite/scenario4.mp4', // '/projects/LaSuite/flow4.png'
                placeholder: 'STEP 4 — the AI instrument on the columns, producing the filtered yes-sheet.',
              },
            },
            {
              heading: '5 — People and a date make a meeting',
              text: 'A new video call opens on the canvas. The yes-list drags into its people field — everyone added at once — and Ross’s original calendar slot drags in as the time. The meeting is scheduled without typing a single name. (Dragging a whole team from the left bar works the same way — anything that accepts people, accepts people.)',
              image: {
                src: '/projects/LaSuite/scenario5.mp4', // '/projects/LaSuite/flow5.png'
                placeholder: 'STEP 5 — the video call with the dragged-in people list and Ross’s slot as the date.',
              },
            },
            {
              heading: '6 — Text becomes the email',
              text: 'A plain text note on the canvas — “the meeting has been rescheduled…” — gets marquee-selected and turned into an email: To field, attachments, the lot. The people list fills To; the meeting itself drops into the body. When it arrives, the invitation contains the live call: open the email, join the room.',
              image: {
                src: '/projects/LaSuite/scenario6.mp4', // '/projects/LaSuite/flow6.png'
                placeholder: 'STEP 6 — canvas text transformed into an email, people in To, joinable meeting embedded.',
              },
            },
            {
              heading: 'Then the desk gets cleaned',
              text: 'Select everything the errand produced — chat, sheet, call, email — group it, let the AI suggest its name, and minimize. The canvas is clean; the whole workflow waits in one box, reopenable whenever it’s needed again.',
              image: {
                src: '/projects/LaSuite/scenario7.webp', // '/projects/LaSuite/flow7.png'
                placeholder: 'CLOSER — the finished services grouped, AI-named, minimized to one tidy box.',
              },
            },
          ],
          // The same scenario, acted out in paper and filmed — a
          // distinct annex panel at the end of this section, so it
          // reads as "the paper version of what you just read".
          aside: {
            eyebrow: 'Video prototype',
            heading: 'This exact scenario, played in paper first',
            // **words** render in the accent color. The method name
            // and its origin carry the color — the credibility bits.
            text: 'This is a **video prototype** — a participatory-design technique from **Wendy Mackay’s** research (Mackay & Fayard, CHI ’99): the interface is paper, a hand plays the computer, and the camera frames it like a screen. We acted the seven steps above start to finish — cheap enough to discard, yet real enough to critique as a lived experience before a single pixel existed.',
            src: '/projects/LaSuite/paper-scenario.mp4',
            placeholder: 'PAPER VIDEO — the whole scheduling scenario played with paper pieces, start to finish.',
            caption: 'Click to watch it full-screen.',
          },
        },

        // ── 03 SHARING BY ARRANGEMENT ─────────────────────────────────
        {
          id: 'sharing',
          eyebrow: 'Section 03',
          titleLead: 'Sharing.',
          titleRest: 'Arrange things together, and they’re shared.',
          rationale:
            'Spatial arrangement already says what belongs together. So we made grouping the act of sharing, and let context do the permission bookkeeping.',
          pos: {
            problem:
              'Onboarding Teresa, the intern, the old way means forwarding five links, setting permissions on each, and hoping she finds the tasks. Sharing is explicit, repetitive, and always one checkbox away from wrong.',
            opportunity:
              'On a canvas, spatial arrangement already says what belongs together. Let grouping be the act of sharing — and let the system read context (deadlines, assignees) to do the bookkeeping.',
            solution:
              'Ross groups the sheet, the document, the recording and the task list; because Teresa is assigned inside, the group is shared with her — no share dialog. He limits her access to two spreadsheet columns and one region of the document (the form she must fill), the AI suggests the group’s name, and a timeline assembles itself from the tasks’ deadlines.',
          },
          hero: {
            src: '/projects/LaSuite/cover4.mp4',
            placeholder:
              'HERO — a grouped phase: recording, notes, document, tasks and sheet, marked Completed, with view access.',
            caption: 'A group: the work, its status, and who may touch what — in one frame.',
          },
          showcase: [
            {
              heading: 'Assign by dropping a person',
              text: 'Tasks work like everything else: drag Teresa from Teams & People onto a task and it’s hers; drop a whole team and it belongs to all of them. Assignment is a gesture, not a form.',
              image: {
                src: '/projects/LaSuite/image41.mp4', // '/projects/LaSuite/assign.png'
                placeholder: 'DETAIL — a person tile dropped onto a task in the task widget, assignment made.',
              },
            },
            {
              heading: 'Access down to a column',
              text: 'Limited access isn’t per-file, it’s per-part: two columns of the spreadsheet, one region of the document. Teresa sees exactly the form she must fill — the rest of the doc stays Ross’s.',
              image: {
                src: '/projects/LaSuite/image42.webp', // '/projects/LaSuite/access.png'
                placeholder:
                  'DETAIL — limit-access on selected spreadsheet columns and a selected region of a document.',
              },
            },
            {
              heading: 'A timeline the group writes itself',
              text: 'Because the grouped tasks carry deadlines and assignees, the phase renders its own timeline on the rail: Week 2 complete and dimmed behind, Week 3 in progress in front. The project’s history and present, on the same surface.',
              image: {
                src: '/projects/LaSuite/image43.webp',
                placeholder:
                  'DETAIL — Week 2 faded behind, the Week 3 “In progress” group in front, timeline rail on the right.',
              },
            },
          ],
        },
      ],

      // ══ METHOD (the HCI process) ══════════════════════════════
      process: {
        id: 'method',
        eyebrow: 'How we got there',
        titleLead: 'The method.',
        titleRest: 'Paper first, pixels last.',
        rationale:
          'Ideas earn their way up through fidelities — each round cheap enough to throw away, each answering a question the previous one couldn’t.',
        intro:
          'This concept wasn’t sketched straight into Figma. In Wendy Mackay’s lab the ideas earn their way up through fidelities — each round cheap enough to throw away, each one answering a question the previous couldn’t.',
        steps: [
          {
            number: '01',
            title: 'Paper prototypes',
            text: 'The canvas, its windows and its drags — made of paper and moved by hand, so the interaction model could fail fast and cheaply.',
          },
          {
            number: '02',
            title: 'Storyboards',
            text: 'The scheduling scenario drawn frame by frame — Ross’s ask, the poll, the handoff to Teresa — to find where the seams between apps actually hurt.',
          },
          {
            number: '03',
            title: 'Generative walkthroughs',
            text: 'Stepping through the storyboarded task together, generating alternatives at each step instead of judging one design — the marquee menu and the substrate drags came out of these sessions. The format comes from **Generative Theories of Interaction** (Beaudouin-Lafon, Bødker & Mackay, TOCHI 2021).',
          },
          {
            number: '04',
            title: 'Video prototype',
            text: 'The full scenario — message to poll to table to meeting to email — acted out and filmed, so the concept could be critiqued as an experience, not a wireframe.',
          },
          {
            number: '05',
            title: 'High-fidelity canvas',
            text: 'Only then, Figma: the canvas, groups, access and storage designed at full fidelity, carrying every decision the cheaper rounds had already settled.',
          },
        ],
        image: {
          src: null, // '/projects/LaSuite/method.mp4' or method.png
          placeholder:
            'A composed frame of paper prototypes, a storyboard, and a video still — or leave empty; the paper video lives in the Scenario section. Get teammates’ okay for photos showing their faces.',
          caption: 'The idea at four fidelities before a single pixel.',
        },
        partners: {
          title: 'Who was in the room',
          items: [
            {
              label: 'Wendy Mackay',
              text: 'Supervision and method — the discipline of generating alternatives before committing to one.',
            },
            {
              label: 'The team', // verify: name Shubham Bhatt & Ons Sammari if they agree
              text: 'Three of us designing, prototyping and filming together — the concept belongs to the group.',
            },
            {
              label: 'La Suite context',
              text: 'An ecosystem of real services — and the constraint that whatever we proposed had to feel reachable from them.',
            },
            {
              label: 'The literature',
              text: 'Instrumental interaction (Beaudouin-Lafon, CHI 2000) · Reification, polymorphism and reuse (Beaudouin-Lafon & Mackay, AVI 2000) · Webstrates (Klokmose et al., UIST 2015) · Generative theories of interaction (Beaudouin-Lafon, Bødker & Mackay, TOCHI 2021) · Video prototyping (Mackay & Fayard, CHI ’99).',
            },
          ],
        },
      },

      // ══ REFLECTION ════════════════════════════════════════════
      reflection: {
        id: 'reflection',
        title: 'What the lab taught me',
        text: 'Industry taught me to converge fast; the lab taught me to stay divergent longer — the marquee menu and the substrate drags only appeared after we stopped polishing one idea and started generating many. Three ideas from SuiteFlow stay with me: workflows are temporal, so the workspace should have a timeline; data should cross app borders without changing meaning; and familiarity is a design material — we spent novelty only where it bought new capability, and kept everything else where users’ hands already knew to find it.',
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     PROJECT 4 — THINKING MACHINE
     Written from the full design board (Section_1.pdf). Image
     slots name the exact frames to export from that board.
     Figures from the demo data (ACME Corp) are labeled as such.
     ═══════════════════════════════════════════════════════════ */
  {
    slug: 'thinking-machine',
    thumb: '/projects/thumbs/thinkingMachine.webp', // your banner (leading slash added — it was missing)
    thumbMobile: '/projects/thumbs/thinkingMachine-mobile.webp', // taller composition served under 860px
    hook: 'AI that finds money hidden in telecom invoices.',
    title: 'Designing for density at Thinking Machine',
    subtitle: 'Thinking Machine • B2B AI • Product Design',
    tag: 'Case study',

    cover: '/projects/ThinkingMachine/cover1.webm', // '/projects/ThinkingMachine/cover.png' — the full Summary Report dashboard, or a composed spread of the board
    coverPlaceholder:
      'HERO — the Summary Report in its ready state: spend tiles, the savings-range chart, the opportunities table. The platform at full density.',

    summary:
      'Thinking Machine is a B2B AI company that finds savings hidden in enterprise telecom, IT and cloud spending — reading invoices and contracts from 26 countries in 18 languages. As their designer through Toptal, I designed the platform end to end: onboarding that shows the money first, a dashboard honest about its own readiness, a review queue where humans approve every AI finding, cost-centre hierarchies clients build themselves — and a page that admits what the data can’t say. Months later they brought me back for a second engagement: reorganizing the navigation of everything the platform had grown into.',
    role: 'UI/UX Designer (via Toptal)',
    team: 'CEO, ML Engineers, Back-end & Front-end Engineers', // verify the roster
    tools: 'Figma',
    outcome:
      'Two engagements: the full platform, then — when it outgrew itself — the navigation system that made it findable again.', // verify framing

    metrics: [
      { value: '26', label: 'countries’ invoices flowing through one platform' }, // their published figure
      { value: '18', label: 'languages the AI reads contracts in' }, // ditto
      { value: '2', label: 'engagements — they came back for the navigation' },
      { value: '30–40%', label: 'development time cut by the configurable platform' }, // verify — your CV figure
    ],

    // Richard's LinkedIn recommendation — quoted verbatim,
    // verifiable on linkedin.com/in/danial-nasiri
    testimonials: [
      {
        quote:
          "Daniyal is an extremely talented and customer-focussed designer. From our first interview he came with promising ideas for the project and quickly followed through on implementation. He managed to 'wow' each stakeholder with his ability to take complex concepts and produce elegant designs. I highly recommend him.",
        name: 'Richard Martin',
        role: 'Founder & CEO, Thinking Machine',
        source: 'via LinkedIn',
      },
    ],

    // Thinking Machine's own grammar: working blue for structure and
    // action; orange reserved for the human moments (help, upgrade,
    // book a call) — mirrored here as the gold token.
    theme: {
      '--bg': '#F6F8FC',
      '--ink': '#101A2E',
      '--ink-soft': '#5B6880',
      '--line': '#DDE4F0',
      '--accent': '#1554F6',
      '--accent-soft': '#E8EEFE',
      '--gold': '#F7941D',
    },

    nav: [
      { id: 'overview', label: 'Overview' },
      { id: 'onboarding', label: 'Onboarding' },
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'savings', label: 'Savings review' },
      { id: 'structure', label: 'Structure' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'navigation', label: 'Navigation' },
      { id: 'reflection', label: 'Reflection' },
    ],

    sections: {
      overview: {
        id: 'overview',
        problemEyebrow: 'The problem',
        problemParagraphs: [
          'Enterprises overpay for telecom, IT and cloud because nobody can actually read their own bills: thousands of PDF invoices in 18 languages, charges that quietly drift from contract terms, services nobody has used in a year. Thinking Machine’s AI could find the money — but AI findings about money are worthless until a finance team can **see them, interrogate them, and sign off on them**.',
        ],
        eyebrow: 'The project',
        titleLead: 'A platform that reads the unreadable.',
        titleRest: 'And earns the right to be believed.',
        rationale:
          'Every screen answers one question: how do you make a wall of enterprise billing legible without hiding any of it? Density was the material — and trust was the product.',
        paragraphs: [
          'I designed the platform end to end — around a hundred screens, from the first visit to the deepest analytics drill-down. The design had two jobs that pull in opposite directions: compress enormous multi-country billing data into something scannable, and keep every compression honest — every number traceable to an invoice, every AI recommendation waiting for a human decision, every gap in the data declared rather than papered over.', // rewrite in your voice
        ],
        ownership: {
          rows: [
            {
              term: 'The whole surface',
              detail:
                'Onboarding, dashboard, savings review, configuration, cost centres, documents, database, analytics, support — one pattern system across the whole platform, over two engagements.',
            }, // verify count
            {
              term: 'Data design',
              detail:
                'Tables, review queues, hierarchies and six chart families (bars, donuts, Sankey, maps, gauges, roaming arcs) for very large datasets.',
            },
            {
              term: 'States & trust',
              detail:
                'Empty, analysing, ready and locked states for every module; methodology and disclaimer pages that explain the AI’s reasoning and its limits.',
            },
            {
              term: 'Growth moments',
              detail:
                'The freemium structure: what free users see, where Pro begins, and how upgrade moments appear without blocking the work.',
            },
          ],
        },
      },

      work: [
        // ── 01 ONBOARDING ─────────────────────────────────────
        {
          id: 'onboarding',
          eyebrow: 'Section 01',
          titleLead: 'Onboarding.',
          titleRest: 'Show the money before asking for anything.',
          rationale:
            'B2B onboarding usually collects data first and delivers value later. We inverted it: three questions, an instant savings estimate — and only then an account. The number does the convincing.',
          pos: {
            problem:
              'Asking a finance director to upload sensitive invoices to an unknown AI platform is a big ask. A signup form full of fields, with the value hidden somewhere behind it, loses them before the first screen ends.',
            opportunity:
              'The AI could estimate savings from three answers — supplier locations, annual spend, categories. If the first thing a visitor sees is their own number, the rest of onboarding becomes a path toward it, not a toll gate in front of it.',
            solution:
              'A three-step opener: tell us about yourself → see your estimate (in the demo: “we estimate to save you $102.00K, for a flat cost of $52.00K”) → create an account to claim it. The estimate screen itself sells the method, per category: switch off legacy services, de-bundle accounts, match tariffs to existing contracts, spot billing errors.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover2.webp', // '/projects/ThinkingMachine/onboarding-estimate.png' — the "How Much Can You Save?" screen
            placeholder:
              'HERO — the estimate screen: Telecom / IT / Cloud tabs, the savings number, the method checklist.',
            caption: 'The first number a visitor sees is their own. (Demo data.)',
          },
          showcase: [
            {
              heading: 'Three ways to hand over your documents',
              text: 'Document intake is really a **trust decision**, so it became three explicit tiers: self-upload your invoices; hand us login credentials and we download them for you; or sign a Letter of Authority and we deal with your vendors directly. Each tier trades effort for delegation — and each ends in a clear confirmation of what happens next.',
              image: {
                src: '/projects/ThinkingMachine/image21.webp', // the three-option chooser with illustrations
                placeholder: 'The three-tier chooser: Self-Upload / Managed File Download / Managed Vendor Requests.',
              },
              // second image for this row — stacks under the first
              image2: {
                src: '/projects/ThinkingMachine/image211.webp', // your second upload screen — rename to match your export
                placeholder: 'The self-upload flow: drag-and-drop with queued PDFs.',
              },
            },
            {
              heading: 'The waiting is part of the product',
              text: 'AI analysis of a year of invoices isn’t instant, so the confirmation states say exactly what was received and when the dashboard will be ready — “within 24h–1w” — instead of leaving a silent gap between upload and value.',
              image: {
                src: '/projects/ThinkingMachine/image22.webp', // '/projects/ThinkingMachine/intake-confirmation.png' — "Congratulations, ThinkingMachine is Analysing Documents"
                placeholder: 'The analysing-documents confirmation with the stated timeframe.',
              },
            },
            {
              heading: 'A human, one tap away, on every screen',
              text: 'Enterprise buyers want a person reachable before they trust a machine. “Book a Call” lives permanently in the header, help panels repeat it in context, and the support drawer pairs messages with a call code — so the AI platform never feels unstaffed.',
              image: {
                src: '/projects/ThinkingMachine/image23.webp', // '/projects/ThinkingMachine/support.png' — the "We're here to help you" drawer with the call code
                placeholder: 'The support drawer: send a message, or call with your support code.',
              },
            },
          ],
          grid: null,
        },

        // ── 02 DASHBOARD ──────────────────────────────────────
        {
          id: 'dashboard',
          eyebrow: 'Section 02',
          titleLead: 'The dashboard.',
          titleRest: 'Honest about its own readiness.',
          rationale:
            'A dashboard is a promise about data that may not have arrived yet. Four explicit states — empty, analysing, ready, locked — so the platform never pretends to know more than it does.',
          pos: {
            problem:
              'The Summary Report has to serve a client on day one (no documents yet), day three (analysis running), day ten (everything ready) and the free tier (some of it paywalled). One layout can’t honestly claim all four.',
            opportunity:
              'Make the states themselves first-class designs. If “your dashboard is not ready yet” is a designed moment rather than a broken page, waiting reads as the machine working — not the product failing.',
            solution:
              'One dashboard, four states: an illustrated empty state that says why it’s empty; a full skeleton while analysis runs; the ready state — spend tiles, a savings-range chart (demo: £63,524→£138,892 a year), a regions map, the immediate-opportunities table, a live spend history; and a Pro-locked state where blurred rows advertise exactly what an upgrade unlocks.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover3.webp', // '/projects/ThinkingMachine/dashboard-ready.png'
            placeholder: 'HERO — the ready-state Summary Report, full density.',
            caption: 'The ready state: a year of spending, one screen. (Demo data.)',
          },
          showcase: [
            {
              heading: 'Four states, one truth',
              text: 'Empty, analysing, ready, locked — side by side. Each state tells the user where their data actually is; none of them fakes completeness. The skeleton state alone killed most “is it broken?” support questions before they existed.', // verify that last claim or cut it
              image: {
                src: '/projects/ThinkingMachine/image31.webp', // '/projects/ThinkingMachine/dashboard-states.png' — compose the 4 states in one frame
                placeholder: 'ONE combined frame — the dashboard’s empty / skeleton / ready / locked states.',
              },
            },
            {
              heading: 'A range, not a promise',
              text: 'The headline savings figure is deliberately a **range** — “from £63,524 to £138,892” — with actual vs. plan toggles. Estimates presented as exact numbers get falsified by reality; ranges earn trust they can keep.',
              image: {
                src: '/projects/ThinkingMachine/image32.webp', // '/projects/ThinkingMachine/savings-range.png' — the annual estimated savings chart
                placeholder: 'The annual-savings chart with its from–to range and actual/plan toggle.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image32b.webp', // '/projects/ThinkingMachine/savings-range.png' — the annual estimated savings chart
                placeholder: 'The annual-savings chart with its from–to range and actual/plan toggle.',
              },
            },
            {
              heading: 'Basic and Pro: the paywall that shows, not hides',
              text: 'The free tier isn’t a crippled product — it’s a **preview of a fuller one**. Pro-only modules carry their badge in the sidebar, the locked dashboard blurs real rows instead of hiding them, and the upgrade card names exactly what Annual unlocks. A paywall you can see through converts better than a wall — and it never lies about what’s behind it.',
              image: {
                src: '/projects/ThinkingMachine/image33.webp', // '/projects/ThinkingMachine/pro-locked.png' — the blurred locked dashboard with the "Upgrade to Annual Subscription" card
                placeholder: 'The locked dashboard: blurred rows, the Upgrade-to-Annual card in place.',
              },
            },
          ],
          grid: null,
        },

        // ── 03 SAVINGS REVIEW ─────────────────────────────────
        {
          id: 'savings',
          eyebrow: 'Section 03',
          titleLead: 'The savings review.',
          titleRest: 'The AI recommends. The client decides.',
          rationale:
            'Nobody lets a machine cancel their phone lines. Every AI finding lands in a review queue — approve or reject — so each saving carries a human signature. Auditability was the feature.',
          pos: {
            problem:
              'The AI finds five kinds of money: unused services, unused products, cheaper plans with the existing provider, billing errors, excessive users. But an auto-applied recommendation about live enterprise infrastructure is a liability, not a feature — and an unexplained one is just noise.',
            opportunity:
              'Treat recommendations like a work queue, not a report: statuses, bulk actions, and a paper trail. And treat the AI’s reasoning like documentation: every category explains how its findings are produced and what to do about them.',
            solution:
              'Each category opens as a three-tab queue — in the demo, Under Review (100), Approved (30), Rejected (15) — with select-all, approve/reject in bulk, per-service detail down to the invoice line, and a downloadable report for the people not in the room. “Recommendation pending your approval” is the system’s default posture.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover4.webp', // '/projects/ThinkingMachine/review-queue.png' — Unused Services, Under Review tab, rows + bulk actions
            placeholder:
              'HERO — the review queue: Under Review / Approved / Rejected tabs, bulk approve-reject, country + provider + amount rows.',
            caption: 'Every row is money; every decision is a person’s. (Demo data.)',
          },
          showcase: [
            {
              heading: 'The AI shows its homework',
              text: 'Every category ships with a **Methodology** page — “how the opportunities are found”: every usage type extracted from invoices, text read in all languages where usage is described rather than shown, monthly charges matched per service, last-used dates traced through historical invoices. Next to it, “How to improve” turns findings into actions.',
              image: {
                src: '/projects/ThinkingMachine/image41.webp', // '/projects/ThinkingMachine/methodology.png'
                placeholder: 'The Methodology and How-to-improve pages, side by side.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image41b.webp', // '/projects/ThinkingMachine/methodology.png'
                placeholder: 'The Methodology and How-to-improve pages, side by side.',
              },
            },
            {
              heading: 'Identified vs. realized',
              text: 'Two modes of the same summary: what the AI has **identified** (demo: $65,000–$123,000 a year across the five categories) and what the client has actually **realized** by approving and acting. The gap between the two numbers is the product’s to-do list.',
              image: {
                src: '/projects/ThinkingMachine/image42.webp', // '/projects/ThinkingMachine/identified-realized.png'
                placeholder: 'The savings summary in identified mode beside realized mode.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image42b.webp', // '/projects/ThinkingMachine/methodology.png'
                placeholder: 'The savings summary in identified mode beside realized mode.',
              },
            },
          ],
          grid: null,
          // The honesty page — distinct from the sections above it.
          aside: {
            eyebrow: 'Designed honesty',
            heading: 'A page that admits what the data can’t say',
            text: 'The platform has a **Disclaimer** section — not legal fine print, but charts: spend processed vs. spend whose service-level usage is missing, vendors with only account-level totals, how to read a gap in the bars. It teaches clients to see the limits of the analysis — and exactly which detailed invoices to request to close them. Trust is built faster by a product that shows its blind spots than by one that claims none.',
            src: '/projects/ThinkingMachine/disclaimer.webp', // '/projects/ThinkingMachine/disclaimer.webp'
            placeholder: 'The Disclaimer page: missing-data charts and the guidance for closing the gaps.',
            caption: 'Click to see it full-screen.',
          },
        },

        // ── 04 STRUCTURE ──────────────────────────────────────
        {
          id: 'structure',
          eyebrow: 'Section 04',
          titleLead: 'Structure.',
          titleRest: 'Enterprise hierarchies, built without engineers.',
          rationale:
            'No two enterprises share an org shape, and custom structure usually means custom development. Templates for the common shapes, a wizard for the rest — configuration became self-service.',
          pos: {
            problem:
              'Savings only mean something when they map to the client’s own structure — sites, franchises, cost centres, GL codes. Hard-coding each client’s hierarchy would make every onboarding an engineering project.',
            opportunity:
              'Most clients fit a few shapes — site billing, franchise billing, complex contract — and the rest need freedom. Offer the shapes as templates and the freedom as a builder, and the platform configures itself.',
            solution:
              'Cost centres start from four templates — Site Billing, Franchise Billing, Complex Contract, or **Build Yourself**. A three-step wizard (basic info → services → allocation) creates hierarchies up to five levels deep, assigns services by family and category with and/or filters, and splits allocation by percentage. The result renders as an expandable tree with GL codes and per-row allocation sliders.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover5.webp', // '/projects/ThinkingMachine/hierarchy.png' — the Complex Contract expandable tree with sliders
            placeholder:
              'HERO — the cost-centre hierarchy: nested levels, GL codes, allocation sliders, linked services.',
            caption: 'A client’s whole org, assembled from a template and a wizard. (Demo data.)',
          },
          showcase: [
            {
              heading: 'The wizard that replaced a backlog',
              text: 'Create Hierarchy walks three steps: name, levels and allocation; then services chosen by family, category and logical filters; then percentage splits per level. What used to be a change request became a two-minute flow — the pattern behind the **30–40% less development time** the platform delivered.', // verify figure
              image: {
                src: '/projects/ThinkingMachine/image51.webp', // '/projects/ThinkingMachine/wizard.png' — the 3 steps side by side
                placeholder: 'The Create Hierarchy wizard: Basic Info → Services → Allocation.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image51b.webp', // '/projects/ThinkingMachine/wizard.png' — the 3 steps side by side
                placeholder: 'The Create Hierarchy wizard: Basic Info → Services → Allocation.',
              },
            },
            {
              heading: 'The rest of the plumbing',
              text: 'The same patterns carry the whole configuration area: user management with role-scoped permissions (admins approve, analysts draft), a document centre with per-file analysis status, and the Database — the raw ledger of vendors, service types and countries behind every number upstairs.',
              image: {
                src: '/projects/ThinkingMachine/image52.webp', // '/projects/ThinkingMachine/config-grid.png' or use the grid below instead
                placeholder: 'Users, Documents and Database views — one pattern family.',
              },
            },
          ],
          grid: {
            title: 'Around the configuration',
            cols: 3,
            images: [
              {
                src: '/projects/ThinkingMachine/image53.webp',
                placeholder: 'users.png — roles & permissions, add-member drawer',
              },
              {
                src: '/projects/ThinkingMachine/image54.webp',
                placeholder: 'documents.png — upload centre with per-file Analysing/Analyzed status',
              },
              {
                src: '/projects/ThinkingMachine/image55.webp',
                placeholder: 'database.png — the vendors / service types / countries ledger',
              },
            ],
          },
        },

        // ── 05 ANALYTICS ──────────────────────────────────────
        {
          id: 'analytics',
          eyebrow: 'Section 05',
          titleLead: 'Analytics.',
          titleRest: 'Four lenses on the same money.',
          rationale:
            'Dense data isn’t one problem — products, suppliers, services and usage each ask a different question. Each lens got the chart its question deserved: Sankey for flow, map for geography, gauge for allowance.',
          pos: {
            problem:
              'A telecom estate is thousands of services across dozens of vendors and countries. One generic chart page would either drown the user or dumb the data down — the same dilemma as any analytics surface, at enterprise scale.',
            opportunity:
              'Finance teams don’t ask “show me everything”; they ask where money flows (products), who bills what (suppliers), what runs where (services), and who uses how much (usage). Four questions — four purpose-built lenses over one dataset.',
            solution:
              'Products traces spend through a **Sankey** — service type to country to vendor to product; Suppliers compares billed cost against account totals per vendor; Services maps the estate on a world map and by cost centre; Usage splits national, international and roaming — down to a map of roaming arcs between countries. Shared filters everywhere: country, service type, date, cost centre.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover6.webp', // '/projects/ThinkingMachine/sankey.png' — the Products Sankey
            placeholder:
              'HERO — the Products Sankey: spend flowing from service types through countries and vendors to products.',
            caption: 'Where the money actually flows. (Demo data.)',
          },
          showcase: [
            {
              heading: 'Usage, three zoom levels',
              text: 'By service (gauges and totals), by zone (national / international / roaming), and by location — a world map of roaming arcs showing exactly which routes burn the budget. The deeper the zoom, the more specific the saving.',
              image: {
                src: '/projects/ThinkingMachine/image61.webp', // '/projects/ThinkingMachine/usage-map.png'
                placeholder: 'The usage views: gauge + zone bars + the roaming-arcs world map.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image61b.webp', // '/projects/ThinkingMachine/usage-map.png'
                placeholder: 'The usage views: gauge + zone bars + the roaming-arcs world map.',
              },
            },
            {
              heading: 'Tables that expand instead of overwhelm',
              text: 'The services-by-cost-centre view keeps rows one line tall — cost centre, calls, data, count, total — and lets each expand in place for the breakdown. The same progressive-disclosure pattern I later reused for Backgammon Galaxy’s mobile analytics.',
              image: {
                src: '/projects/ThinkingMachine/image62.webp', // '/projects/ThinkingMachine/services-table.png'
                placeholder: 'The services-by-cost-centre table with an expanded row.',
              },
            },
          ],
          grid: null,
        },

        // ── PHASE 2: NAVIGATION ───────────────────────────────
        // The client came back months later: the platform had
        // grown until finding anything — or jumping between
        // services — was the problem. This section is that
        // second engagement.
        {
          id: 'navigation',
          eyebrow: 'Phase 2',
          titleLead: 'Navigation.',
          titleRest: 'The platform outgrew its own map.',
          rationale:
            'Phase 1 built the rooms; Phase 2 built the corridors. We reorganized everything around what clients do — Overview, Optimize, Negotiate, Audit, Workflow, Database — instead of what the software is.',
          pos: {
            problem:
              'Months after Phase 1 shipped, the client came back with a different problem: the platform had grown — more services, more modules, more document types — and users couldn’t find what they needed. Worse, standing in one service and reaching another meant backtracking through everything in between.',
            opportunity:
              'The modules were organized the way the software was built, not the way clients work. A finance team’s day is a sequence of verbs — get an overview, optimize spend, negotiate contracts, audit, manage workflow, consult the records. Name the navigation after the verbs, and every page has an obvious home.',
            solution:
              'A navigation system, not a menu: a task-based sidebar (six verbs, each expanding into categories and pages), a searchable **Site Navigation** directory reachable from every screen, breadcrumbs with per-page tabs, and an “About This Page” explainer on every single page — so no screen is ever a dead end.',
          },
          hero: {
            src: '/projects/ThinkingMachine/cover7.webp', // '/projects/ThinkingMachine/sitenav.png' — the Site Navigation directory (the Version 19 screen)
            placeholder:
              'HERO — the Site Navigation directory: destinations grouped by task (Overview / Optimize / Negotiate / Database), category chips, search.',
            caption: 'The whole platform on one page: grouped by task, tagged by category, searchable. (Demo data.)',
          },
          showcase: [
            {
              heading: 'Organized by verb, not by module',
              text: 'The new sidebar names what the client is doing, not what the software contains: **Overview, Optimize, Negotiate, Audit, Workflow, Database**. Each verb expands into its categories — Spend, Telecom, IT Hardware — and their pages: a two-level tree that holds the grown platform without burying it. The same six verbs structure the directory, so the sidebar and the map always agree.',
              image: {
                src: '/projects/ThinkingMachine/image71.webp', // '/projects/ThinkingMachine/sidebar.png' — a page with the expanded tree sidebar + breadcrumbs
                placeholder: 'The task-verb sidebar expanded, with breadcrumbs and per-page tabs above the content.',
              },
            },
            {
              heading: 'No page is a dead end',
              text: 'Every page carries its own wayfinding: breadcrumbs back to its service, an **About This Page** explainer, and guided walkthroughs — “How the filtering works”, step by step, with previous and next — written into the interface itself. And when wayfinding isn’t enough, the escape hatches are always in reach: “Can’t find the page you’re looking for?”, “Ask AI Expert”, “Get insights from this table”. The documentation lives where the confusion happens.',
              image: {
                src: '/projects/ThinkingMachine/image72.webp', // '/projects/ThinkingMachine/walkthrough.png' — the About This Page + How-the-filtering-works modals
                placeholder:
                  'The in-context help: About This Page and a guided walkthrough modal over the live screen.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image72b.webp', // '/projects/ThinkingMachine/helpers.png' — the orange contextual buttons
                placeholder:
                  'The escape hatches: “Can’t find the page?”, “Ask AI Expert”, “Get insights from this table”.',
              },
            },
            {
              heading: 'The redesign underneath',
              text: 'Solving navigation honestly meant touching everything it connects, so Phase 2 grew into a new version of the platform: a rebuilt document pipeline shown as a live stepper — unzip, convert, duplicate-check, each stage with its own progress and states — and a theme system that let the whole product ship **white-labeled** under a partner’s brand.',
              image: {
                src: '/projects/ThinkingMachine/image73.webp', // '/projects/ThinkingMachine/pipeline.png' — the stepper: Unzip → Convert → Duplicate Check with progress
                placeholder: 'The document pipeline as a stepper, each stage with live progress and its own state.',
              },
              image2: {
                src: '/projects/ThinkingMachine/image73b.webp', // '/projects/ThinkingMachine/pipeline.png' — the stepper: Unzip → Convert → Duplicate Check with progress
                placeholder: 'The document pipeline as a stepper, each stage with live progress and its own state.',
              },
            },
          ],
          grid: {
            title: 'Around the second engagement',
            cols: 3,
            images: [
              {
                src: '/projects/ThinkingMachine/image74.webp',
                placeholder: 'launcher-v2.png — the six-group directory variant (with Audit & Workflow)',
              },
              {
                src: '/projects/ThinkingMachine/image75.webp',
                placeholder: 'summary-states.png — the rebuilt summary in its loading and ready states',
              },
              {
                src: '/projects/ThinkingMachine/image76.webp',
                placeholder: 'whitelabel.png — the same screens themed for a partner brand',
              }, // confirm you may show the partner's name before exporting; crop or retheme if not
            ],
          },
        },
      ],

      reflection: {
        id: 'reflection',
        title: 'What density taught me',
        // EDIT ME (safe to ship as is): finished copy in my words —
        // make it yours when you get a minute.
        text: 'A hundred screens of enterprise billing taught me that density isn’t solved by hiding data — it’s solved by structure: states, queues, hierarchies, and charts that each answer exactly one question. It also taught me how AI products earn trust: not by claiming accuracy, but by showing their homework — review queues where humans sign off, methodology pages that explain the findings, a disclaimer that charts its own blind spots. The table patterns I built here became muscle memory; when Backgammon Galaxy later handed me a phone screen and a mountain of player analytics, I already knew what earns the first screen and what waits behind a tap.',
      },
    },
  },
];

export const about = {
  heading: 'A bit more about me.',
  // EDIT ME (safe to ship as is): your real story in my words —
  // swap in your own phrasing when you can.
  paragraphs: [
    'I started in 2016 the way a lot of designers from engineering backgrounds do: by building things first and learning why they worked later. I founded CreativeDannies, my own small studio, and spent three years designing and coding websites and apps for clients from Melbourne to New York. That led to Nickelfox — a team ranked among Dribbble’s top 100 worldwide — and eventually to Toptal, where I’ve worked in the top 3% of freelance designers with teams like Oar Health, Thinking Machine, and Backgammon Galaxy.',
    'Somewhere along the way I decided instinct wasn’t enough. I moved to Italy for an Information Engineering degree at the University of Padua on a full scholarship, wrote a thesis on AI systems for biological databases, and stayed for a funded research year building tools that working biologists actually use. Now I’m in Paris, doing a master’s in Human–Computer Interaction at Université Paris-Saclay and researching the future of collaborative workspaces in Wendy Mackay’s group.',
    'The thread through all of it: I don’t hand off designs, I finish them. At Backgammon Galaxy I redesigned the mobile app, rebuilt the brand, created the design system — and then joined the codebase to close the gap between Figma and production myself. A design isn’t done when the mockup is approved. It’s done when it runs.',
    'Off the clock, I’m a Counter-Strike player and an unapologetic esports spectator — if there’s a major on, I’ve probably rearranged my week around it.',
  ],
};

export const fun = {
  heading: 'Outside of work.',
  intro: 'A few things I make or do that aren’t on my resume.',
  // EDIT ME (safe to ship as is): three TRUE items from your CV —
  // swap for hobbies or projects you'd rather show.
  items: [
    {
      title: 'Cartographer',
      description:
        'What I’m building right now: an AI workspace for exploring unfamiliar GitHub repositories — retrieval with grounded citations, investigations that branch on a visual canvas. Next.js, FastAPI, and a local LLM.',
    },
    {
      title: 'Counter-Strike 2',
      description:
        'Player and devoted spectator — I follow the pro scene from the majors down to roster drama, in arenas when I can. Designing for Backgammon Galaxy’s competitive community felt familiar for a reason.',
    },
    {
      title: 'This website',
      description:
        'Designed by me, built in React with an AI pair programmer — one design system, a loading screen, and a keyboard shortcut (press D on any case study).',
    },
    {
      title: 'Teaching',
      description:
        'Ran a UX research bootcamp at the University of Padua, on review sessions and research for SaaS products.',
    },
    {
      title: 'ML competitions',
      description: 'Kaggle: ranked 131st of 1,172 forecasting mini-course sales; predicted CO₂ emissions in Rwanda.',
    },
  ],
};

// ── Other works: the archive grid on the home page ────────────
// Client and studio work that predates the case studies. Each item
// opens a popup: title, meta, description, and its shots. Cards
// with thumb: null show a quiet placeholder until you export the
// shot — fill thumbs first, shots can come later (the popup shows
// whatever exists). Add or delete items freely; the section hides
// itself if the list is ever empty.
export const otherWorks = {
  heading: 'More work',
  intro: 'Client and studio work from the years before the case studies — more on Dribbble and Behance.',
  items: [
    {
      title: 'BetterNow',
      meta: 'One Item, Inc. • iOS & iPad app • 2017–2018',
      description:
        'A wellness self-assessment app: you score every area of your life — sleep, fitness, relationships, mindset — mark how much each matters, and watch the gap between where you are and where you want to be. I redesigned the old application into a modern, minimal system of 50+ screens across iPhone and iPad, from wireframes to the final UI and an interactive prototype.',
      thumb: '/archive/betternow.webp',
      shots: [
        {
          src: '/archive/betterNow/screen1.webp',
          title: 'My Scores',
          text: 'Expanding a score card — details, history, editing, and sharing stack in one sheet.',
        },
        {
          src: '/archive/betterNow/screen2.webp',
          title: 'Dashboard & profile',
          text: 'Gap results, the BetterNow index over time, and the account menu.',
        },
        {
          src: '/archive/betterNow/screen3.webp',
          title: 'Assessment',
          text: 'Every life area scored in one list; tapping an item opens score, color, and weekly progress.',
        },
        {
          src: '/archive/betterNow/screen4.webp',
          title: 'Daily check-in',
          text: 'A one-screen grid for updating past days\u2019 scores at a glance.',
        },
        {
          src: '/archive/betterNow/boarding.webp',
          title: 'Onboarding',
          text: 'Loading and welcome, set in the brand\u2019s calm photography.',
        },
        {
          src: '/archive/betterNow/wireframe1.webp',
          title: 'Wireframes — score details & dashboard',
          text: 'The structure was settled in grayscale before any visual design.',
        },
        {
          src: '/archive/betterNow/wireframe2.webp',
          title: 'Wireframes — assessment flow',
          text: 'Scoring, history, and importance mapped screen by screen.',
        },
        {
          src: '/archive/betterNow/output.mp4',
          title: 'Interactive prototype',
          text: 'The full flow in motion, recorded from the clickable prototype (2:15).',
        },
      ],
    },
    {
      title: 'DisProt',
      meta: 'BioComputing UP, University of Padua • Scientific database • 2024–25',
      description:
        'The redesign of DisProt, the manually curated database of intrinsically disordered proteins used by researchers worldwide. During my research fellowship I redesigned the whole interface — search, protein entries, the feature viewer, statistics, and training — and built what I designed, working directly with the curators who use it every day.',
      thumb: '/archive/Disprot.webp',
      shots: [
        {
          src: '/archive/disprot/Home.webp',
          title: 'Home & search',
          text: 'One search bar, live database counts, and browsing by organism or dataset.',
        },
        {
          src: '/archive/disprot/Protein Page.webp',
          title: 'Protein entry',
          text: 'A protein\u2019s evidence list — every annotation typed, color-coded, and filterable.',
        },
        {
          src: '/archive/disprot/Protein Page-1.webp',
          title: 'Feature viewer',
          text: 'Disorder regions plotted along the sequence, linked to the evidence below.',
        },
        {
          src: '/archive/disprot/Release.webp',
          title: 'Release statistics',
          text: 'Annotation counts and amino-acid composition, restructured into readable tables.',
        },
        {
          src: '/archive/disprot/Training.webp',
          title: 'Training',
          text: 'Courses and recorded tutorials for the curators and users of the database.',
        },
      ],
    },
    {
      title: 'Fitness 21',
      meta: 'Health & fitness app • 2019–2020',
      description:
        'An audio-courses app for building better habits: guided workout, meditation, and happiness courses you listen to, with a dashboard that turns listening into streaks, habit scores, and a daily timeline.',
      thumb: '/archive/21fit.webp',
      shots: [
        {
          src: '/archive/21fit/video.mp4',
          title: 'App in motion',
          text: 'The flow recorded from the prototype.',
        },
        {
          src: '/archive/21fit/screen1.webp',
          title: 'Course discovery',
          text: 'Featured courses with a listen-today player, category grids, and a coming-soon feed.',
        },
        {
          src: '/archive/21fit/screen2.webp',
          title: 'Workout & dashboard',
          text: 'The dark workout theme, and the habit dashboard \u2014 score gauge, listening hours, and a day timeline.',
        },
      ],
    },
    {
      title: 'ONYX',
      meta: 'Hotel client • Booking platform',
      description:
        'A booking platform for a hotel network built around refundable stays and a members\u2019 loyalty program. I designed the whole funnel \u2014 from the landing page through search, room selection, and rate comparison \u2014 with the booking overview keeping a running total at every step.',
      thumb: '/archive/hotel.webp',
      shots: [
        {
          src: '/archive/hotel/Home.webp',
          title: 'Landing',
          text: 'One search bar over the promise, trust signals under the fold, and stays browsable by travel style.',
        },
        {
          src: '/archive/hotel/hotels.webp',
          title: 'Search results',
          text: 'List and live map side by side, with quick filters and scarcity cues on busy hotels.',
        },
        {
          src: '/archive/hotel/room1.webp',
          title: 'Room selection',
          text: 'Rooms compared at a glance; the overview panel builds the price as you choose.',
        },
        {
          src: '/archive/hotel/room2.webp',
          title: 'Rates & checkout',
          text: 'Each room expands into flexible, prepaid, and breakfast rates \u2014 member pricing beside every one.',
        },
      ],
    },
    {
      title: 'APICURON',
      meta: 'BioComputing UP, University of Padua • Scientific platform • 2024–25',
      description:
        'APICURON credits the invisible work of science: it aggregates curation activity from partner databases like DisProt, Reactome, and Pfam, and turns it into profiles, badges, medals, and leaderboards for the biocurators behind them. During my research fellowship I redesigned the platform \u2014 and built what I designed in Angular.',
      thumb: '/archive/apicuron.webp',
      shots: [
        {
          src: '/archive/apicuron/Home.webp',
          title: 'Home',
          text: 'The pitch in one screen \u2014 what APICURON credits, live platform numbers, top contributors, and the partner resources.',
        },
        {
          src: '/archive/apicuron/Database.webp',
          title: 'Curator profile',
          text: 'One researcher\u2019s record per database \u2014 scores, medals, badges, and a full log of contributions.',
        },
        {
          src: '/archive/apicuron/Curators.webp',
          title: 'Curators',
          text: 'Every biocurator as a card \u2014 ORCID, affiliation, and the databases they contribute to, searchable and filterable.',
        },
      ],
    },
    {
      title: 'DOME Registry',
      meta: 'ELIXIR • BioComputing UP, University of Padua • 2024–25',
      description:
        'DOME is a community effort from the ELIXIR Machine Learning Focus Group to make machine-learning methods in the life sciences transparent and reproducible, and the Registry is its public, searchable database of method descriptions. During my research fellowship I designed the Registry\u2019s web platform — and as with DisProt, built what I designed in Angular.',
      thumb: '/archive/Dome.webp',
      shots: [
        {
          src: '/archive/dome/home.webp',
          title: 'Home',
          text: 'The Registry in one screen — live counts, latest annotated publications with their DOME scores, and one action: Browse.',
        },
        {
          src: '/archive/dome/Statistic.webp',
          title: 'About DOME',
          text: 'The recommendations and the Registry explained in one scrolling story, dark theme in the brand\u2019s deep blue and orange.',
        },
        {
          src: '/archive/dome/DomeRecom.webp',
          title: 'Statistics',
          text: 'Registry-wide numbers, annotated journals, and the DOME-score distribution as living charts.',
        },
      ],
    },
    {
      title: 'HouseLord',
      meta: 'Private client • Property-management platform',
      description:
        'A marketing site for a virtual property-management service \u2014 landlords hand over listings, maintenance, and rent collection to a remote team. I designed the full site as a responsive system, every page resolved for desktop and mobile side by side.',
      thumb: '/archive/houselord.webp',
      shots: [
        {
          src: '/archive/houselord/home.webp',
          title: 'Home',
          text: 'The pitch \u2014 \u201Cproperty management reimagined\u201D \u2014 with services, social proof, and one action repeated: try for free.',
        },
        {
          src: '/archive/houselord/pricing.webp',
          title: 'Pricing',
          text: 'One plan, stated plainly over the product\u2019s own imagery, with FAQs answering objections on the same page.',
        },
        {
          src: '/archive/houselord/blog.webp',
          title: 'Blog',
          text: 'Category-filtered articles in a clean list, collapsing to single-column cards on mobile.',
        },
        {
          src: '/archive/houselord/contact us.webp',
          title: 'Contact',
          text: 'Map, form, and FAQs in one page \u2014 every route to a human kept short.',
        },
      ],
    },
    {
      title: 'Hexabot',
      meta: 'Mobile app • 2024',
      description:
        'A command center for a fleet of autonomous robots mining and farming on the Moon. One phone screen runs ten bots: a triage home that surfaces only what needs action, task queues you compose and execute, a live map of every unit, and a voice assistant \u2014 ask what needs attention, assign a task by name, done.',
      thumb: '/archive/Hexa.webp',
      shots: [
        {
          src: '/archive/hexabot/screen1.webp',
          title: 'The system at a glance',
          text: 'Task assignment, the triage home, the live map, and the voice assistant \u2014 four surfaces, one fleet.',
        },
        {
          src: '/archive/hexabot/screen2.webp',
          title: 'Live map states',
          text: 'The whole fleet on lunar terrain; filters dim the noise, and a selected bot reports status and distance.',
        },
        {
          src: '/archive/hexabot/screen3.webp',
          title: 'Tasks & triage',
          text: 'Queues built from task categories \u2014 system, mining, crops \u2014 with reroutes to named locations; home sorts bots by urgency.',
        },
        {
          src: '/archive/hexabot/screen4.webp',
          title: 'Voice command',
          text: '\u201CWhat bots need my action?\u201D \u2014 the assistant answers with cards, takes an order, and confirms it executed.',
        },
      ],
    },
  ],
};

// ── "Right now" — the footer's living status line ──────────────
// Computed from PARIS hours (from ≤ hour < to; ranges may wrap
// past midnight). Edit the lines freely — keep them true-ish and
// in your own voice; "probably" in the label buys the honesty.
export const nowStatus = {
  lines: [
    { from: 7, to: 9, text: 'on the RER B out to Saclay.' },
    { from: 9, to: 12, text: 'at the lab, arguing about what “interaction” means.' },
    { from: 12, to: 14, text: 'at lunch with friends, talking about everything except research.' },
    { from: 14, to: 18, text: 'in a meeting that could have been a Figma comment.' },
    { from: 18, to: 20, text: 'on the bus 4506 home, mentally redesigning its ticket machine.' },
    { from: 20, to: 22, text: 'building Cartographer, my excuse to learn everything at once.' },
    { from: 22, to: 24, text: 'watching my third “is UX dead” video on YouTube. UX is fine too.' },
    { from: 0, to: 2, text: 'promoting a Figma page from “final” to “final-final”.' },
    { from: 2, to: 7, text: 'asleep — dreaming in auto-layout.' },
  ],
};

// ── About-page photos ───────────────────────────────────────────
// Casual shots rendered between the story and "Outside of work".
// Drop files into /public/about/ and list them here; an empty
// array hides the section. One photo renders narrow and centered;
// two or more share a row.
export const aboutPhotos = [
  {
    src: '/about/ewc-arena.webp',
    alt: 'The Counter-Strike 2 arena at the Esports World Cup, screens counting down over the crowd',
    caption: 'CS2 at the Esports World Cup 2026, Paris — there for the crowd as much as the game.',
  },
];
