import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login() {
	const [isSignOpen, setIsSignOpen] = useState(false);

	const toggleSign = () => {
		setIsSignOpen(!isSignOpen);
	};

	const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: '',
			password: '',
		});
	};

	return (
		<>
			<div className={`dropdown is-right ${isSignOpen ? 'is-active' : ''}`}>
				<div className='dropdown-trigger'>
					<button
						className='button navSign primary font'
						aria-haspopup='true'
						aria-controls='dropdown-menu6'
						onClick={() => toggleSign()}>
						<span>Sign In</span>
						<span className='icon is-small'>
							<i aria-hidden='true'>
								<FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
							</i>
						</span>
					</button>
				</div>
				<div className='dropdown-menu' id='dropdown-menu6' role='menu'>
					<div className='dropdown-content accent'>
						<div className='dropdown-item'>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='field'>
									<label className='label font'>Email</label>
									<div className='control'>
										<input
											className='input primary font'
											placeholder='Your email'
											name='email'
											type='email'
											id='login_email'
											value={formState.email}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className='field'>
									<label className='label font'>Password</label>
									<div className='control'>
										<input
											className='input primary font'
											placeholder='******'
											name='password'
											type='password'
											id='login_password'
											value={formState.password}
											onChange={handleChange}
										/>
									</div>
								</div>
								<button className='button primary' type='submit'>
									<Link
										to='/dashboard'
										className='signin-button-text font'
										// onClick={() => submit()}
									>
										Sign In
									</Link>
								</button>
							</form>
							{error && <div>Login failed</div>}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
