const db = require('../config/connection');
const { User, Project } = require('../models');

db.once('open', async () => {
  await Project.deleteMany({});
  await User.deleteMany({});

  const projectData = [
    {
      projectID: '422751455',
      projectTitle: 'OnTract',
      projectURL: 'https://github.com/Feortegas/OnTrack',
      // Default completion date is 14 from today
      completionDate: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
      issues: [
        {
          issueID: '1',
          title: 'Wireframing',
          description: 'Wireframe detailing application flow w/ React-specs.',
          username: 'esimondet',
          duration: 6,
        },
        {
          issueID: '2',
          title: 'Database Model',
          description: 'MongoDB Database model definition',
          username: 'feortegas',
          duration: 6,
        },
        {
          issueID: '3',
          title: 'User Login',
          description: 'Backend and frontend JWT authentication',
          username: 'jojbautistaum',
          duration: 6,
        },
        {
          issueID: '4',
          title: 'Styling',
          description: 'Adding styling for react components',
          username: 'hro0806',
          duration: 6,
        },
      ],
    },
    {
      projectID: '422751477',
      projectTitle: 'shop-shop',
      projectURL: 'https://github.com/Feortegas/shop-shop',
      // Default completion date is 28 from today
      completionDate: new Date().getTime() + 28 * 24 * 60 * 60 * 1000,
      issues: [
        {
          issueID: '1',
          title: 'Wireframing Home Page',
          description: 'Wireframe detailing application flow w/ React-specs.',
          username: 'esimondet',
          duration: 6,
        },
        {
          issueID: '2',
          title: 'Defining DB Model',
          description: 'MongoDB Database model definition',
          username: 'feortegas',
          duration: 6,
        },
        {
          issueID: '3',
          title: 'Database GraphQL Schema',
          description: 'Backend Schema database seedings',
          username: 'jojbautistaum',
          duration: 6,
        },
        {
          issueID: '4',
          title: 'Styling using Bulma',
          description: 'Adding styling for react components',
          username: 'hro0806',
          duration: 6,
        },
      ],
    },
  ];

  // Create User
  const userData = [
    {
      username: 'jojobautistaum',
      email: 'gjojob@yahoo.com',
      password: 'password123',
    },
    {
      username: 'feortegas',
      email: 'feortegas@gmail.com',
      password: 'password123',
    },
    {
      username: 'esimondet',
      email: 'edison.simondet@gmail.com',
      password: 'password123',
    },
    {
      username: 'hro0806',
      email: 'henryolson@icloud.com',
      password: 'password123',
    },
  ];

  const createdProjects = await Project.collection.insertMany(projectData);
  const createdUsers = await User.collection.insertMany(userData);

  for (let i = 0; i < projectData.length; i++) {
    let { _id: projectObjId } = createdProjects.ops[i];
    for (let j = 0; j < userData.length; j++) {
      let { _id: userId } = createdUsers.ops[j];
      await User.updateOne(
        { _id: userId },
        { $addToSet: { project: projectObjId } }
      );
    }
  }

  console.log('all done!');
  process.exit(0);
});
