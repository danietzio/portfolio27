import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/content.js';
import './ProjectDetail.css';

/* ── hooks ─────────────────────────────────────────────────── */

// True once the element has entered the viewport (fires once).
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Counts 0 → target when in view.
function useCountUp(target, inView, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

// Counts a float 0 → target (for ratings etc.).
function useCountUpFloat(target, inView, duration = 1400, from = 0) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + eased * (target - from));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, from]);
  return value;
}

// Renders **text** inside a string as an accent highlight.
function Rich({ text }) {
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong className='hl' key={i}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

/* ── animated hero metrics ─────────────────────────────────── */

// Parses a metric like "100%", "334", "15k", "2 → 4.3" and
// animates its last number when scrolled into view.
function MetricValue({ value, inView }) {
  const match = String(value).match(/^(.*?)([\d.]+)([^\d.]*)$/);
  const target = match ? parseFloat(match[2]) : null;
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;
  const n = useCountUpFloat(target ?? 0, inView && target !== null);
  if (!match) return <>{value}</>;
  return (
    <>
      {match[1]}
      {n.toFixed(decimals)}
      {match[3]}
    </>
  );
}

function Metrics({ metrics }) {
  const [ref, inView] = useInView(0.4);
  return (
    <ul className='metrics' ref={ref}>
      {metrics.map((m) => (
        <li key={m.label}>
          <span className='metrics__value'>
            <MetricValue value={m.value} inView={inView} />
          </span>
          <span className='metrics__label'>{m.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── section impact visuals (animate on scroll) ────────────── */

const STAR = 'M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.5L12 16.9 6.1 20l1.3-6.5L2.5 9l6.6-.8z';

// A row of stars; each star fills exactly its own fraction of
// `value` (gaps no longer distort the fill).
function StarRow({ value, outOf = 5 }) {
  return (
    <div className='stars' role='img' aria-label={`${value} out of ${outOf} stars`}>
      {Array.from({ length: outOf }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span className='star-cell' key={i}>
            <svg viewBox='0 0 24 24' className='star star--empty' aria-hidden='true'>
              <path d={STAR} />
            </svg>
            <span className='star-cell__fill' style={{ width: `${fill}%` }}>
              <svg viewBox='0 0 24 24' className='star star--full' aria-hidden='true'>
                <path d={STAR} />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

// Before/after star rating: the old score sits dimmed above the
// new one, which counts up and fills when scrolled into view.
function RatingImpact({ impact }) {
  const [ref, inView] = useInView(0.5);
  const value = useCountUpFloat(impact.to, inView, 1600, impact.from);
  return (
    <div className='impact' ref={ref}>
      <div className='impact__text'>
        <strong>{impact.heading}</strong>
        <p>{impact.label}</p>
      </div>
      <div className='impact__figure'>
        <div className='rating-row rating-row--before'>
          <span className='rating-row__num'>{impact.from.toFixed(1)}</span>
          <StarRow value={inView ? impact.from : 0} outOf={impact.outOf || 5} />
          <span className='rating-row__tag'>before</span>
        </div>
        <div className='rating-row'>
          <span className='rating-row__num'>{value.toFixed(1)}</span>
          <StarRow value={value} outOf={impact.outOf || 5} />
          <span className='rating-row__tag'>after</span>
        </div>
      </div>
    </div>
  );
}

// Peak-players counter: a dot field fills in as the number counts up.
function PeakImpact({ impact }) {
  const [ref, inView] = useInView(0.5);
  const value = useCountUpFloat(impact.value, inView, 1800);
  const DOTS = 120; // each dot ≈ value/120 players
  const lit = Math.round((value / impact.value) * DOTS);
  return (
    <div className='impact' ref={ref}>
      <div className='impact__text'>
        <strong>{impact.heading}</strong>
        <p>{impact.label}</p>
      </div>
      <div className='impact__figure'>
        <span className='impact__value'>
          {Math.round(value).toLocaleString('en-US')}
        </span>
        <div className='dots' aria-hidden='true'>
          {Array.from({ length: DOTS }).map((_, i) => (
            <span key={i} className={i < lit ? 'dot is-lit' : 'dot'} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Impact({ impact }) {
  if (!impact) return null;
  if (impact.type === 'rating') return <RatingImpact impact={impact} />;
  if (impact.type === 'peak') return <PeakImpact impact={impact} />;
  return null;
}

/* ── ambient background glow (themed pages) ────────────────── */

// Two soft glow blobs in the page's accent colors. Fixed to the
// viewport so they cover the whole page at any scroll position;
// their own slow drift loops (CSS) provide the motion.
function PageGlow() {
  return <div className='page-glow' aria-hidden='true' />;
}

/* ── lightbox ──────────────────────────────────────────────── */

const LightboxContext = createContext(() => {});

function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;
  const isVideo = /\.(mp4|webm)$/i.test(item.src);
  return (
    <div className='lightbox' onClick={onClose} role='dialog' aria-modal='true'>
      {isVideo ? (
        <video src={item.src} autoPlay loop muted playsInline controls onClick={(e) => e.stopPropagation()} />
      ) : (
        <img src={item.src} alt={item.caption || ''} />
      )}
      {item.caption && <p className='lightbox__caption'>{item.caption}</p>}
      <button className='lightbox__close' onClick={onClose} aria-label='Close'>
        ×
      </button>
    </div>
  );
}

/* ── media ─────────────────────────────────────────────────── */

// Any video on the page plays while it's on screen and pauses
// when scrolled past.
function ScrollVideo({ src, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <video ref={ref} src={src} loop muted playsInline preload='metadata' aria-label={label} />;
}

function Media({ image, plain = false }) {
  const openLightbox = useContext(LightboxContext);
  const [failed, setFailed] = useState(false);
  const isVideo = /\.(mp4|webm)$/i.test(image.src || '');
  const media = image.src && !failed ? (
    <button
      type='button'
      className='zoomable'
      onClick={() => openLightbox(image)}
      aria-label={`Enlarge: ${image.caption || 'design'}`}
    >
      {isVideo ? (
        <ScrollVideo src={image.src} label={image.caption || ''} />
      ) : (
        <img
          src={image.src}
          alt={image.caption || image.placeholder || ''}
          onError={() => setFailed(true)}
        />
      )}
    </button>
  ) : (
    <div className='figure-placeholder'>
      Image placeholder
      <span>{image.placeholder}</span>
    </div>
  );

  if (plain) return media;
  return (
    <figure className='project-detail__figure project-detail__figure--in-row'>
      {media}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

// Page cover: image or video. A video cover plays while it's on
// screen and pauses when scrolled past (saves battery, feels alive).
function CoverMedia({ project }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.tagName !== 'VIDEO') return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!project.cover || failed) {
    return (
      <div className='figure-placeholder'>
        Image placeholder
        <span>{project.coverPlaceholder}</span>
      </div>
    );
  }
  if (/\.(mp4|webm)$/i.test(project.cover)) {
    return (
      <video
        ref={ref}
        className='project-detail__cover'
        src={project.cover}
        loop
        muted
        playsInline
        preload='metadata'
        aria-label={project.title}
      />
    );
  }
  return (
    <img
      className='project-detail__cover'
      src={project.cover}
      alt={project.title}
      onError={() => setFailed(true)}
    />
  );
}

// Full-width solution hero for a section.
function SectionHero({ image, narrow = false }) {
  if (!image) return null;
  return (
    <figure className={`section-hero${narrow ? ' section-hero--narrow' : ''}`}>
      <Media image={image} plain />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

// Showcase: media in soft container left, caption right.
function Showcase({ items }) {
  if (!items) return null;
  return (
    <div className='showcase'>
      {items.map((item) => (
        <div className='showcase-row' key={item.heading}>
          <div className='showcase-row__media'>
            <Media image={item.image} plain />
          </div>
          <div className='showcase-row__text'>
            <h3>{item.heading}</h3>
            <p>
              <Rich text={item.text} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Screenshot grid: 2 or 3 columns of smaller shots.
function ShotGrid({ grid }) {
  if (!grid) return null;
  return (
    <div className='shot-grid-wrap'>
      {grid.title && <h3 className='shot-grid__title'>{grid.title}</h3>}
      <div className={`shot-grid shot-grid--${grid.cols || 3}`}>
        {grid.images.map((image, i) => (
          <Media image={image} key={i} />
        ))}
      </div>
    </div>
  );
}

/* ── text pieces ───────────────────────────────────────────── */

function SectionTitle({ lead, rest }) {
  return (
    <h2 className='case-title'>
      <span className='case-title__lead'>{lead}</span> <span className='case-title__rest'>{rest}</span>
    </h2>
  );
}

// Problem / Opportunity / Solution — text only, three tinted cards.
function POS({ pos }) {
  if (!pos) return null;
  const cells = [
    { label: 'The problem', text: pos.problem },
    { label: 'The opportunity', text: pos.opportunity },
    { label: 'The solution', text: pos.solution },
  ];
  return (
    <div className='pos-grid'>
      {cells.map((c) => (
        <div className='pos-grid__cell' key={c.label}>
          <h3>{c.label}</h3>
          <p>
            <Rich text={c.text} />
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── research charts (animate on scroll) ───────────────────── */

// Horizontal bars, one hue, direct-labeled, animated width.
function BarChart({ chart }) {
  const [ref, inView] = useInView(0.5);
  return (
    <div className='chart' ref={ref}>
      <h3 className='chart__title'>{chart.title}</h3>
      <div className='chart__bars'>
        {chart.bars.map((bar) => (
          <div className='chart__row' key={bar.label}>
            <span className='chart__label'>{bar.label}</span>
            <div className='chart__track'>
              <div
                className='chart__fill'
                style={{ width: inView ? `${bar.value}%` : '0%' }}
              />
            </div>
            <span className='chart__value'>{bar.display}</span>
          </div>
        ))}
      </div>
      {chart.note && <p className='chart__note'>{chart.note}</p>}
    </div>
  );
}

// Findings with small animated stat bars.
function FindingBars({ findings }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div className='finding-list' ref={ref}>
      {findings.map((f) => (
        <div className='finding' key={f.title}>
          <span className='finding__stat'>{f.display}</span>
          <div className='finding__body'>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
            <div className='chart__track chart__track--thin'>
              <div className='chart__fill' style={{ width: inView ? `${f.stat}%` : '0%' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// The 23% payoff — counts up when it enters the viewport.
function ResultCounter({ result }) {
  const [ref, inView] = useInView(0.6);
  const value = useCountUp(result.value, inView);
  return (
    <div className='result-callout' ref={ref}>
      <span className='result-callout__value'>
        {value}
        <em>%</em>
      </span>
      <div>
        <strong>{result.strong}</strong>
        <p>{result.text}</p>
      </div>
    </div>
  );
}

/* ── nav ───────────────────────────────────────────────────── */

const sectionNoun = (nav, active) => {
  const label = nav.find((n) => n.id === active)?.label || '';
  return /^overview$/i.test(label) ? 'this project' : label;
};

function PillNav({ nav, noteIds = [] }) {
  const [active, setActive] = useState(nav[0]?.id);
  const navRef = useRef(null);
  const [flash, setFlash] = useState(false);
  const flashed = useRef(false);

  // One-time attention moment: plays ONLY when we actually watch
  // the reader cross from the opening section into the next one.
  // Loading mid-page never triggers it (no witnessed transition).
  const prevActive = useRef(null);
  useEffect(() => {
    const prev = prevActive.current;
    prevActive.current = active;
    if (flashed.current || !prev || prev !== nav[0]?.id || active === prev) return;
    flashed.current = true;
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 4000);
    return () => clearTimeout(t);
  }, [active, nav]);

  // One rAF-throttled handler: sets the progress line (--scrollp)
  // and picks the active section deterministically — the last
  // section whose top has passed 35% of the viewport. No racing,
  // no flicker.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      doc.style.setProperty('--scrollp', p.toFixed(2) + '%');
      const line = window.innerHeight * 0.35;
      let current = nav[0]?.id;
      for (const { id } of nav) {
        const sec = document.getElementById(id);
        if (sec && sec.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [nav]);

  return (
    <>
      <div
        className={[
          'key-hint',
          flash ? 'key-hint--flash' : '',
          noteIds.includes(active) ? '' : 'key-hint--hidden',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden='true'
      >
        <span>press</span>
        <kbd>D</kbd>
        <span>for the decisions behind</span>
        <span className='key-hint__section' key={active}>
          {sectionNoun(nav, active)}
        </span>
      </div>
      <nav className='pill-nav' aria-label='Case study sections' ref={navRef}>
      {nav.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
          {label}
        </a>
      ))}
      </nav>
    </>
  );
}

/* ── "D" — the design-rationale overlay ─────────────────────── */

// Press D anywhere: a big-type note explains why the section
// you're reading is designed the way it is. D or Esc closes it.
function DesignNote({ project }) {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setNote(null);
        return;
      }
      if (e.key.toLowerCase() !== 'd' || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      setNote((cur) => {
        if (cur) return null;
        const s = project.sections;
        const navItems = project.nav || [];
        if (!s || !navItems.length) return null;
        const line = window.innerHeight * 0.35;
        let id = navItems[0].id;
        for (const n of navItems) {
          const el = document.getElementById(n.id);
          if (el && el.getBoundingClientRect().top <= line) id = n.id;
        }
        const pool = [s.overview, ...(s.work || []), s.process, s.reflection].filter(Boolean);
        const sec = pool.find((x) => x.id === id);
        const text = sec?.rationale;
        if (!text) return null;
        const rawLabel = navItems.find((n) => n.id === id)?.label || '';
        return { label: /^overview$/i.test(rawLabel) ? 'this project' : rawLabel, text };
      });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project]);

  if (!note) return null;
  return (
    <div className='design-note' onClick={() => setNote(null)} role='dialog' aria-modal='true'>
      <div className='design-note__inner'>
        <p className='design-note__eyebrow'>Decisions behind {note.label}</p>
        <p className='design-note__text'>
          <Typewriter text={note.text} />
        </p>
        <p className='design-note__hint'>
          every section has its own note — <kbd>D</kbd> or <kbd>Esc</kbd> to close
        </p>
      </div>
    </div>
  );
}

// The rationale arrives word by word — a fast cascade, not a crawl.
function Typewriter({ text }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span className='dn-word' style={{ '--i': i }} key={i}>
          {word}&nbsp;
        </span>
      ))}
    </>
  );
}

/* ── scroll reveal ─────────────────────────────────────────── */

// Motion only where it carries meaning: the observer drives the
// hero unveiling alone — text and rows appear instantly.
const REVEAL_SELECTOR = '.section-hero';

function useScrollReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll(REVEAL_SELECTOR);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-rv');
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* ── page ──────────────────────────────────────────────────── */

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Per-project theme: token overrides applied to <body> while
  // this page is open; the site's defaults return on leave.
  useEffect(() => {
    const theme = project?.theme;
    if (!theme) return;
    const body = document.body;
    const prevBg = body.style.background;
    Object.entries(theme).forEach(([k, v]) => body.style.setProperty(k, v));
    if (theme['--bg']) body.style.background = theme['--bg'];
    return () => {
      Object.keys(theme).forEach((k) => body.style.removeProperty(k));
      body.style.background = prevBg;
    };
  }, [project]);

  if (!project) return <Navigate to='/' replace />;

  const s = project.sections;

  // Opening a case study always starts at the top (router keeps
  // the previous page's scroll position otherwise).
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  useScrollReveal([slug]);

  return (
    <LightboxContext.Provider value={setLightboxItem}>
    <article className={`page project-detail project--${project.slug}`}>
      {project.theme && <PageGlow />}
      <Link to='/' className='link-underline project-detail__back'>
        ← Back to work
      </Link>

      <header className='project-detail__header'>
        <p className='project-detail__subtitle'>{project.subtitle}</p>
        <h1 className='project-detail__title'>{project.title}</h1>
        <p className='project-detail__summary'>{project.summary}</p>
      </header>

      {project.role && (
        <dl className='project-detail__meta'>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.tag}</dd>
          </div>
        </dl>
      )}

      <figure className='project-detail__figure project-detail__figure--hero'>
        <CoverMedia project={project} />
      </figure>

      {project.metrics && <Metrics metrics={project.metrics} />}

      {s && (
        <div className='project-detail__case-study'>
          {/* ══ OVERVIEW ══ */}
          <section className='case-section case-section--lead' id={s.overview.id}>
            <div className='problem-block'>
              <p className='case-section__eyebrow'>{s.overview.problemEyebrow}</p>
              {s.overview.problemParagraphs.map((p) => (
                <p key={p}>
                  <Rich text={p} />
                </p>
              ))}
            </div>
            <p className='case-section__eyebrow'>{s.overview.eyebrow}</p>
            <SectionTitle lead={s.overview.titleLead} rest={s.overview.titleRest} />
            {s.overview.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
            <dl className='role-list'>
              {s.overview.ownership.rows.map((row) => (
                <div className='role-list__row' key={row.term}>
                  <dt>{row.term}</dt>
                  <dd>{row.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ══ WORK SECTIONS ══ */}
          {s.work.map((section) => (
            <section className='case-section case-section--work' id={section.id} key={section.id}>
              <p className='case-section__eyebrow'>{section.eyebrow}</p>
              <SectionTitle lead={section.titleLead} rest={section.titleRest} />

              {section.type === 'research' ? (
                <>
                  <p className='case-section__intro'>
                    <Rich text={section.lede} />
                  </p>
                  <dl className='study-meta'>
                    {section.studyMeta.map((m) => (
                      <div key={m.term}>
                        <dt>{m.term}</dt>
                        <dd>{m.detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <BarChart chart={section.chartEase} />
                  <SectionHero image={section.hero} />
                  <BarChart chart={section.chartPlans} />
                  <FindingBars findings={section.findings} />
                  <ResultCounter result={section.result} />
                </>
              ) : (
                <>
                  <POS pos={section.pos} />
                  {section.cast && (
                    <div className='cast'>
                      {section.cast.map((p) => (
                        <div className='cast__person' key={p.name}>
                          <span className='cast__name'>{p.name}</span>
                          <span className='cast__role'>{p.role}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <SectionHero image={section.hero} />
                  {section.gridFirst ? (
                    <>
                      <ShotGrid grid={section.grid} />
                      <Showcase items={section.showcase} />
                    </>
                  ) : (
                    <>
                      <Showcase items={section.showcase} />
                      <ShotGrid grid={section.grid} />
                    </>
                  )}
                  {/* optional annex at the end of a section: a tinted
                      panel, text left + small media right — visually
                      apart from the steps above it */}
                  {section.aside && section.aside.src && (
                    <aside className='sec-annex'>
                      <div className='sec-annex__text'>
                        {section.aside.eyebrow && <p className='sec-annex__eyebrow'>{section.aside.eyebrow}</p>}
                        {section.aside.heading && <h3 className='sec-annex__heading'>{section.aside.heading}</h3>}
                        {section.aside.text && (
                          <p className='sec-annex__body'>
                            <Rich text={section.aside.text} />
                          </p>
                        )}
                      </div>
                      <div className='sec-annex__media'>
                        <Media image={section.aside} />
                      </div>
                    </aside>
                  )}
                  <Impact impact={section.impact} />
                </>
              )}
            </section>
          ))}

          {/* ══ PROCESS & COLLABORATION ══ */}
          {s.process && (
            <section className='case-section case-section--work' id={s.process.id}>
              <p className='case-section__eyebrow'>{s.process.eyebrow}</p>
              <SectionTitle lead={s.process.titleLead} rest={s.process.titleRest} />
              <p className='case-section__intro'>
                <Rich text={s.process.intro} />
              </p>
              <div className='flow-list flow-list--spaced' style={{ marginTop: 42 }}>
                {s.process.steps.map((step) => (
                  <article className='flow-item' key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>
                        <Rich text={step.text} />
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              {s.process.image &&
                s.process.image.src &&
                (s.process.image.size === 'small' ? (
                  <div className='media-small'>
                    <Media image={s.process.image} />
                  </div>
                ) : (
                  <SectionHero image={s.process.image} />
                ))}
              {s.process.partners && (
                <>
                  <h3 className='subhead'>{s.process.partners.title}</h3>
                  <div className='strategy-grid' style={{ marginTop: 24 }}>
                    {s.process.partners.items.map((item) => (
                      <article className='strategy-card' key={item.label}>
                        <h3>{item.label}</h3>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* ══ LEADERSHIP ══ */}
          {s.leadership && (
            <section className='case-section case-section--work case-section--tight'>
              <p className='case-section__eyebrow'>{s.leadership.eyebrow}</p>
              <h2>{s.leadership.title}</h2>
              <p>{s.leadership.text}</p>
            </section>
          )}

          {/* ══ REFLECTION ══ */}
          <section className='case-section case-section--reflection' id={s.reflection.id}>
            <p className='case-section__eyebrow'>Reflection</p>
            <h2>{s.reflection.title}</h2>
            <p>
              <Rich text={s.reflection.text} />
            </p>
          </section>

          {/* ══ TEAM PHOTO (page closer) ══ */}
          {s.process?.teamPhoto && <SectionHero image={s.process.teamPhoto} narrow />}
        </div>
      )}

      {!s && (
        <div className='project-detail__body'>
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.nav && (
        <PillNav
          nav={project.nav}
          noteIds={
            s
              ? [s.overview, ...(s.work || []), s.process, s.reflection]
                  .filter((x) => x && x.rationale)
                  .map((x) => x.id)
              : []
          }
        />
      )}
      <DesignNote project={project} />
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </article>
    </LightboxContext.Provider>
  );
}
