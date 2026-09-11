import { fun } from '../data/content.js'
import './Prose.css'

export default function Fun() {
  return (
    <div className="page prose">
      <h1 className="prose__heading">{fun.heading}</h1>
      <p>{fun.intro}</p>
      <ul className="fun-list">
        {fun.items.map((item) => (
          <li key={item.title}>
            <span className="fun-list__title">{item.title}</span>
            <span className="fun-list__desc">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
