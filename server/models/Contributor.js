const { Schema } = require('mongoose');

const contributorSchema = new Schema(
  {
    username: {
      type: String
    },
    capacity: {
      type: Number,
      default: 8
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

module.exports = contributorSchema;