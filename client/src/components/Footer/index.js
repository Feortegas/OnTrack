import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <ul className="footer-container">
        <li className="footer-li" id="meet-us">
          Meet the devs
        </li>
        <li className="footer-li" id="on-track">
          (c)onTrack
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
