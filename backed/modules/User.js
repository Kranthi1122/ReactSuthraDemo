const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstname: { type: String, required: false },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", User);
