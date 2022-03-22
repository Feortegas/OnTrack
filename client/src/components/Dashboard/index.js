import React from 'react';
import './dashboard.css';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function Dashboard() {
  const [progressValues] = [
    {
      days: '13',
      capacity: '15',
      hours: '185',
    },
  ];

  function daysRemaining() {}

  const projected =
    progressValues.hours - progressValues.capacity * progressValues.days;

  const remaining = progressValues.hours / progressValues.days;

  function onTrack() {
    if (remaining <= projected) {
      return 'Behind';
    } else {
      return 'OnTrack';
    }
  }

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
                  {projects[activeProjectIndex].username} /{' '}
                  {projects[activeProjectIndex].projectTitle}
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
                      {progressValues.days}
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <div>
                <div className='has-text-centered has-text-weight-semibold is-size-4 project-title'>
                  <p>Your project is </p>{' '}
                  <p className={`${onTrack ? 'success' : 'warning'}`}>
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
                      Unassigned Issues:
                    </p>
                    <p className='font'>5</p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Assigned Issues:
                    </p>
                    <p className='font'>21</p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Total # of Issues:
                    </p>
                    <p className='font'>26</p>
                  </div>
                  <div className='column accent'>
                    <p className='project-title has-text-weight-semibold'>
                      Issue Hours Remaining:
                    </p>
                    <p className='font'>{progressValues.hours} hours</p>
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
