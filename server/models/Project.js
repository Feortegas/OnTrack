const { Schema, model } = require('mongoose');
const issueSchema = require('./Issue');

const projectSchema = new Schema(
	{
		projectID: {
			type: String,
			required: true,
		},
		projectTitle: {
			type: String,
			required: true,
		},
		projectURL: {
			type: String,
			required: true,
		},
		completionDate: {
			type: Date,
			required: false,
			default: '03/23/2022',
		},
		issues: [issueSchema],
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

const Project = model('Project', projectSchema);

module.exports = Project;
