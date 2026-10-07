import { about } from '../data/content.js';
import './Prose.css';

export default function About() {
  return (
    <div className='page prose about'>
      <h1 className='prose__heading'>{about.heading}</h1>
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
