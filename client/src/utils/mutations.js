import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_PROJECT = gql`
	mutation addProject(
		$projectID: String!
		$projectTitle: String!
		$projectUrl: String!
	) {
		addProject(
			projectID: $projectID
			projectTitle: $projectTitle
			projectURL: $projectUrl
		) {
			_id
			projectID
			projectTitle
			projectURL
			completionDate
		}
	}
`;
