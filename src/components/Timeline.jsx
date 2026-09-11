import { experience } from '../data/content.js'
import './Timeline.css'

export default function Timeline() {
  return (
    <ul className="timeline">
      {experience.map((item, i) => (
        <li className="timeline__row" key={`${item.company}-${i}`}>
          <span className="timeline__year">{item.year}</span>
          <span className="timeline__body">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer" className="link-underline timeline__company">
                {item.company}
              </a>
            ) : (
              <span className="timeline__company">{item.company}</span>
            )}
            <span className="timeline__role">{item.role}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
