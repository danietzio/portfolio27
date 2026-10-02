import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { profile, projects } from '../data/content.js';
import Timeline from '../components/Timeline.jsx';
import './Home.css';

// Cover video inside a door: plays while visible.
function DoorVideo({ src, label }) {
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
  return <video ref={ref} src={src} loop muted playsInline preload='metadata' aria-label={label} />;
}

// One door = one project, painted in that project's own world.
function Door({ project, index }) {
  const company = project.subtitle?.split('•')[0]?.trim() || project.title;
  const isVideo = /\.(mp4|webm)$/i.test(project.cover || '');
  const t = project.theme;
  const paint = t
    ? {
        '--door-bg': t['--bg'],
        '--door-ink': t['--ink'],
        '--door-ink-soft': t['--ink-soft'],
        '--door-accent': t['--accent'],
      }
    : undefined;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className='door'
      style={{ ...paint, '--door-delay': `${index * 90}ms` }}
    >
      {project.cover && (
        <div className='door__media' aria-hidden='true'>
          {isVideo ? (
            <DoorVideo src={project.cover} label='' />
          ) : (
            <img src={project.cover} alt='' loading='lazy' />
          )}
        </div>
      )}
      <div className='door__scrim' aria-hidden='true' />
      <div className='door__content'>
        <span className='door__company'>{company}</span>
        {project.hook && <span className='door__hook'>{project.hook}</span>}
        <span className='door__enter'>Enter the case study</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className='page page--wide home'>
      <section className='home-intro'>
        <h1 className='home-intro__title'>{profile.tagline}</h1>
      </section>

      {/* Each project is a door into its own world. */}
      <section className='doors' aria-label='Case studies'>
        {projects.map((p, i) => (
          <Door project={p} index={i} key={p.slug} />
        ))}
      </section>

      <section className='section'>
        <Timeline />
      </section>
    </div>
  );
}
