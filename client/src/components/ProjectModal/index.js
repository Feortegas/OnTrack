import React, { useEffect, useState } from 'react';
import './projectmodal.css';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT, ADD_CONTRIBUTOR, ADD_ISSUE } from '../../utils/mutations';
import { QUERY_PROJECTS } from '../../utils/queries';
import {
  getRepo,
  getRepos,
  getIssues,
  getContributors,
} from '../../api/github';
// getRepos returns an Array of Repos.name from the API
// use it to build the dropdown list dynamically

const ProjectModal = ({ onClose }) => {
  const [userName, setUsername] = useState('');
  const [delayedUserName, setDelayedUsername] = useState('');
  const [repoName, setRepoName] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [theRepos, setTheRepos] = useState([]);
  // save project to Database

  // const [addProject] = useMutation(ADD_PROJECT);
  const [addContributor] = useMutation(ADD_CONTRIBUTOR);
  const [addIssue] = useMutation(ADD_ISSUE);

  const [addProject] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        // update project array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });
        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { projects: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // update state based on form input changes
  //wait for user to stop typing before API call
  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     setDelayedUsername(userName);
  //   }, 3000);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [userName]);

  const handleChangeUser = async () => {
    // setUsername(delayedUserName);

    // theRepos is an array of repos, return of a promise from the API fetch
    const repos = await getRepos(userName);
    console.log(repos);
    setTheRepos(repos);
  };

  // update state based on form input changes
  const handleChangeRepo = (event) => {
    setRepoName(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const targetDate = '03/23/2022';
    const theProject = await getRepo(userName, repoName);
    // const theProject = {
    // 	projectID: '469475772',
    // 	projectTitle: 'OnTrack',
    // 	projectUrl: 'https://github.com/Feortegas/OnTrack',
    // 	username: 'Feortegas',
    // 	completionDate: '03/23/2022',
    // };

    const projectID = theProject.id;
    const projectTitle = theProject.name;
    const projectURL = theProject.html_url;
    const username = theProject.owner.login;
    const completionDate = targetDate;

    try {
      console.log(
        projectID,
        projectTitle,
        projectURL,
        username,
        completionDate
      );
      await addProject({
        variables: {
          projectID,
          projectTitle,
          projectURL,
          username,
          completionDate,
        },
      });
      const theContributors = await getContributors(userName, repoName);

      for (let index = 0; index < theContributors.length; index++) {
        await addContributor({
          variables: {
            username: theContributors[index].login,
            avatar_url: theContributors[index].avatar_url,
            projectTitle: projectTitle,
          },
        });
      }

      const theIssues = await getIssues(userName, repoName);

      for (let index = 0; index < theIssues.length; index++) {
        await addIssue({
          variables: { title: theIssues[index], projectTitle: projectTitle },
        });
      }

      // clear form value
      setUsername('');
      setRepoName('');
      setTargetDate('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div id='projectModal' className='modal is-active'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head secondary'>
            <p className='modal-card-title font'> Choose a current project </p>
            <button
              onClick={onClose}
              className='delete'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body accent'>
            <div onSubmit={handleFormSubmit}>
              <div className='section font'>
                <label className='label font'>Github Username</label>

                <input
                  autoFocus
                  className='input font primary'
                  type='text'
                  placeholder=''
                  value={userName}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <div>&nbsp;</div>
                <button className='button is-info' onClick={handleChangeUser}>
                  Find Repositories
                </button>
                <p className='label font'>
                  {/* Showing repositories for...{' '} */}
                  <strong className='project-title'>{delayedUserName}</strong>
                </p>
                {/* generate list dynamically */}
                <div>
                  {theRepos.length ? (
                    <select value={repoName} onChange={handleChangeRepo}>
                      <option>choose your repo</option>
                      {theRepos.map((repo) => (
                        <option value={repo} key={repo}>
                          {repo}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>&nbsp;</p>
                  )}
                </div>
                <h3>
                  *Note: OnTrack only works with public GitHub repositories
                </h3>
              </div>
              <div className='section font'>
                <label className='label font'>Target Date</label>
                <input
                  type='date'
                  value={targetDate}
                  onChange={(event) => setTargetDate(event.target.value)}
                />
              </div>
              <div className='section font'>
                <button
                  onClick={handleFormSubmit}
                  type='button'
                  className='button is-danger center font'
                >
                  Confirm Current Project
                </button>
                <h3>Warning: This will replace your current project</h3>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot secondary'>
            <button
              onClick={onClose}
              type='button'
              className='button primary font'
            >
              Back
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
