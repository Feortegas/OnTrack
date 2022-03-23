const { Schema } = require('mongoose');

const contributorSchema = new Schema(
  {
    username: {
      type: String
    },
    capacity: {
      type: Number,
      default: 8
    },
    avatar_url: {
      type: String
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
)

module.exports = contributorSchema;