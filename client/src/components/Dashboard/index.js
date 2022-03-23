import React from 'react';
import './dashboard.css';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function Dashboard() {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  if (!projects.length) {
    return (
      <div className=' no-projects-container '>
        <div className=' h3-container '>
          <h3 className=' no-projects '>No projects yet</h3>
        </div>
      </div>
    );
  }

  const activeProjectIndex = data.projects.length - 1;

  const activeProject = data.projects[activeProjectIndex];

  const teamCapacity = activeProject.contributorCount * 8;
  const remainingWork = activeProject.issueCount * 8;
  // console.log(teamCapacity, remainingWork);

  // calculates total project days remaining as well as total needed days to be on track
  let today = new Date();
  let completionDate = new Date(activeProject.completionDate);
  let diff = Math.abs(today - completionDate);
  const daysRemaining = Math.floor(diff / (24 * 60 * 60 * 1000));

  const totalTeamCapacity = teamCapacity * daysRemaining;

  function onTrack() {
    if (daysRemaining * teamCapacity <= remainingWork) {
      return 'Behind';
    } else {
      return 'OnTrack';
    }
  }

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section>
            <div className='container'>
              <div className='section'>
                <h2 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
                  {activeProject.username} /{' '}
                  {activeProject.projectTitle}
                </h2>
              </div>

              <div className='section '>
                <div className=' calendar  has-text-centered has-text-weight-semibold'>
                  <div className='secondary font top'>Days Remaining</div>
                </div>
                <div className='  has-text-centered has-text-weight-semibold'>
                  <div className='calendar accent '>
                    <br />
                    <div className='is-size-4 has-text-centered font has-text-weight-semibold'>
                      {daysRemaining}
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <div>
                <div className='has-text-centered has-text-weight-semibold is-size-4 project-title'>
                  <p>Your project is </p>{' '}
                  <p className={`${onTrack ? 'success' : 'has-text-danger'}`}>
                    {onTrack()}
                  </p>
                </div>
                <br />
                <div className='has-text-centered has-text-weight-semibold is-size-6 font'>
                  Projected Output = Total Number of Issue Hours - (Total Team
                  Capacity * Days Remaining) <br />
                  Remaining Work = Total Number of Issue Hours / Days Remaining
                  <br />
                  <br />
                </div>
              </div>

              <div className=' mb-6 section '>
                <div className=' table columns box is-justify-content-center secondary '>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Total # of Issues:
                    </p>
                    <p className='font'>
                      {activeProject.issueCount}
                    </p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Daily Capacity
                    </p>
                    <p className='font'>{teamCapacity} h</p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Total Team Capacity
                    </p>
                    <p className='font'>{totalTeamCapacity} h</p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Issue Hours Remaining:
                    </p>
                    <p className='font'>{remainingWork} hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Dashboard;
