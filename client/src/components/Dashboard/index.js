import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <section>
        {/* remove placeholder once real development on component begins */}

        <div className="dashboard-container">
          <div className="dashboard-title-container section">
            <h2 className="dashboard-title">Project Title</h2>
          </div>
          <div className="issues-info-container">
            <ul className="issues-list-container">
              <li className="issue-list-item">
                <h3 className="list-item-text">
                  There are num issues unassigned to you
                </h3>
              </li>
              <li className="issue-list-item">
                <h3 className="list-item-text">
                  You have num issues assigned to you
                </h3>
              </li>
              <li className="issue-list-item">
                <h3 className="list-item-text">You have num days remaining</h3>
              </li>
              <li className="issue-list-item">
                <h3 className="list-item-text">
                  This project has num issiues in total
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
