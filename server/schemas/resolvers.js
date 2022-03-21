const { User, Project } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select('-__v -password')
					.populate('projects');

				return userData;
			}
			throw new AuthenticationError('Not logged in');
		},
		users: async () => {
			return User.find().select('-__v -password').populate('projects');
		},
		projects: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Project.find(params).sort({ createdAt: -1 });
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);
			return { token, user };
		},
		addProject: async (parent, args, context) => {
			// if (context.user) {
			// 	const project = await Project.create({
			// 		...args,
			// 		username: context.user.username,
			// 	});

			await Project.findOneAndUpdate(
				{ _id: context.user._id },
				{ $addToSet: { projects: project._id } },
				{ new: true }
			);

			return project;
			// }

			// throw new AuthenticationError('You need to be logged in!');
		},
		// delete a single project by ID
		deleteProject: async (parent, { _id }) => {
			const project = await Project.deleteOne({ _id: _id }, { new: true });
			return { project };
		},
		// delete a single user by ID
		deleteUser: async (parent, { _id }) => {
			const user = await User.deleteOne({ _id: _id }, { new: true });
			return { user };
		},

		addIssue: async (parent, { projectId, issueID, title }, context) => {
			if (context.user) {
				const updatedProject = await Project.findOneAndUpdate(
					{ _id: projectId },
					{
						$push: {
							issues: { issueID, title, username: context.user.username },
						},
					},
					{ new: true, runValidators: true }
				);

				return updatedProject;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
	},
};

module.exports = resolvers;
