const { Schema, model } = require('mongoose');
// const issueSchema = require('./Issue');

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
		// issues: [issueSchema],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

// projectSchema.virtual('issueCount').get(function () {
// 	return this.issues.length;
// });

const Project = model('Project', projectSchema);

module.exports = Project;
