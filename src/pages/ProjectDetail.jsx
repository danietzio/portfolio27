import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/content.js';
import './ProjectDetail.css';

// Renders an image if `src` is set, otherwise the dashed placeholder
// box (.figure-placeholder) with instructions from content.js.
function SectionFigure({ image, wide = true }) {
  if (!image) return null;
  return (
    <figure className={`project-detail__figure${wide ? ' project-detail__figure--wide' : ''}`}>
      {image.src ? (
        <img src={image.src} alt={image.caption || ''} />
      ) : (
        <div className='figure-placeholder'>
          Image placeholder
          <span>{image.placeholder}</span>
        </div>
      )}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
import { useEffect, useRef } from 'react';

function ProjectVideo({ project }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} muted loop playsInline className='project-detail__cover'>
      <source src={project.cover} type='video/mp4' />
    </video>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to='/' replace />;

  const s = project.sections;

  return (
    <article className='page project-detail'>
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

      {/* Hero */}
      <figure className='project-detail__figure project-detail__figure--hero'>
        {project.cover ? (
          <ProjectVideo project={project} />
        ) : (
          <div className='figure-placeholder'>
            Image placeholder
            <span>{project.coverPlaceholder}</span>
          </div>
        )}
      </figure>

      {/* Headline numbers */}
      {project.metrics && (
        <ul className='metrics'>
          {project.metrics.map((m) => (
            <li key={m.label}>
              <span className='metrics__value'>{m.value}</span>
              <span className='metrics__label'>{m.label}</span>
            </li>
          ))}
        </ul>
      )}

      {s && (
        <div className='project-detail__case-study'>
          {/* The challenge + what I owned */}
          <section className='case-section case-section--lead case-section--tight'>
            <p className='case-section__eyebrow'>The problem</p>
            <h2>{s.challenge.title}</h2>
            {s.challenge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <SectionFigure image={s.challenge.image} />
          <section className='case-section case-section--tight' style={{ paddingTop: 0 }}>
            {s.ownership && (
              <dl className='role-list'>
                {s.ownership.rows.map((row) => (
                  <div className='role-list__row' key={row.term}>
                    <dt>{row.term}</dt>
                    <dd>{row.detail}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>

          {/* Strategy / principles */}
          <section className='case-section case-section--tint'>
            <p className='case-section__eyebrow'>Design principles</p>
            <h2>{s.strategy.title}</h2>
            <p className='case-section__intro'>{s.strategy.intro}</p>
            <div className='strategy-grid'>
              {s.strategy.items.map((item) => (
                <article className='strategy-card' key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Intake study — the 23% story */}
          {s.research && (
            <>
              <section className='case-section case-section--tight'>
                <p className='case-section__eyebrow'>{s.research.eyebrow}</p>
                <h2>{s.research.title}</h2>
                {s.research.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {s.research.studyMeta && (
                  <dl className='study-meta'>
                    {s.research.studyMeta.map((m) => (
                      <div key={m.term}>
                        <dt>{m.term}</dt>
                        <dd>{m.detail}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {s.research.compare && (
                  <div className='compare'>
                    {s.research.compare.map((col) => (
                      <div className='compare__col' key={col.title}>
                        <h3>{col.title}</h3>
                        <p>{col.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <SectionFigure image={s.research.image} />

              <section className='case-section case-section--tight' style={{ paddingTop: 0 }}>
                <h3 className='subhead'>{s.research.findingsTitle}</h3>
                <div className='finding-list'>
                  {s.research.findings.map((f) => (
                    <div className='finding' key={f.title}>
                      <span className='finding__stat'>{f.stat}</span>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {s.research.quotes && (
                  <div className='quote-row'>
                    {s.research.quotes.map((q) => (
                      <figure className='pull-quote' key={q.quote}>
                        <blockquote>{q.quote}</blockquote>
                        <figcaption>{q.attribution}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                {s.research.result && (
                  <div className='result-callout'>
                    <span className='result-callout__value'>{s.research.result.value}</span>
                    <div>
                      <strong>{s.research.result.strong}</strong>
                      <p>{s.research.result.text}</p>
                    </div>
                  </div>
                )}
              </section>
            </>
          )}

          {/* Exploration */}
          <section className='case-section case-section--split case-section--tight'>
            <div>
              <p className='case-section__eyebrow'>Exploration</p>
              <h2>{s.exploration.title}</h2>
            </div>
            <div>
              {s.exploration.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <SectionFigure image={s.exploration.image} />

          {/* Validation & iteration */}
          <section className='case-section case-section--validation case-section--tight'>
            <p className='case-section__eyebrow'>Testing & iteration</p>
            <h2>{s.validation.title}</h2>
            <p>{s.validation.text}</p>
            <div className='validation-track'>
              {s.validation.markers.map((marker, index) => (
                <div key={marker}>
                  <span>0{index + 1}</span>
                  <p>{marker}</p>
                </div>
              ))}
            </div>
          </section>
          <SectionFigure image={s.validation.image} />

          {/* Core flows */}
          <section className='case-section case-section--tight'>
            <p className='case-section__eyebrow'>Core flows</p>
            <h2>{s.flows.title}</h2>
            <div className='flow-list flow-list--spaced'>
              {s.flows.items.map((item) => (
                <article className='flow-item' key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <SectionFigure image={s.flows.image} />

          {/* Key decisions */}
          <section className='case-section case-section--quote'>
            <p className='case-section__eyebrow'>Key decisions</p>
            <blockquote>{s.decisions.quote}</blockquote>
            <div className='decision-list'>
              {s.decisions.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className='case-section case-section--outcome'>
            <p className='case-section__eyebrow'>Outcome</p>
            <h2>{s.outcome.title}</h2>
            {s.outcome.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className='outcome-callout'>{project.outcome}</p>
          </section>
          <SectionFigure image={s.outcome.image} />

          {/* Reflection */}
          <section className='case-section case-section--reflection'>
            <p className='case-section__eyebrow'>Reflection</p>
            <h2>{s.reflection.title}</h2>
            <p>{s.reflection.text}</p>
          </section>
        </div>
      )}

      {!s && (
        <div className='project-detail__body'>
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </article>
  );
}
