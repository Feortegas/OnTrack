const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    profileImgURL: String
    projects: [Project]
  }

  type Project {
    _id: ID
    projectID: Int
    projectTitle: String
    projectURL: String
    username: String
    completionDate: String
    issueCount: Int
    contributorCount: Int
    issues: [Issue]
    contributors: [Contributor]
  }

  type Issue {
    _id: ID
    issueID: String
    title: String
    description: String
    username: String
    duration: Int
  }

  type Contributor {
    _id: ID
    username: String
    capacity: Int
    avatar_url: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectTitle: String): Project
    contributors(username: String): [Project]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, profileImgURL: String): Auth
    deleteUser(_id: ID!): User
    addProject(
      projectID: Int,
      projectTitle: String,
      projectURL: String,
      username: String,
      completionDate: String
    ): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: String!): Project
    addIssue(
      projectId: ID,
      projectTitle: String,
      issueID: Int,
      title: String,
      description: String,
      username: String,
      duration: Int
    ): Project
    addContributor(
      projectId: ID,
      projectTitle: String,
      username: String,
      capacity: Int,
      avatar_url: String
    ): Project
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
