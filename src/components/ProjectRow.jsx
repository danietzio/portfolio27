import { Link } from 'react-router-dom'
import './ProjectRow.css'

export default function ProjectRow({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-row">
      <div className="project-row__thumb" aria-hidden="true">
        {project.cover ? (
          <img src={project.cover} alt="" />
        ) : (
          <span className="project-row__thumb-placeholder" />
        )}
      </div>
      <div className="project-row__text">
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__subtitle">{project.subtitle}</p>
      </div>
      <span className="project-row__tag">{project.tag}</span>
    </Link>
  )
}
