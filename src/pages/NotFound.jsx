import { Link } from 'react-router-dom';
import './Prose.css';

export default function NotFound() {
  return (
    <div className='page prose about'>
      <h1 className='prose__heading'>Page not found.</h1>
      <p>
        <Link to='/' className='link-underline'>
          Back home
        </Link>
      </p>
    </div>
  );
}
