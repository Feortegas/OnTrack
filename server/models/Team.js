const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const projectSchema = require('./Project');
const dateFormat = require('../utils/dateFormat');

const teamSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		description: {
			type: String,
			required: false,
			maxlength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		users: [userSchema],
		projects: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Project',
			},
		],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

teamSchema.virtual('userCount').get(function () {
	return this.users.length;
});

teamSchema.virtual('projectCount').get(function () {
	return this.projects.length;
});

const Team = model('Team', teamSchema);

module.exports = Team;
