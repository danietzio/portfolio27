import { about, fun } from '../data/content.js';
import './Prose.css';

export default function About() {
  return (
    <div className='page prose about'>
      <h1 className='prose__heading'>{about.heading}</h1>
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {fun?.items?.length > 0 && (
        <>
          <h2 className='prose__heading prose__heading--sub'>{fun.heading}</h2>
          {fun.intro && <p>{fun.intro}</p>}
          <ul className='fun-list'>
            {fun.items.map((item) => (
              <li key={item.title}>
                <span className='fun-list__title'>{item.title}</span>
                {item.description && <span className='fun-list__desc'>{item.description}</span>}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
