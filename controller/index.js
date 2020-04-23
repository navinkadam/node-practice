const express = require("express");
const route = express.Router();
const userProfile = require("./user");

route.use("/user-profile", userProfile);
// route.use("/order", order);
// route.use("/order", order);

module.exports = route;
