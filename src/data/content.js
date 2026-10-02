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
          src: '/projects/OarHealth/team1.jpeg', // '/projects/OarHealth/team.jpg'
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
    hook: 'A 2-star app, rebuilt to 4.3.',
    title: 'Designing — and building — Backgammon Galaxy',
    subtitle: 'Backgammon Galaxy • Gaming • Product Design + Front-end',
    tag: 'Case study',

    // '/projects/Backgammon/hero.mp4' — gameplay in motion is the
    // strongest possible cover for a game product.
    cover: '/projects/Backgammon/cover1.png',
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

    nav: [
      { id: 'overview', label: 'Overview' },
      { id: 'mobile', label: 'Mobile' },
      { id: 'website', label: 'Website' },
      { id: 'academy', label: 'Academy' },
      { id: 'gameplay', label: 'Gameplay' },
      { id: 'system', label: 'System' },
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
          pos: {
            problem:
              'The old mobile app was landscape-only, carried the old branding, missed the ecosystem’s new features — and players said so: it sat at roughly 2 out of 5 in the stores.',
            opportunity:
              'A full redesign on the new design system and branding could bring the whole ecosystem — play, learning, social, economy, analytics — to the platform players actually carry.',
            solution:
              'A full redesign on the new system: sign-up through lobby, dashboard, messaging, boards, and the coin shop. Landscape first to meet old-app players where they were — then the portrait v3. The rating climbed from about 2 to 4.3.',
          },
          hero: {
            src: '/projects/Backgammon/mobile1.png', // '/projects/Backgammon/mobile-hero.png'
            placeholder: 'SOLUTION HERO — the mobile lobby, or a lineup of the key mobile screens.',
            caption: 'The lobby: every way to play, one screen.',
          },
          showcase: [
            {
              heading: 'Landscape first, portrait when it counted',
              text: 'The old app was landscape, so the redesign started there — new branding and system on a format players already knew, shipped sooner. Then V3 rebuilt it in portrait: one-handed, natural, the best design of the three. Knowing when to bridge from the old and when to break from it was the job.',
              image: {
                src: '/projects/Backgammon/mobile2.png', // '/projects/Backgammon/mobile-v1-v3.png'
                placeholder: 'ONE combined frame — the landscape V1 beside the portrait V3 of the same screen.',
              },
            },
            {
              heading: 'Onboarding that makes the experience unique',
              text: 'New players identify as Newbie through Advanced during sign-up — the foundation for personalized learning and fair matches, captured before the first game.',
              image: {
                src: '/projects/Backgammon/mobile3.png', // '/projects/Backgammon/mobile-v1-v3.png'
                placeholder: 'Sign-up → verification → skill-level selection → lobby. Recording works great.',
              },
            },
            {
              heading: 'A dashboard that’s yours',
              text: 'Rating, bankroll, current board and avatar, matches, leaderboards — in configurable rows, so a grinder and a casual player see different homes.',
              image: {
                src: '/projects/Backgammon/mobile4.png', // '/projects/Backgammon/mobile-dashboard.png'
                placeholder: 'Mobile dashboard with configurable rows.',
              },
            },
            {
              heading: 'A lot of data, very little screen',
              text: 'The analytics page had far more to say than a phone has room for — ratings, performance, match history, blunders. Most of the design time went into structure: what earns the first screen, what collapses, what waits behind a tap.',
              image: {
                src: '/projects/Backgammon/mobile5.png', // '/projects/Backgammon/mobile-analytics.png'
                placeholder: 'Mobile analytics page — the dense-data layout, or 2–3 screens of its hierarchy.',
              },
            },
            {
              heading: 'Messaging, on both platforms',
              text: 'Friends, conversations, player search, invites — designed once as a system, shipped on mobile and web.',
              image: {
                src: '/projects/Backgammon/mobile6.png', // '/projects/Backgammon/messaging.png'
                placeholder: 'Messaging — conversation list + chat, mobile and web side by side.',
              },
            },
          ],
          grid: {
            title: 'Around the app',
            cols: 3,
            images: [
              { src: '/projects/Backgammon/mobile7.png', placeholder: 'Boards — selection & locked levels' },
              { src: '/projects/Backgammon/mobile8.png', placeholder: 'Coin shop — bundles & bonuses' },
              { src: '/projects/Backgammon/mobile9.png', placeholder: 'Profile / social screens' },
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
          pos: {
            problem:
              'The existing site carried old branding and an old structure — and none of the features the platform was growing into.',
            opportunity:
              'The new brand — dark navy surfaces, electric blue, gold for currency — could carry an entirely rethought site, and every new feature could launch web and mobile together.',
            solution:
              'A full redesign under the new branding, with new sections throughout: the quiz, Play vs AI, Analytics, Play a Friend, messaging, and board selection — one visual language across the whole platform.',
          },
          hero: {
            src: null, // '/projects/Backgammon/web-hero.png'
            placeholder: 'SOLUTION HERO — the redesigned website main page, new branding on full display.',
            caption: 'The new face of the platform.',
          },
          showcase: [
            {
              heading: 'Old site, new site',
              text: 'Same platform, different decade. One combined before/after shows how far the rebrand moved it.',
              image: {
                src: null, // '/projects/Backgammon/web-before-after.png'
                placeholder: 'ONE combined frame — old website beside the redesign.',
              },
            },
            {
              heading: 'Your game, measured',
              text: 'The Analytics section turns match history into a readable picture of your play — ratings over time, blunders, performance.',
              image: {
                src: null, // '/projects/Backgammon/web-analytics.png'
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
          pos: {
            problem:
              'Advanced backgammon knowledge lives in dense books and engine outputs. Nothing in the product turned it into a journey a beginner could actually walk.',
            opportunity:
              'Expert-authored problems, structured like a game: categories, progress, streaks of feedback — learning that feels like playing.',
            solution:
              'Quiz Academy: Easy to Hard categories, courses of 10 to 50 problems with saved progress, instant “Excellent” / “Nope” feedback before the explanation, and a celebration at the end. Beside it, Play vs AI: opponents from Rookie to Galactic Master with configurable coaching, format, and fees.',
          },
          hero: {
            src: null, // '/projects/Backgammon/academy-hero.png'
            placeholder: 'SOLUTION HERO — the Quiz Academy entry: categories, courses, progress states.',
            caption: 'Courses with states, progress, and a reason to come back.',
          },
          showcase: [
            {
              heading: 'Feedback first, lesson second',
              text: 'Pick a move, get the verdict instantly, then see the correct move and why. The emotional beat lands before the explanation asks for attention.',
              image: {
                src: null, // '/projects/Backgammon/quiz-flow.mp4'
                placeholder: 'RECORDING — a quiz problem: answer → “Excellent”/“Nope” → explanation → next.',
              },
            },
            {
              heading: 'An opponent for every level',
              text: 'Rookie to Galactic Master, with match format, coaching assistance, hints and pip count all configurable — and membership deciding how much flexibility you get.',
              image: {
                src: null, // '/projects/Backgammon/play-vs-ai.png'
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
          pos: {
            problem:
              'Evaluating moves and cube decisions under a running clock is where players blunder — and where they quit. Traditional analysis lives after the game, when the lesson no longer sticks.',
            opportunity:
              'Expert-grade analysis — equity differences, winning chances, cube verdicts — already existed in engines. The design question: surface it inside live play, progressively, without breaking the flow of a match.',
            solution:
              'A Hint → Detail system. Request a hint (coins permitting) and suggested-move arrows appear on the board; open Detail for candidate moves, equity, and winning chances. Cube decisions get their own verdicts — from No Double to Cube Blunder — and if you already made the best move, the system says so.',
          },
          hero: {
            src: null, // '/projects/Backgammon/gameplay-hero.png' or .mp4
            placeholder:
              'SOLUTION HERO — the live match screen: board, clocks, ratings, dice, with hint arrows visible. Recording > still.',
            caption: 'Everything a match needs, with coaching one tap away.',
          },
          showcase: [
            {
              heading: 'Hint, then Detail',
              text: 'Arrows suggest the move; Detail explains it — candidate moves ranked by equity and winning chances. After you move, it resets and the clock never stopped mattering.',
              image: {
                src: null, // '/projects/Backgammon/hint-flow.mp4'
                placeholder: 'RECORDING — hint requested → arrows appear → Detail panel opens → move made.',
              },
            },
            {
              heading: 'Feedback that names the move',
              text: 'Correct, good, error, blunder — and the full cube vocabulary from Excellent Take to Missed Cube. Players learn the language of the game while playing it.',
              image: {
                src: null, // '/projects/Backgammon/feedback-states.png'
                placeholder:
                  'Feedback states — correct / good / error / blunder plus cube verdicts, composed on one frame.',
              },
            },
            {
              heading: 'One event, three audiences',
              text: 'When a player goes inactive, three people see three different screens: the inactive player gets a countdown, the opponent gets context, the spectator gets an update. Role-specific communication instead of one generic notification.',
              image: {
                src: null, // '/projects/Backgammon/inactivity.png'
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
          pos: {
            problem:
              'A product with live gameplay, an economy, memberships, and error states everywhere cannot be designed screen by screen — it drifts apart within a sprint.',
            opportunity:
              'Every repeated pattern — buttons, dialogs, countdowns, user tiles, chat messages, coin packs, board levels, pre-match dialogs — could become a component the whole team, including me as its developer, could trust.',
            solution:
              'A comprehensive component library: 80 component sets, 334 components, 5,000+ instances across the file — covering navigation, inputs and validation, overlays, notifications, gameplay messages, leaderboards, and the analysis sidebar.',
          },
          hero: {
            src: null, // '/projects/Backgammon/system-hero.png'
            placeholder: 'SOLUTION HERO — a composed sheet of the component library: sets, variants, states.',
            caption: 'The shared language of the whole platform.',
          },
          showcase: [
            {
              heading: 'Built to be built',
              text: 'Because I was also implementing these components in code, the system stayed honest: every variant existed because a screen needed it, named so a developer — me — could find it. The next maturity step I scoped: a semantic token layer and consolidation of legacy variants.',
              image: {
                src: null, // '/projects/Backgammon/system-states.png'
                placeholder:
                  'A state-heavy component set — e.g. dialogs or gameplay messages with all variants visible.',
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
