const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "email exists"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);