import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <ul className="footer-container">
        <li className="footer-li" id="meet-us">
          <Link to="meetTheDevs">Meet the devs</Link>
        </li>
        <li className="footer-li" id="on-track">
          ©OnTrack
        </li>
        <li className="footer-li" id="cute">
          <a
            id="cute-anchor"
            href="https://explore.org/livecams/dog-bless-you/puppy-whelping-room"
            target="_blank"
            rel="noopener noreferrer"
          >
            Something cute
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
