import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartGantt } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import Login from '../Login';

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleNav = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className='background-color-secondary'>
      <div>
        <nav className='navbar outline primary'>
          {/* Hamburger menu */}
          <div
            role='button'
            className={`navbar-burger font${
              isHamburgerOpen ? 'is-active' : ''
            }`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => toggleNav()}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>

          {/* Menu content */}
          <div
            id='navMenu'
            className={`navbar-menu primary ${
              isHamburgerOpen ? 'is-active' : ''
            }`}
          >
            <div className='navbar-start primary'>
              <Link
                to='/dashboard'
                className='navbar-item font primary'
                onClick={() => toggleNav()}
              >
                Dashboard
              </Link>
              <Link
                to='/project'
                className='navbar-item font primary'
                onClick={() => toggleNav()}
              >
                Projects
              </Link>
              <Link
                to='/profile'
                className='navbar-item font primary'
                onClick={() => toggleNav()}
              >
                Profile
              </Link>
              <Link
                to='/meetTheDevs'
                className='navbar-item font primary'
                onClick={() => toggleNav()}
              >
                Meet the Devs
              </Link>
            </div>
          </div>
        </nav>

        {/* Website Title */}
        <div className='element header-container'>
          <div className='burger-placeholder'></div>
          <h1 className='title'>
            <Link to='/dashboard' className='white-text'>
              <FontAwesomeIcon icon={faChartGantt}></FontAwesomeIcon>
              &nbsp;OnTrack
            </Link>
          </h1>
          {/* Sign In dropdown */}
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;
