# OnTrack

## Overview
OnTrack is a Team Management web app, focused on Software Development teams that collaborate using GitHub Project and Issues to track their project development.

## Goals

1 - Visualize the Projects assigned to your development team, with their timelines.

2 - Manage Team's capacity based on Project duration and GitHub issues (scope of development).

## Specifications

### MVP
- Display a report of GitHub hosted project(s), based on Project Duration(h), Project Target Completion Date, Team Capacity(h) and Open Issues.
- Create/Edit Teams, Team Members, Team Capacity

### Frontend
- React App
- CSS, SASS and Bulma
  
### Backend
- GraphQL
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- CRUD operations
- JWT authentication
- GitHub API

## Milestones

### Project Specification
- Project Specification due by 03/14/2022

### MVP
- Needs to be working with no bugs by 03/18/2022

### Application Deployed to Heroku
- Application needs to be deployed to Heroku by 03/21/2022
- Final application needs to be deployed to Heroku by 03/22/2022

### Project Presentation
- Project presentation on 03/23/2022

## User Stories
As a User
I want to be able to Create/Edit/Delete a Team,
I want to be able to Add / Remove Users from the Team,
When I’m logged in as a User

As a Team Member
I want to be able to Assign a Project to my Team
I want to be able to determine the Project Target Completion Date
I want to be able to determine the Team Member’s daily capacity (hours)
I want to be able to determine…

As a Team Member
I want to be able to Assign a Issue to another Team Member or myself
I want to be able to determine a Issue duration

As a Team Member
I want to be able to…

## Data Models
### Team
- Team Name
- Team Description
- Users from User
- Projects from Project

### User
- Username
- Email
- Password
- Created at

### Project
- Project Name
- Project Description
- Project URL from GitHub API
- Project Completion Date
- Issues from Issue

### Issue
- Issue Title
- Issue Description
- Issue Assigned to
- Issue Duration

## Coding Standards
- Single quote
- Tab Size 4

## Future Development
- AWS - store user images for example
- Calendar for Team meetings / events / deadlines
- Integration to Microsoft DevOps and Jira

## Team Members
- [Fernando Ortega](https://fortegaportfolio.herokuapp.com/) - Product Owner / Backend Dev / PR tester/approver
- [Jojo Bautista](https://full-stack-developer-react.herokuapp.com/) - Backend Dev
- [Edison Simondet](http://edisonsimondet.dev/) - Scrum Master / Frontend Dev (React)
- [Henry Olson](https://thawing-falls-25223.herokuapp.com/) - Frontend Dev (CSS, SASS, Bulma)
