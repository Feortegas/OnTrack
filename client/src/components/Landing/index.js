import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './landing.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
// import { getUser } from '../../api/github';

function Landing() {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [addUser, { error }] = useMutation(ADD_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const auth = Auth.loggedIn();

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
    // userData is a return of a promisse, that's why I'm using await
		// const userData =  await getUser(formState.username);
    // const profileImgURL = userData.profileImgURL;
		
		try {
			const { data } = await addUser({
				variables: { ...formState },
			});
			console.log(data.addUser.token);
			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return auth ? (
		<Navigate to='/dashboard' />
	) : (
		<>
			<section className='hero'>
				<div className='hero-body'>
					<p className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
						Get OnTrack with Github Issue Tracking
					</p>
					<br />
					<div className='box secondary'>
						<div className='columns is-mobile'>
							<progress
								className='progress is-large is-info column is-one-third'
								max='100'
							/>
							<div className='column ' />
						</div>
						<div className='columns is-mobile'>
							<div className='column' />
							<progress
								className='progress is-large is-info column is-three-fifths'
								max='100'
							/>
							<div className='column' />
						</div>
						<div className='columns is-mobile'>
							<div className='column' />
							<progress
								className='progress is-large is-info column is-one-third'
								max='100'
							/>
						</div>
					</div>
				</div>
				<div className='section'>
					<div className='box columns accent font'>
						<div className='column'>
							<p className='has-text-centered has-text-weight-semibold'>
								With OnTrack you can add time tracking to your Github issues.{' '}
								<br />
								<br /> Our application uses the Github API to gather all of your
								issues in one place! Then once you assign estimated durations
								our algorithm tracks your project's progress until deadline!
								<br />
								<br />
								Sign up today and let's get you OnTrack!
							</p>
						</div>
						<div className='column '>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='field'>
									<label className='label font'>Github Username</label>
									<div className='control'>
										<input
											className='input primary font'
											placeholder='Your username'
											name='username'
											type='username'
											id='username'
											value={formState.username}
											onChange={handleChange}
										/>
									</div>
								</div>
								{/* <form className='' /> */}
								<div className='field'>
									<label className='label font '>Email</label>
									<div className='control'>
										<input
											className='input primary font'
											placeholder='Your email'
											name='email'
											type='email'
											id='email'
											value={formState.email}
											onChange={handleChange}
										/>
									</div>
								</div>
								{/* <form className='' /> */}
								<div className='field'>
									<label className='label font'>Password</label>
									<div className='control'>
										<input
											className='input primary font'
											placeholder='******'
											name='password'
											type='password'
											id='password'
											value={formState.password}
											onChange={handleChange}
										/>
									</div>
								</div>
								<button className='button primary font' type='submit'>
									Sign me up!
								</button>
							</form>
							{error && <div>Signup failed</div>}
						</div>
					</div>
				</div>
				<div className='section' />
			</section>
		</>
	);
}

export default Landing;
