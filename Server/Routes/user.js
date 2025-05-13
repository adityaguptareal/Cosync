const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clerkId: { type: String, unique: true },
  email: String,
  name: String
});

module.exports = mongoose.model("User", userSchema);
