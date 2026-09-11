import { profile, projects } from '../data/content.js'
import Timeline from '../components/Timeline.jsx'
import ProjectRow from '../components/ProjectRow.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className="page page--wide">
      <section className="hero">
        <h1 className="hero__title">{profile.tagline}</h1>
      </section>

      <section className="section">
        <Timeline />
      </section>

      <section className="section">
        <div className="project-list">
          {projects.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
