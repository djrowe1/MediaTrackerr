//define data for user that's going to be stored
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Lib = require("./libModel");

//define user database schema using mongoose
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    media: [{
        isbn: {
          type: Array,
          required: true,
          unique: true,
        },
        title: {
          type: String,
          required: true,
          unique: false,
        },
        authors: {
          type: Array,
          required: true,
        },
        language: {
          type: String,
          required: true,
          unique: false,
        },
        pages: {
          type: Number,
          required: false,
        },
        published: {
          type: String,
          required: false,
        },
        publisher: {
          type: String,
          required: false,
        },
        imageLinks: {
          type: Array,
          required: false,
        },
    }]
  },
  {
    timestamps: true,
  }
);

//create vari to hold user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
