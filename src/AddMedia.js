import React, { useState } from "react";
import axios from "axios";
import "./AddMedia.css";

function AddMedia() {
  //variable to handle API request
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBWLNhsEHPdV2erX4mJY1H7tvEXIE5Wzws"
  );

  //functions to handle API request
  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }
  {
    /*return results from Google Books API*/
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        //store book data into Result state variable
        setResult(data.data.items);
      })
      .catch((error) => {
        if (error.response) {
          alert("Error encountered... Please Try Again");
        }
      });
  }
  {
    /*Handles when user selects book */
  }
  const handleClick = (info) => {
    alert("SEND ITEM TO DATABASE - Title: " + info);
  };

  {
    /*Display results from API results */
  }
  return (
    <body>
      <div>
        <h1>MediaTrackerr - AddMedia</h1>
      </div>

      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              placeholder="Search for Books"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="button">
            Search
          </button>
          <p></p>
        </form>
      </div>

      {/*use arrow function with on click so that handleClick function is not automatically called*/}
      <div class="setup">
        {result.map((book) => (
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.title}
            onClick={() => handleClick(book.volumeInfo.title)}
          />
        ))}
      </div>
    </body>
  );
}

export default AddMedia;

{
  /*<p>Title: {book.volumeInfo.title}</p> <p>Author: {book.volumeInfo.authors}</p>*/
}
