//import express
const express = require("express");
//import user controllers
const { registerUser, authUser } = require("../controllers/userContollers");

//create express router
const router = express.Router();

//create specific route for api endpoint
router.route("/testUser").post(registerUser);
//create login route for user
router.route("/login").post(authUser);

module.exports = router;
