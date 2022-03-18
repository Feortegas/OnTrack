import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <section>
        <div className='dashboard-container'>
          <div className='dashboard-title-container section'>
            <h2 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
              Feortegas / OnTrack
            </h2>
          </div>
          <div></div>
          {/* <div className='issues-info-container'>
            <ul className='issues-list-container'>
              <li className='issue-list-item'>
                <h3 className='list-item-text'>
                  There are num issues unassigned to you
                </h3>
              </li>
              <li className='issue-list-item'>
                <h3 className='list-item-text'>
                  You have num issues assigned to you
                </h3>
              </li>
              <li className='issue-list-item'>
                <h3 className='list-item-text'>You have num days remaining</h3>
              </li>
              <li className='issue-list-item'>
                <h3 className='list-item-text'>
                  This project has num issiues in total
                </h3>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
