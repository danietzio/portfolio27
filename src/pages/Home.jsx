import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, projects, experience } from '../data/content.js';
import './Home.css';

// **word** inside hero copy renders as an accent-colored word —
// the "Google." / "Microsoft and Sprinklr" treatment from your reference.
function Accent({ text }) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong className='hw' key={i}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

// Same **accent** parsing, but every word rises in on load —
// one orchestrated moment for the statement only.
function Rise({ text }) {
  if (!text) return null;
  let w = 0;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const isHl = part.startsWith('**') && part.endsWith('**');
    const words = (isHl ? part.slice(2, -2) : part).split(/\s+/).filter(Boolean);
    return (
      <span key={i} className={isHl ? 'hw' : undefined}>
        {/* the space lives OUTSIDE the overflow-hidden span — inside,
            inline-block trims it and the words glue together */}
        {words.map((word, j) => (
          <Fragment key={j}>
            <span className='wr'>
              <span className='wr__in' style={{ '--wd': `${w++ * 50}ms` }}>
                {word}
              </span>
            </span>{' '}
          </Fragment>
        ))}
      </span>
    );
  });
}

// Cards reveal once as they scroll into view.
function useInView() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          obs.disconnect();
        }
      },
      // reveal the moment any sliver of a card enters the viewport —
      // a stricter margin left below-the-fold cards invisible, hiding
      // the fact that there are more projects
      { rootMargin: '0px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Thumbnail videos play while visible.
function DoorVideo({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <video ref={ref} src={src} loop muted playsInline preload='metadata' />;
}

// One door = one project, painted in that project's own world.
// Uses the dedicated `thumb` (your designed thumbnail) — never
// the case study's own images. Without a thumb, the door is a
// clean color field carrying the name and hook.
function Door({ project, index }) {
  const ref = useInView();
  const company = project.subtitle?.split('•')[0]?.trim() || project.title;
  const isVideo = /\.(mp4|webm)$/i.test(project.thumb || '');
  // cardTheme paints the home card only (the case study keeps its own
  // theme); inline vars beat CSS class overrides, so this is the one
  // place a card's color can actually be changed.
  const t = project.cardTheme || project.theme;
  const paint = t
    ? {
        '--door-bg': t['--bg'],
        '--door-ink': t['--ink'],
        '--door-ink-soft': t['--ink-soft'],
        '--door-accent': t['--accent'],
      }
    : undefined;

  // With a thumbnail, YOUR image is the whole card — no scrim, no
  // caption: the banner itself carries the name and the hook.
  if (project.thumb) {
    return (
      <Link
        ref={ref}
        to={`/projects/${project.slug}`}
        className={`door door--img door--${project.slug}`}
        style={{ ...paint, '--door-delay': `${(index % 2) * 110}ms` }}
        aria-label={`${company} — read the case study`}
      >
        <span className='door__frame'>
          {isVideo ? <DoorVideo src={project.thumb} /> : <img src={project.thumb} alt='' loading='lazy' />}
        </span>
      </Link>
    );
  }

  // No thumbnail yet: a clean, empty color field in the project's
  // palette — a placeholder for the banner you'll design.
  return (
    <Link
      ref={ref}
      to={`/projects/${project.slug}`}
      className={`door door--${project.slug}`}
      style={{ ...paint, '--door-delay': `${(index % 2) * 110}ms` }}
      aria-label={`${company} — read the case study`}
    />
  );
}

export default function Home() {
  // the scroll hint lives until the person actually scrolls
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    profile.email && { label: 'Email', url: `mailto:${profile.email}` },
    ...(profile.social || []),
    profile.resumeUrl && { label: 'Resume', url: profile.resumeUrl },
  ].filter(Boolean);

  return (
    <div className='page page--wide home'>
      {/* ── Hero: ONE statement (name + role + accent words inside
             the sentence), then the "previously at" line under it —
             the structure of your reference. ── */}
      <section className={`hero hero--index${profile.portrait ? ' hero--portrait' : ''}`}>
        <div className='hero__text'>
        <h1 className='hero__statement'>
          <Rise text={profile.heroStatement || profile.headline || profile.role} />
        </h1>
        {profile.credential && (
          <p className='hero__prev hero__line' style={{ '--d': '480ms' }}>
            <Accent text={profile.credential} />
          </p>
        )}
        {profile.intro && (
          <p className='hero__intro hero__line' style={{ '--d': '560ms' }}>
            <Accent text={profile.intro} />
          </p>
        )}
        <div className='hero__foot hero__line' style={{ '--d': '700ms' }}>
          <ul className='hero__links'>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.url} target={l.url.startsWith('mailto') ? undefined : '_blank'} rel='noreferrer'>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {(profile.status || profile.location) && (
            <p className='hero__now'>
              {profile.status}
              {profile.status && profile.location ? '\u2002·\u2002' : ''}
              {profile.location}
            </p>
          )}
        </div>
        </div>
        {profile.portrait && (
          <div className='hero__portrait hero__line' style={{ '--d': '100ms' }} aria-hidden='true'>
            <img src={profile.portrait} alt='' />
          </div>
        )}
      </section>

      {/* floating scroll hint — vanishes as soon as you scroll */}
      <a
        className={`hero__scroll${scrolled ? ' hero__scroll--gone' : ''}`}
        href='#work'
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Selected work
        <span className='hero__scroll-arrow' aria-hidden='true'>
          ↓
        </span>
      </a>

      {/* ── The work: each project is a door into its own world ── */}
      <section className='doors' id='work' aria-label='Case studies'>
        {projects.map((p, i) => (
          <Door project={p} index={i} key={p.slug} />
        ))}
      </section>

      {/* ── Experience: a compact ledger — year, place, role ── */}
      <section className='xp' aria-label='Experience'>
        <h2 className='xp__title'>Experience</h2>
        <ol className='xp__list'>
          {experience.map((e) => {
            const body = (
              <>
                <span className='xp__year'>{e.year}</span>
                <span className='xp__what'>
                  <span className='xp__company'>{e.company}</span>
                  <span className='xp__role'>{e.role}</span>
                </span>
                {e.note && <span className='xp__note'>{e.note}</span>}
              </>
            );
            return (
              <li className='xp__row' key={e.year + e.company}>
                {e.url ? (
                  <a className='xp__link' href={e.url} target='_blank' rel='noreferrer'>
                    {body}
                  </a>
                ) : (
                  <span className='xp__link'>{body}</span>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
