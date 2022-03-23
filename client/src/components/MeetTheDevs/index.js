import React from 'react';
import './meetus.css';

function MeetTheDevs() {
  return (
    <>
      <section className='page-container'>
        {/* remove placeholder once real development on component begins */}

        <div className='section'>
          <div className='meet-us-title-containers'>
            <h2 className='meetus-title'>The creators of OnTrack</h2>
          </div>
          <div className='container-container'>
            <ul className='img-container pt-2 mb-5'>
              <li className='profile-pic-container card mt-3 mb-3 mr-3 ml-3 p-2'>
                <img
                  src={require('../../assets/images/henry.jpg')}
                  alt='Henry'
                  className='profile-img card-image mb-0 ml-0 mr-0'
                />
                <p className=' roles card-content mt-2 is-size-5 has-text-weight-semibold'>
                  Name: Henry Olson
                  <br />
                  Roles: Front-end Engineer, Styling
                  <br />
                  Portfolio:{' '}
                  <a
                    className=' project-title '
                    target=' _blank '
                    href=' https://thawing-falls-25223.herokuapp.com/ '
                  >
                    view
                  </a>
                </p>
              </li>
              <li className='profile-pic-container card mt-3 mb-3 mr-3 ml-3 p-2'>
                <img
                  src={require('../../assets/images/edison.jpg')}
                  alt='Edison'
                  className='profile-img card-image mb-0 ml-0 mr-0'
                />
                <p className='roles card-content mt-2 is-size-5 has-text-weight-semibold'>
                  Name: Edison Simondet
                  <br />
                  Roles: Front-end Engineer, Navigation/Authentication
                  <br />
                  Portfolio:{' '}
                  <a
                    className=' project-title '
                    target=' _blank '
                    href=' https://www.edisonsimondet.dev/ '
                  >
                    view
                  </a>
                </p>
              </li>
              <li className='profile-pic-container card mb-3 mr-3 ml-3 p-2'>
                <img
                  src={require('../../assets/images/fernando.png')}
                  alt='Edison'
                  className='profile-img card-image mb-0 ml-0 mr-0'
                />
                <p className=' roles card-content mt-2 is-size-5 has-text-weight-semibold'>
                  Name: Fernando Ortega
                  <br />
                  Roles: Back-end Engineer, DataBase, GraphQL, GitHub API
                  <br />
                  Portfolio:{' '}
                  <a
                    className=' project-title '
                    target=' _blank '
                    href=' https://fortegaportfolio.herokuapp.com/ '
                  >
                    view
                  </a>
                </p>
              </li>
              <li className='profile-pic-container card mb-3 mr-3 ml-3 p-2'>
                <img
                  src={require('../../assets/images/jojo.png')}
                  alt='Edison'
                  className='profile-img card-image mb-0 ml-0 mr-0'
                />
                <p className='roles card-content mt-2 is-size-5 has-text-weight-semibold'>
                  Name: Jojo Bautista
                  <br />
                  Roles: Back-end Engineer, Apollo Server, GraphQL
                  <br />
                  Portfolio:{' '}
                  <a
                    className=' project-link '
                    target=' _blank '
                    href=' https://full-stack-developer-react.herokuapp.com/ '
                  >
                    view
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetTheDevs;
