import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleNav = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header>
      <div className="header-container ">
        <nav className="navbar ">
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
        <div className="element">
          <h1 className="title">
            <Link to="/dashboard" className="title">
              OnTrack
            </Link>
          </h1>
        </div>
        <div className="element">
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
