/* eslint-disable no-template-curly-in-string */
//import express
const express = require("express");
//create express router
const router = express.Router();
//import user routes
const userRoutes = require("../routes/userRoutes");
const User = require("../models/userModel");
const bodyParser = require("body-parser");
//const books = require("./data/books");
const dotenv = require("dotenv");
require("dotenv").config();
//connect to data base via db file
const connectDB = require("../config/db.js");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");
//const { notFound, errorHandler } = require("../middlewares/errorMiddleware");

//create express object
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

//call for active db connection
connectDB();

//receive json data format from user
app.use(express.json());
//verify user web token
function verifyJWT(req, res, next) {
  // removes 'Bearer` from token
  const token = req.headers["x-access-token"]?.split(" ")[1];

  if (token !== null) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed To Authenticate",
        });
      req.user = decoded;
      req.user.id = decoded.id;
      req.user.username = decoded.username;

      next();
    });
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false });
  }
}

//access authorization for current user
app.get("/isUserAuth", verifyJWT, (req, res) => {
  return res.json({ isLoggedIn: true, username: req.user.username });
});

//API endpoints for serving data from backend to frontend

//listen for post data on this user register route
app.post("/Register", async (req, res) => {
  //const { first_name1, last_name1, username1, email1, password1 } = req.body;
  console.log(req.body);
  const first_name = req.body.first;
  const last_name = req.body.last;
  const username = req.body.user;
  const email = req.body.email1;
  const password = req.body.pass;
  //check if username or email is alrady used
  const takenUserName = await User.findOne({ username: req.body.user });
  const takenEmail = await User.findOne({ password: req.body.pass });
  if (takenUserName || takenEmail) {
    res.json({ message: "Username or email already in use" });
  } else {
    const user = new User({
      first_name,
      last_name,
      username,
      email,
      password,
    });
    user.save();
    res.json({ message: "User Created" });
  }
});

//listen for post data on this user login route
app.post("/Login", async (req, res) => {
  console.log("Request from Frontend");
  console.log(req.body);
  const username = req.body.user;
  const password = req.body.pass;
  await User.findOne({ username: req.body.user }).then((dbUser) => {
    if (!dbUser) {
      return res.json({
        messge: "Invalid Username or Password",
      });
    }
    if (password === dbUser.password) {
      const payLoad = {
        id: dbUser._id,
        username: dbUser.username,
      };
      console.log("WE ARE HERE!");
      jwt.sign(
        payLoad,
        process.env.PASSPORTSECRET,
        { expiresIn: 86400 },
        (err, token) => {
          if (err) {
            return res.json({ message: err });
          }
          return res.json({
            message: "Success",
            token: "Bearer " + token,
          });
        }
      );
    } else {
      return res.json({
        message: "Invalid Username or Password",
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Book API is running");
});

/*Book Routes*/
app.post("/addBook", async (req, res) => {
  const book = req.body.book;
  const user = req.body.user;

  //check if book in library
  const mediaExists = await User.findOne({
    username: user,
    media: { $elemMatch: { isbn: book.isbn } },
  });
  if (mediaExists) {
    res.json({ message: book.title + " already in library!" });
  } else {
    //add the book to library
    let doc = await User.findOneAndUpdate(
      { username: user },
      { $push: { media: book } }
    );
    //console.log(user + " Number of books: " + doc.media.length);
    //console.log(book.title);
    await doc.save();
    res.json({ message: book.title + " added to library!" });
  }
});

app.post("/removeBook", async (req, res) => {
  const book = req.body.book;
  const user = req.body.user;
  //const bookData = {username: user, book:{book}};
    //remove the book from the library
    let doc = await User.findOneAndUpdate(
      { username: user },
      { $pull: { media: book } }
    );
    //console.log(user + " Number of books: " + doc.media.length);
    //console.log(book.title);
    
    await doc.save();
    res.json({ message: book.title + " removed from library!" });
  
});

app.get("/myLib", async (req, res) => {
  try {
    //require token
    const token = req.headers["x-access-token"]?.split(" ")[1];
    if (!token) return res.json(false);
    //verify token
    const verified = jwt.verify(token, process.env.PASSPORTSECRET);
    if (!verified) return res.json(false);
    //get user
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    //return books
    const books = user.media;
    console.log("Number of books: " + books.length);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//assigned port from env file
const PORT = process.env.PORT || 5000;

//create web server - listens for frontend browser request
app.listen(PORT, console.log("Server running on PORT", PORT));
module.exports = router;
