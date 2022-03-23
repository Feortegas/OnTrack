import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer>
      <ul className='footer-container'>
        <li className='footer-li' id='meet-us'>
          <Link to='meetTheDevs' className='meet-the-devs'>
            Meet the devs
          </Link>
        </li>
        <li className='footer-li' id='on-track'>
          ©OnTrack
        </li>
        <li className='footer-li' id='github'>
          <a
            id='github-anchor'
            href='https://github.com/Feortegas/OnTrack'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            &nbsp;GitHub Repo
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
