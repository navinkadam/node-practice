const express = require("express");
const route = express.Router();
const userService = require("../../service/user");

function getAllProfile(req, res) {
  res.status(200).json({ msg: "Get all user Data function called." });
}

async function saveUserProile(req, res) {
  try {
    console.log(`req.body-->`, req.body);
    let params = req.body;
    let result = await new userService().insertUser(params);
    res.status(200).json({ msg: "Successfully created user.", result });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ error });
  }
}

route.get("/", getAllProfile);
route.post("/", saveUserProile);

module.exports = route;
