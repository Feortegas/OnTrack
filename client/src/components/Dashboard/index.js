import React from 'react';
import './dashboard.css';

function Dashboard() {
  const [progressValues] = [
    {
      days: '13',
      capacity: '15',
      hours: '185',
    },
  ];

  const actual =
    progressValues.hours - progressValues.capacity * progressValues.days;

  const projected = progressValues.hours / progressValues.days;

  function onTrack() {
    if (actual <= projected) {
      return 'OnTrack';
    } else {
      return 'Behind';
    }
  }

  return (
    <>
      <section>
        <div className='container'>
          <div className='section'>
            <h2 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
              Feortegas / OnTrack
            </h2>
          </div>

          <div className='section '>
            <div className=' calendar  has-text-centered has-text-weight-semibold'>
              <div className='secondary font top'>Days Remaining</div>
            </div>
            <div className='  has-text-centered has-text-weight-semibold'>
              <div className='calendar accent '>
                <br />
                <div className=' font'>{progressValues.days}</div>
                <br />
              </div>
            </div>
          </div>
          <div>
            <div className='has-text-centered has-text-weight-semibold is-size-4 project-title'>
              Your project is {onTrack()}
            </div>
            <br />
            <div className='has-text-centered has-text-weight-semibold is-size-6 font'>
              Projected Progress = Total Number of Issue Hours - (Total Team
              Capacity * Days Remaining <br />
              Actual Progress = Total Number of Issue Hours / Days Remaining)
              <br />
              <br />
              <strong>
                this section will not be in the final product
                <br />
                {projected} = {progressValues.hours} - (
                {progressValues.capacity} * {progressValues.days})
                <br />
                {actual} = {progressValues.hours} /{progressValues.days}
                <br />
                <br />
                if Actual &lt; Projected then OnTrack
                <br />
                if Actual &gt; Projected then Behind{' '}
              </strong>
            </div>
          </div>

          <div className=' section '>
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
    </>
  );
}

export default Dashboard;
