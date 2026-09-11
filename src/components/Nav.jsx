import { NavLink } from 'react-router-dom'
import { profile } from '../data/content.js'
import './Nav.css'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__name">
          {profile.name}
        </NavLink>
        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Work
          </NavLink>
          <NavLink to="/fun" className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Fun
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : '')}>
            About
          </NavLink>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
