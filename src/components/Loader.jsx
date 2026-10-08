import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';
import './Loader.css';

// Opening screen: the name rises letter by letter over the bare
// page, a hairline draws underneath, then the curtain lifts into
// the hero (whose own animations wait for it). Shows once per
// session; never on touch-slow revisits.
export default function Loader() {
  const [phase, setPhase] = useState(() =>
    sessionStorage.getItem('dnb-seen') ? 'done' : 'loading'
  );

  useEffect(() => {
    if (phase !== 'loading') return;
    document.documentElement.classList.add('is-loading');

    const MIN = 1100; // long enough to read the name
    const MAX = 2600; // never hold a visitor hostage
    const t0 = performance.now();
    let t1, t2;

    const finish = () => {
      const wait = Math.max(0, MIN - (performance.now() - t0));
      t1 = setTimeout(() => {
        setPhase('leaving');
        document.documentElement.classList.remove('is-loading');
        sessionStorage.setItem('dnb-seen', '1');
        t2 = setTimeout(() => setPhase('done'), 700);
      }, wait);
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const cap = setTimeout(finish, MAX);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(cap);
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.classList.remove('is-loading');
    };
  }, [phase]);

  if (phase === 'done') return null;
  const name = profile.name || 'Portfolio';
  return (
    <div className={`loader${phase === 'leaving' ? ' loader--leaving' : ''}`} aria-hidden='true'>
      <div className='loader__inner'>
        <p className='loader__name'>
          {name.split('').map((ch, i) => (
            <span className='loader__cell' key={i}>
              <span className='loader__letter' style={{ '--i': i }}>
                {ch === ' ' ? ' ' : ch}
              </span>
            </span>
          ))}
        </p>
        <span className='loader__line' />
      </div>
    </div>
  );
}
