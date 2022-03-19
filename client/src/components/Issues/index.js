import React from 'react';

function Issues() {
  // test array
  const issues = [
    {
      issue: 'style CSS',
      duration: '6',
    },
    {
      issue: 'build front end',
      duration: '4',
    },
    {
      issue: 'build database',
      duration: '7',
    },
    {
      issue: 'Edison',
      duration: '2',
    },
  ];

  let remainingHours = 0;

  issues.forEach(capacitySum);

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
              <ul className='columns'>
                {issues.map((issue) => (
                  <li className='column container '>
                    <div className='card primary'>
                      <h3 className='secondary has-text-centered font top is-size-5'>
                        {issue.issue}
                      </h3>

                      {/* set individual issue duration */}

                      <div className='field has-addons'>
                        <div className='control is-expanded'>
                          <input
                            className='input'
                            type='number'
                            placeholder={`${issue.duration}`}
                          ></input>
                        </div>
                        <div className='control'>
                          <button type='submit' className='button accent font'>
                            Set Duration
                          </button>
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

export default Issues;
