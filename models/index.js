const mongoose = require("mongoose");
const users = require("./users");
module.exports = {
  users: mongoose.model("users", users),
};
