let mongoose = require("mongoose");

function contectingDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/pract", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  mongoose.connection.on("connected", function () {
    console.log("Mongo DB connected...");
  });
  mongoose.connection.on("error", function () {
    console.log("Mongo DB error...");
  });
  mongoose.connection.on("disconnected", function () {
    console.log("Mongo DB disconnected...");
  });
}

module.exports = contectingDB;
