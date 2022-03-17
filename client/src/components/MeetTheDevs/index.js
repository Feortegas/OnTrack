import React from 'react';
import './meetus.css';

function MeetTheDevs() {
  return (
    <>
      <section>
        {/* remove placeholder once real development on component begins */}

        <div className="section ">
          <div>
            <h2>The creators of OnTrack</h2>
          </div>
          <div>
            <ul>
              <li>
                <img
                  src={require('../../assets/images/henry.jpeg')}
                  alt="Henry"
                />
              </li>
              <li>
                <img
                  src={require('../../assets/images/edison.jpg')}
                  alt="Edison"
                />
              </li>
              <li>
                <p>Jojo</p>
              </li>
              <li>
                <p>Fernando</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetTheDevs;
