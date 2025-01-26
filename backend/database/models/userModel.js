//Require Statement
const mongoose = require("mongoose");

//User Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    contact: { type: String, require: true, trim: true },
    role: { type: String, require: true, trim: true },
  },
  { timestamps: true }
);

//User Model
const userModel = mongoose.model("users", userSchema);

//Export Statement
module.exports = userModel;
