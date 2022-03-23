const { Schema } = require("mongoose");

const issueSchema = new Schema(
  {
    issueID: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    username: {
      type: String,
    },
    duration: {
      type: Number,
      default: 8,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = issueSchema;
