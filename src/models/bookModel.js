const mongoose = require("mongoose");

//define book database schema using mongoose
const bookSchema = mongoose.Schema({
  bookTitle: {
    type: String,
    required: false,
  },
  bookAuthor: {
    type: String,
    required: false,
  },
  bookISBN: {
    type: Number,
    required: false,
  },
});

//create vari to hold user schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
