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
            <ul className="img-container">
              <li>
              <img
                src={require('../../assets/images/henry.jpg')}
                alt="Henry"
                className="profile-img"
              />
              </li>
              <li>
              <img
                src={require('../../assets/images/edison.jpg')}
                alt="Edison"
                className="profile-img"
              />
              </li>
              <li>
                <img
                  src={require('../../assets/images/fernando.png')}
                  alt="Edison"
                  className="profile-img"
                />
              </li>
              <li>
                <img
                  src={require('../../assets/images/jojo.png')}
                  alt="Edison"
                  className="profile-img"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetTheDevs;
