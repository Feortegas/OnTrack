const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
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
    users: [User]
    projects: [Project]
    project(_id: ID!): Project
  }

  type Query {
    me: User
    users: [User]
    projects(username: String): [Project]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(
      projectID: String!,
      projectTitle: String!,
      projectURL: String!,
      username: String!,
      completionDate: String
    ): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: String!): Project
    addIssue(
      projectId: ID!,
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
