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
	mutation addUser(
		$username: String!
		$password: String!
		$email: String!
		$profileImgURL: String
	) {
		addUser(
			username: $username
			password: $password
			email: $email
			profileImgURL: $profileImgURL
		) {
			token
			user {
				_id
				username
				email
				profileImgURL
			}
		}
	}
`;

export const ADD_PROJECT = gql`
	mutation addProject(
		$projectID: String!
		$projectTitle: String!
		$projectURL: String!
		$username: String!
		$completionDate: String!
	) {
		addProject(
			projectID: $projectID
			projectTitle: $projectTitle
			projectURL: $projectURL
			username: $username
			completionDate: $completionDate
		) {
			_id
			projectID
			projectTitle
			projectURL
			username
			completionDate
		}
	}
`;

export const DELETE_PROJECT = gql`
	mutation deleteProject($id: String!) {
		deleteProject(_id: $id) {
			_id
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($id: String!) {
		deleteUser(_id: $id) {
			_id
		}
	}
`;
