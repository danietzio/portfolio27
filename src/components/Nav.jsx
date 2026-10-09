import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/content.js';
import './Nav.css';

export default function Nav() {
  // Hide while scrolling down (give the page the full viewport),
  // reappear on the first scroll up — or near the top.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      setHidden(goingDown && y > 140);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${hidden ? ' nav--hidden' : ''}`}>
      <div className='nav__inner'>
        <NavLink to='/' className='nav__home' aria-label={`${profile.name} — home`}>
          {profile.logo ? (
            <img className='nav__logo' src={profile.logo} alt={profile.name} />
          ) : (
            <span className='nav__name'>{profile.name}</span>
          )}
        </NavLink>
        <nav className='nav__links' aria-label='Primary'>
          <NavLink to='/' end className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Work
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'is-active' : '')}>
            About
          </NavLink>
          {/* the one action the bar points at — download icon, then the word */}
          <a href={profile.resumeUrl} target='_blank' rel='noreferrer' className='nav__cta'>
            <svg
              className='nav__cta-icon'
              viewBox='0 0 16 16'
              width='13'
              height='13'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M8 2.5v8m0 0 3-3m-3 3-3-3' />
              <path d='M2.8 13.5h10.4' />
            </svg>
            Resume
          </a>
          {/* availability — the most useful thing a navbar can tell a recruiter */}
          <span className='nav__status'>
            <span className='nav__status-dot' aria-hidden='true' />
            Open to roles
          </span>
        </nav>
      </div>
    </header>
  );
}
