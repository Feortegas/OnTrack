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
		$projectID: Int!
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

export const ADD_CONTRIBUTOR = gql`
mutation addContributor($projectTitle: String, $username: String) {
	addContributor(projectTitle: $projectTitle, username: $username) {
		_id
		contributorCount
		contributors {
			_id
			username
			capacity
		}
	}
}
`;

export const ADD_ISSUE = gql`
mutation addIssue($projectTitle: String, $title: String ) {
	addIssue(projectTitle: $projectTitle, title: $title) {
		_id
		issueCount
		issues {
			_id
			issueID
			title
			description
			username
			duration
		}
	}
}
`;

export const DELETE_PROJECT = gql`
	mutation deleteProject($id: ID!) {
		deleteProject(_id: $id) {
			_id
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($id: ID!) {
		deleteUser(_id: $id) {
			_id
		}
	}
`;
