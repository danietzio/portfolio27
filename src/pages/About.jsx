import { useState } from 'react';
import { about, fun, aboutPhotos } from '../data/content.js';
import './Prose.css';

// same loading shimmer as everywhere else (.media-ld)
function AboutPhoto({ photo }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className='about-photo'>
      <span className={`media-ld${loaded ? ' is-loaded' : ''}`}>
        <img src={photo.src} alt={photo.alt || ''} loading='lazy' onLoad={() => setLoaded(true)} />
      </span>
      {photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}

export default function About() {
  return (
    <div className='page prose about'>
      <h1 className='prose__heading'>{about.heading}</h1>
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {/* casual photos — see aboutPhotos in content.js */}
      {aboutPhotos?.length > 0 && (
        <div className={`about-photos${aboutPhotos.length === 1 ? ' about-photos--single' : ''}`}>
          {aboutPhotos.map((photo) => (
            <AboutPhoto photo={photo} key={photo.src} />
          ))}
        </div>
      )}

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
