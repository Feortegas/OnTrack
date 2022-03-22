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
    projectID: String
    projectTitle: String
    projectURL: String
    username: String
    completionDate: String
    issueCount: Int
    issues: [Issue]
  }

  type Issue {
    issueID: String
    title: String
    description: String
    username: String
    duration: Int
  }

  type Query {
    me: User
    users: [User]
    projects: [Project]
    project(_id: ID!): Project
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
      projectId: Int!,
      issueID: Int!,
      title: String!,
      description: String!,
      duration: Int!
    ): Issue
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
