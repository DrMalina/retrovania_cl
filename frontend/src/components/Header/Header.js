import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <h1>
        <Link to='/' className='Header-link'>
          Retrovania
        </Link>
      </h1>
      <nav>
        <ul className='Header-menu'>
          <li>
            <Link to='/games' className='Header-link'>
              Browse Games
            </Link>
          </li>
          <li>
            <Link to='/signin' className='Header-link'>
              Sign In
            </Link>
          </li>
          <li>
            <Link to='/signup' className='Header-link'>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
