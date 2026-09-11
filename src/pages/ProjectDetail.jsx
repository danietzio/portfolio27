import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/content.js'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <article className="page project-detail">
      <Link to="/" className="link-underline project-detail__back">
        ← Back to work
      </Link>

      <header className="project-detail__header">
        <p className="project-detail__subtitle">{project.subtitle}</p>
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__summary">{project.summary}</p>
      </header>

      {project.cover && (
        <img className="project-detail__cover" src={project.cover} alt={project.title} />
      )}

      <div className="project-detail__body">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
