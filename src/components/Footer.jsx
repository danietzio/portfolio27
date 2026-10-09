import { useEffect, useRef } from 'react'
import { profile, nowStatus } from '../data/content.js'
import './Footer.css'

// "Right now" — a living status line, computed from PARIS time
// (the visitor's clock doesn't matter: the question is what
// Daniyal is doing, and Daniyal lives in Paris). The lines and
// hour ranges live in content.js — edit them there.
// The line rises in when the footer scrolls into view, and a
// blinking caret makes it read as being written this second.
function RightNow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  if (!nowStatus?.lines?.length) return null
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      hour12: false,
      timeZone: 'Europe/Paris',
    }).format(new Date())
  )
  const line = nowStatus.lines.find(({ from, to }) =>
    from <= to ? hour >= from && hour < to : hour >= from || hour < to
  )
  if (!line) return null
  return (
    <p className="footer__now" ref={ref}>
      <span className="footer__now-label">Right now</span>
      <span className="footer__now-text">probably {line.text}</span>
      <span className="footer__now-tz">{String(hour).padStart(2, '0')}h · Paris</span>
    </p>
  )
}

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
        <RightNow />
        <p className="footer__legal">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
