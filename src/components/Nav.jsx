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
          <a href={profile.resumeUrl} target='_blank' rel='noreferrer'>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
