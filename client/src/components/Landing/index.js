import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
  return (
    <>
      <section class='hero'>
        <div className='hero-body'>
          <p className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
            Get OnTrack with Github Issue Tracking
          </p>
          <br />
          <div className='box secondary'>
            <div className='columns is-mobile'>
              <progress
                class='progress is-large is-info column is-one-third'
                max='100'
              />
              <div className='column ' />
            </div>
            <div className='columns is-mobile'>
              <div className='column' />
              <progress
                class='progress is-large is-info column is-three-fifths'
                max='100'
              />
              <div className='column' />
            </div>
            <div className='columns is-mobile'>
              <div className='column' />
              <progress
                class='progress is-large is-info column is-one-third'
                max='100'
              />
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='box columns accent font'>
            <div className='column'>
              <p className='has-text-centered has-text-weight-semibold'>
                With OnTrack you can add time tracking to your Github issues.{' '}
                <br />
                <br /> Our application uses the Github API to gather all of your
                issues in one place! Then once you assign estimated durations
                our algorithm tracks your project's progress until deadline!
                <br />
                <br />
                Sign up today and let's get you OnTrack!
              </p>
            </div>
            <div className='column '>
              <form class='' />
              <div className='field'>
                <label className='label font'>Github Username</label>
                <div className='control'>
                  <input
                    className='input primary font'
                    type='email'
                    placeholder=''
                  />
                </div>
              </div>
              <form class='' />
              <div className='field'>
                <label className='label font '>Email</label>
                <div className='control'>
                  <input
                    className='input primary font'
                    type='email'
                    placeholder=''
                  />
                </div>
              </div>
              <form class='' />
              <div className='field'>
                <label className='label font'>Password</label>
                <div className='control'>
                  <input
                    className='input primary font'
                    type='password'
                    placeholder=''
                  />
                </div>
              </div>
              <button className='button primary'>
                <Link
                  to='/project'
                  className='font'
                  // onClick={() => submit()}
                >
                  Sign me up!
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='section' />
      </section>
    </>
  );
}

export default Landing;
