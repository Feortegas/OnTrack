import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function Issues() {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  const activeProjectIndex = data.projects.length - 1;

  const activeProject = data.projects[activeProjectIndex];

  let remainingHours = 0;

  activeProject.issues.forEach(capacitySum);

  function capacitySum(issues) {
    remainingHours += parseInt(issues.duration);
  }

  return (
    <>
      <section>
        <div className='container'>
          <div className='section'>
            <h2 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
              Issues
            </h2>
          </div>

          <div className='section'>
            <div className='box accent'>
              <h2 className='is-size-4 has-text-centered font has-text-weight-semibold'>
                Total Issue Hours Remaining:
              </h2>
              <p className='is-size-4 has-text-centered font has-text-weight-semibold'>
                {remainingHours}
              </p>
            </div>
          </div>

          <div className='section'>
            <div>
              <div className='columns is-flex-wrap-wrap '>
                {activeProject.issues.map((issue) => (
                  <div className='column card primary'>
                    <header className='card-header'>
                      <h3 className='secondary card-header-title has-text-centered font top is-size-6 '>
                        {issue.title}
                      </h3>
                    </header>
                    {/* set individual issue duration */}
                    <div className='card-content accent'>
                      <div className='field has-addons'>
                        <div className='control is-expanded'>
                          <input
                            className='input'
                            type='number'
                            placeholder={`${issue.duration}`}
                          ></input>
                        </div>
                        <div className='control '>
                          <button type='submit' className='button accent font '>
                            Set Duration
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Issues;
