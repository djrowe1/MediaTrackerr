const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//const Lib = require("libModel.js");

//create user for database
//wrap registerUser with asyncHandler to manage communication
const registerUser = asyncHandler(async (req, res) => {
  //use req variable to ask user for data
  //use res variable to provide user with data
  //const { first_name, last_name, username, email, password } = req.body;
  const first_name = "Dave",
    last_name = "Rowe",
    username = "djrowe",
    email = "djrowe1@yahoo.com",
    password = "abc123";
  //check if user already exists
  const userExists = await User.findOne({ email });
  //generate error if so
  if (userExists) {
    res.status(400);
    throw new Error("User Account Already Exists");
  }
  //otherwise create new user
  const user = await User.create({
    first_name,
    last_name,
    username,
    email,
    password,
  });
  console.log(user);
  //send data to frontend if success
  if (username && password) {
    res.status(201).json({
      _id: user._id,
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.username,
      email: user.email,
      librayID: user.libray_id,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

//return info for authorized user
const authUser = asyncHandler(async (req, res) => {
  //collect login data from user
  const { email, password } = req.body;
  //collect/request user account via email
  const user = await User.findOne({ email });

  //need to add password functionalilty
  if (user) {
    //store info in res vari
    res.json({
      _id: user._id,
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.username,
      email: user.email,
      librayID: user.libray_id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email");
  }
});

module.exports = { registerUser, authUser };
