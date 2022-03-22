const { Schema, model } = require('mongoose');
const issueSchema = require('./Issue');
const contributorSchema = require('./Contributor');

const projectSchema = new Schema(
	{
		projectID: {
			type: Number,
		},
		projectTitle: {
			type: String,
		},
		projectURL: {
			type: String,
		},
		username: {
			type: String,
		},
		completionDate: {
			type: String,
			default: '03/23/2022',
		},
		issues: [issueSchema],
		contributors: [contributorSchema],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

projectSchema.virtual('issueCount').get(function () {
	return this.issues.length;
});

projectSchema.virtual('contributorCount').get(function () {
	return this.contributors.length;
});

const Project = model('Project', projectSchema);

module.exports = Project;
