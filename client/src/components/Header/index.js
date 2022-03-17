import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChartGantt } from '@fortawesome/free-solid-svg-icons';
import './header.css';

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleNav = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const [isSignOpen, setIsSignOpen] = useState(false);

  const toggleSign = () => {
    setIsSignOpen(!isSignOpen);
  };

  return (
    <header>
      <div>
        <nav className="navbar">
          {/* Hamburger menu */}
          <div
            role="button"
            className={`navbar-burger ${isHamburgerOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => toggleNav()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>

          {/* Menu content */}
          <div
            id="navMenu"
            className={`navbar-menu ${isHamburgerOpen ? 'is-active' : ''}`}
          >
            <div className="navbar-start">
              <Link to="/dashboard" className="navbar-item">
                Dashboard
              </Link>
              <Link to="/project" className="navbar-item">
                Projects
              </Link>
              <Link to="/profile" className="navbar-item">
                Profile
              </Link>
              <Link to="/meetTheDevs" className="navbar-item">
                Meet the Devs
              </Link>
            </div>
          </div>
        </nav>

        {/* Website Title */}
        <div className="element header-container">
          <div className="burger-placeholder"></div>
          <h1 className="title">
            <Link to="/dashboard" className="white-text">
              <FontAwesomeIcon icon={faChartGantt}></FontAwesomeIcon>
              &nbsp;OnTrack
            </Link>
          </h1>

          {/* Sign In dropdown */}
          <div className={`dropdown is-right ${isSignOpen ? 'is-active' : ''}`}>
            <div className="dropdown-trigger">
              <button
                className="button navSign"
                aria-haspopup="true"
                aria-controls="dropdown-menu6"
                onClick={() => toggleSign()}
              >
                <span>Sign In</span>
                <span className="icon is-small">
                  <i aria-hidden="true">
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  </i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu6" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <input className="input" type="text" placeholder="email" />
                  <input className="input" type="text" placeholder="password" />
                  <button className="button"> Sign In </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
