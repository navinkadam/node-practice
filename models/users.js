const mongoose = require("mongoose");
const { Schema } = mongoose;

let user = {
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  address: {
    addressLine1: String,
    addressLine2: String,
    pincode: String,
    type: {
      type: String,
      enum: ["home", "office"],
      default: "home",
      lowercase: true,
      trim: true,
    },
  },
  userName: {
    type: String,
    require: true,
    unique: true,
  },
};

module.exports = new Schema(user);
