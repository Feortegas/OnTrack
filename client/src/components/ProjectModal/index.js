import React, { useState } from 'react';
import './projectmodal.css';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../../utils/mutations';
// import { QUERY_PROJECTS, QUERY_ME } from '../../utils/queries';
// import { getRepo, getRepos } from '../../api/github';
// getRepos returns an Array of Repos.name from the API
// use it to build the dropdown list dynamically

const ProjectModal = ({ onClose }) => {
	const [username, setUsername] = useState('');
	const [repoName, setRepoName] = useState('');
	// const [targetDate, setTargetDate] = useState('');
	// save project to Database

	const [addProject] = useMutation(ADD_PROJECT);

	// const [addProject, { error }] = useMutation(ADD_PROJECT, {
	// 	update(cache, { data: { addProject } }) {
	// 		try {
	// 			// update project array's cache
	// 			// could potentially not exist yet, so wrap in a try/catch
	// 			const { projects } = cache.readQuery({ query: QUERY_PROJECTS });
	// 			cache.writeQuery({
	// 				query: QUERY_PROJECTS,
	// 				data: { projects: [addProject, ...projects] },
	// 			});
	// 		} catch (e) {
	// 			console.error(e);
	// 		}

	// 		// update me object's cache
	// 		// const { me } = cache.readQuery({ query: QUERY_ME });
	// 		// cache.writeQuery({
	// 		// 	query: QUERY_ME,
	// 		// 	data: { me: { ...me, projects: [...me.projects, addProject] } },
	// 		// });
	// 	},
	// });

	// update state based on form input changes
	const handleChangeUser = (event) => {
		setUsername(event.target.value);
		// const theRepos = getRepos(event.target.value);
		// console.log(theRepos);
	};

	// update state based on form input changes
	const handleChangeRepo = (event) => {
		setRepoName(event.target.value);
	};

	// const handleChangeDate = (event) => {
	// 	setTargetDate(event.targe.value);
	// };

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// const targetDate = '03/23/2022';
		// console.log(username, repoName, targetDate);
		// const theProject = await getRepo(username, repoName, targetDate);
		const theProject = {
			projectID: '469475772',
			projectTitle: 'OnTrack',
			projectUrl: 'https://github.com/Feortegas/OnTrack',
			username: 'Feortegas',
			completionDate: '03/23/2022',
		};

		const projectID = theProject.projectID;
		const projectTitle = theProject.projectTitle;
		const projectURL = theProject.projectUrl;
		const username = theProject.username;
		const completionDate = theProject.completionDate;

		try {
			await addProject({
				variables: {
					projectID,
					projectTitle,
					projectURL,
					username,
					completionDate,
				},
			});

			// clear form value
			setUsername('');
			setRepoName('');
			// setTargetDate('');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<div id='projectModal' className='modal is-active '>
				<div className='modal-background '></div>
				<div className='modal-card '>
					<header className='modal-card-head secondary'>
						<p className='modal-card-title font'> Choose a current project </p>
						<button
							onClick={onClose}
							className='delete'
							aria-label='close'></button>
					</header>
					<section className='modal-card-body accent'>
						<div>
							<div className='section font'>
								<label className='label font'>Github Username</label>
								<input
									className='input font primary'
									type='text'
									placeholder=''
									value={username}
									onChange={handleChangeUser}
								/>
								<label className='label font'>Github Repo</label>
								{/* temporary hardcode repos - generate list dynamically */}
								<select value={repoName} onChange={handleChangeRepo}>
									<option value='OnTrack'>OnTrack</option>
									<option value='reddit-clone'>reddit-clone</option>
								</select>
								<h3>
									*Note: OnTrack only works with public GitHub repositories
								</h3>
							</div>
							<div className='section font'>
								<label className='label font'>Target Date</label>
								<input
									type='date'
									// value={targetDate}
									// onChange={handleChangeDate}
								/>
							</div>
							<div className='section font'>
								<button
									onClick={handleFormSubmit}
									type='button'
									className='button is-danger center font'>
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
							className='button primary font'>
							Back
						</button>
					</footer>
				</div>
			</div>
		</>
	);
};

export default ProjectModal;
