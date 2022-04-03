import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMedia.css";
const User = require("./models/userModel");

function AddMedia() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.isLoggedIn ? setUsername(data.username) : navigate("/Login")
      );
  });

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
        //console.log(data.data.items);
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
    const bookData = {user: username, book:{
      isbn: info.industryIdentifiers,
      title: info.title,
      authors: info.authors,
      language: info.language,
      pages: info.pageCount,
      published: info.publishedDate,
      publisher: info.publisher,
      imageLinks: info.imageLinks
    }};
    fetch("/addBook", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token")
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.response) {
          alert("Error encountered... Please Try Again");
        }
      });
    //alert("SEND ITEM TO DATABASE\n" + JSON.stringify(bookData));
    alert(info.title + " sent to list!");
    //console.log(username);
  };

  {
    /*Display results from API results */
  }
  return (
    <div>
      <div>
        <h1>MediaTrackerr - AddMedia</h1>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
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
      <div className="setup">
        {result.map((book) => (
          <img
            key={book.id}
            src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
            alt={book.title}
            onClick={() => handleClick(book.volumeInfo)}
          />
        ))}
      </div>
    </div>
  );
}

export default AddMedia;

{
  /*<p>Title: {book.volumeInfo.title}</p> <p>Author: {book.volumeInfo.authors}</p>*/
}
