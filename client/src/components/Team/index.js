import React from 'react';
import './team.css';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function Team() {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  const activeProjectIndex = data.projects.length - 1;

  const activeProject = data.projects[activeProjectIndex];

  const teamCapacity = activeProject.contributorCount * 8;

  if (!projects.length) {
    return (
      <div className=' no-projects-container '>
        <div className=' h3-container '>
          <h3 className=' no-projects '>No projects yet</h3>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section>
          <div className='container'>
            <div className='section'>
              <h2 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
                My Team
              </h2>
            </div>

            <div className='section'>
              <div className='box accent'>
                <h2 className='is-size-4 has-text-centered font has-text-weight-semibold'>
                  Total Team Daily Capacity:
                </h2>
                <p className='is-size-4 has-text-centered font has-text-weight-semibold'>
                  {teamCapacity} h
                </p>
              </div>
            </div>
            <div className='section update-button'>
              <button type='submit' className='button accent font'>
                Update Team Capacity
              </button>
            </div>
            <div className='section'>
              <div className=' contributer-container '>
                <ul className=' columns '>
                  {activeProject.contributors.map((contributor) => (
                    <li key={contributor.username} className='column container '>
                      <div className='card primary'>
                        <h3 className='secondary has-text-centered font top is-size-5 has-text-weight-semibold'>
                          {contributor.username}
                        </h3>
                        <div className='card-image secondary'>
                          <figure className='image'>
                            <img
                              src={`${contributor.avatar_url}`}
                              alt={contributor.username}
                              className='is-rounded'
                            />
                          </figure>
                        </div>

                        {/* set individual capacity */}

                        <div className='field has-addons'>
                          <div className='control is-expanded'>
                            <p className='is-size-5  has-text-centered font accent '>
                              Hours per day &nbsp;
                            </p>
                            <div className='select is-fullwidth'>
                              <select name='capacity'>
                                <option value={`${contributor.capacity}`}>
                                  {contributor.capacity}
                                </option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Team;
