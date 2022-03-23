import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
      _id
      projectID
      projectTitle
      projectURL
      username
      completionDate
      issues {
        _id
        issueID
        title
        description
        username
        duration
      }
      contributors {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      projects {
        _id
        projectTitle
        projectURL
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      projectID
      projects {
        _id
        projectID
        projectTitle
        projectURL
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      projects {
        _id
        projectTitle
        username
      }
    }
  }
`;
