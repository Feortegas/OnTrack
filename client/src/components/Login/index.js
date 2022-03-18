import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './login.css';

function Login() {
  const [isSignOpen, setIsSignOpen] = useState(false);

  const toggleSign = () => {
    setIsSignOpen(!isSignOpen);
  };

  return (
    <>
      <div className={`dropdown is-right ${isSignOpen ? 'is-active' : ''}`}>
        <div className='dropdown-trigger'>
          <button
            className='button navSign primary font'
            aria-haspopup='true'
            aria-controls='dropdown-menu6'
            onClick={() => toggleSign()}
          >
            <span>Sign In</span>
            <span className='icon is-small'>
              <i aria-hidden='true'>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu6' role='menu'>
          <div className='dropdown-content accent'>
            <div className='dropdown-item'>
              <form className=''>
                <div className='field'>
                  <label className='label font'>Email</label>
                  <div className='control'>
                    <input
                      className='input primary font'
                      type='email'
                      placeholder='e.g. alex@example.com'
                    />
                  </div>
                </div>

                <div className='field'>
                  <label className='label font'>Password</label>
                  <div className='control'>
                    <input
                      className='input primary font'
                      type='password'
                      placeholder='********'
                    />
                  </div>
                </div>
                <button className='button primary'>
                  <Link
                    to='/dashboard'
                    className='font'
                    // onClick={() => submit()}
                  >
                    Sign In
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
