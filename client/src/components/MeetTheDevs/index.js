import React from 'react';
import './meetus.css';

function MeetTheDevs() {
  return (
    <>
      <section>
        {/* remove placeholder once real development on component begins */}

        <div className='section'>
          <div className="meet-us-title-containers">
            <h2 className="meetus-title">The creators of OnTrack</h2>
          </div>
          <div>
            <ul className="img-container pt-2 mb-5">
              <li className='profile-pic-container card mb-2 mr-2'>
              <img
                src={require('../../assets/images/henry.jpg')}
                alt="Henry"
                className="profile-img card-image"
              />
              <p className=" roles card-content mt-2">
                Name: Henry Olson<br/>
                Roles: front-end engineer, styling, and design
              </p>
              </li>
              <li className='profile-pic-container card mb-2'>
              <img
                src={require('../../assets/images/edison.jpg')}
                alt="Edison"
                className="profile-img card-image mb-0"
              />
              <p className="roles card-content mt-2">
                Name: Edison Simondet<br/>
                Roles: front-end engineer, and whatever you think fits
              </p>
              </li>
              <li className='profile-pic-container card mb-2 mr-2'>
                <img
                  src={require('../../assets/images/fernando.png')}
                  alt="Edison"
                  className="profile-img card-image"
                />
                <p className=" roles card-content mt-2">
                  Name: Fernando Ortega<br/>
                  Roles: back-end engineer, and whatever you think fits
                </p>
              </li>
              <li className='profile-pic-container card mb-2'>
                <img
                  src={require('../../assets/images/jojo.png')}
                  alt="Edison"
                  className="profile-img card-image"
                />
                <p className="roles card-content mt-2">
                  Name: Jojo Bautista<br/>
                  Roles: back-end engineer, and whatever you think fits
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
