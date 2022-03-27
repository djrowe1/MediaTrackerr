/* eslint-disable no-template-curly-in-string */
//import express
const express = require("express");
//create express router
const router = express.Router();
//import user routes
const userRoutes = require("../routes/userRoutes");
const User = require("../models/userModel");

//const books = require("./data/books");
const dotenv = require("dotenv");

//connect to data base via db file
const connectDB = require("../config/db.js");
//const { notFound, errorHandler } = require("../middlewares/errorMiddleware");

//create express object
const app = express();

dotenv.config();

//call for active db connection
connectDB();

//receive json data format from user
app.use(express.json());

//API endpoint for serving data from backend to frontend
app.get("/", (req, res) => {
  res.send("Book API is running");
});

//test
/*app.get("/api/users/testUser", (req, res) => {
  res.send("Test user directory is working");
});*/

app.get("/Register", async (req, res) => {
  const { first_name, last_name, username, email, password } = req.body;

  const user = await User.create({
    first_name,
    last_name,
    username,
    email,
    password,
  });

  if (user) {
    console.alert(username);
  } else {
    console.alert("Error");
  }
});
//user route
//app.use("/api/users", userRoutes);
//app.use("/api/users/testUser", userRoutes);
//error routes
//app.use(notFound);
//app.use(errorHandler);

//assigned port from env file
const PORT = process.env.PORT || 5000;

//create web server - listens for frontend browser request
app.listen(PORT, console.log("Server running on PORT", PORT));
module.exports = router;
