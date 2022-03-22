import React from 'react';
import './team.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { ADD_CONTRIBUTOR } from '../../utils/mutations';
import { getContributors } from '../../api/github';

function Team() {

  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const [ addContributor, { error } ] = useMutation(ADD_CONTRIBUTOR);
  const projects = data?.projects || [];

  if (!projects.length) {
    return <div className=' no-projects-container '><div className=' h3-container '><h3 className=' no-projects '>No projects yet</h3></div></div>;
  }

  const activeProjectIndex = data.projects.length - 1;

  const pullGithubData = async event => {
    const theContributors = await getContributors(projects[activeProjectIndex].username, projects[activeProjectIndex].projectTitle);
    // try {
    //   await addContributor({
    //     variables: { capacity, projectTitle },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  }

  // test array
  const users = [
    {
      user: 'Fernando',
      avatar: 'https://avatars.githubusercontent.com/u/17223625?v=4',
      capacity: '6',
    },
    {
      user: 'Jojo',
      avatar: 'https://avatars.githubusercontent.com/u/90885263?v=4',
      capacity: '6',
    },
    {
      user: 'Henry',
      avatar: 'https://avatars.githubusercontent.com/u/88246884?v=4',
      capacity: '6',
    },
    {
      user: 'Edison',
      avatar: 'https://avatars.githubusercontent.com/u/91574042?v=4',
      capacity: '6',
    },
  ];

  let totalCapacity = 0;

  users.forEach(capacitySum);

  function capacitySum(users) {
    totalCapacity += parseInt(users.capacity);
  }

  return (
    <>
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
                Total Team Capacity:
              </h2>
              <p className='is-size-4 has-text-centered font has-text-weight-semibold'>
                {totalCapacity}
              </p>
            </div>
          </div>
          <div className='section update-button'>
            <button type='button' className='button accent font' onClick={pullGithubData}>
              Update Team Capacity
            </button>
          </div>
          <div className='section'>
            <div className=' contributer-container '>
              <ul className=' columns '>
                {users.map((team) => (
                  <li className='column container '>
                    <div className='card primary'>
                      <h3 className='secondary has-text-centered font top is-size-5 has-text-weight-semibold'>
                        {team.user}
                      </h3>
                      <div className='card-image secondary'>
                        <figure className='image'>
                          <img
                            src={`${team.avatar}`}
                            alt={team.user}
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
                              <option value={`${team.capacity}`}>
                                {team.capacity}
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
    </>
  );
}

export default Team;
