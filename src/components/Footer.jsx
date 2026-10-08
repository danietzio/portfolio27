import { profile } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="link-underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="footer__social">
          {profile.social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="link-underline">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} {profile.name} · Designed &amp; built by hand
        </p>
      </div>
    </footer>
  )
}
