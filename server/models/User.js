const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
<<<<<<< HEAD
      match: [/.+@.+\..+/, "Must match an email address!"],
=======
      match: [/.+@.+\..+/, 'Must match an email address!'],
>>>>>>> 758988be3ed59d2647c81545d646163a80ef695f
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: "Project",
=======
        ref: 'Project',
>>>>>>> 758988be3ed59d2647c81545d646163a80ef695f
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
<<<<<<< HEAD
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
=======
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
>>>>>>> 758988be3ed59d2647c81545d646163a80ef695f
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
