const { Schema } = require("mongoose");

const issueSchema = new Schema(
  {
    issueID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
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
