const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./controller");
require("./db")();

const portNumber = 3000;

// URL -> localhost:3000/api/v1/*

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", routes);

app.get("*", function (req, res) {
  console.log("req->", req.url);
  res.status(404).json({ msg: "Invalid Routes." });
});

app.listen(portNumber, () => {
  console.log("somethings append on ", portNumber);
});

// pages                           method
//   |                                |
//   |                                |
// userProfile                      post    ('/user-profile')
// userProfile                      get     ('/user-profile')
// userProfile                      put     ('/user-profile/:id')
// userProfile                      delete  ('/user-profile/:id')
// user profile by id               get     ('/user-profile/:id')
