import { useEffect, useRef } from 'react';
import './Cursor.css';

// Cursor v2 — the inversion circle. One small disc that INVERTS
// whatever sits beneath it (mix-blend difference): dark on the
// cream pages, light on the dark ones, without ever choosing a
// color. Over links it swells slightly; over project cards it
// becomes a labeled pill ("View"). Native cursor returns over
// text fields; touch screens never see any of it.
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.documentElement.classList.add('has-cursor');
    const el = ref.current;
    let x = -100, y = -100, cx = -100, cy = -100, raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (reduced) el.style.transform = `translate(${x}px, ${y}px)`;

      const t = e.target;
      const card = t.closest?.('.door, .ow-card');
      const link = t.closest?.('a, button, [role="button"], .zoomable, label');
      const text = t.closest?.('input, textarea, select');

      el.classList.toggle('is-view', !!card);
      el.classList.toggle('is-link', !card && !!link && !text);
      document.documentElement.classList.toggle('cursor-native', !!text);
    };
    const down = () => el.classList.add('is-down');
    const up = () => el.classList.remove('is-down');
    const leave = () => (el.style.opacity = '0');
    const enter = () => (el.style.opacity = '1');

    const follow = () => {
      // a light trail — close behind, never detached
      cx += (x - cx) * 0.28;
      cy += (y - cy) * 0.28;
      el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(follow);
    };
    if (!reduced) raf = requestAnimationFrame(follow);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);
    return () => {
      document.documentElement.classList.remove('has-cursor', 'cursor-native');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.removeEventListener('mouseenter', enter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className='cursor2' ref={ref} aria-hidden='true'>
      <span className='cursor2__label'>View</span>
    </div>
  );
}
