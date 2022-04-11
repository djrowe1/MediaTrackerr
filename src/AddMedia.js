import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMedia.css";

import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Button1 from "./Button1.js";
import Button from '@mui/material/Button';
import "./LibView.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

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
      .catch((error) => {
        if (error.response) {
          alert("Error encountered... Please Try Again");
        }
      });
    //alert("SEND ITEM TO DATABASE\n" + JSON.stringify(bookData));
    //alert(info.title + " sent to list!");
    navigate("/Login")
    //console.log(username);
  };

  {
    /*Display results from API results */
  }

  const browntheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#d39b74',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#3c1e31',
      },
    },
  });

  const paperStyle= {padding: 10, height: 100, width: 200}

  return (
    <div className="main">
      {/* Using grid to position elements */}
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
      <div className="paddedtitle">
        <p></p>
        <div className="userInfo">
          <Link to="/LibView">
            <Button 
              style={{
                backgroundColor: "#4D1137",
              }}
              variant="contained"
            >
              Back
            </Button>
          </Link>
        </div>
        <div className="center">
          <h1 className="whitetext">Add Media to Library</h1>
          <p className="whitetext">Click a card below to add a book to your library. </p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                sx={{ input: { color: 'white' } }}
                margin="normal"
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: 'white' }}/>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                style={{"textAlign":"center"}}
                onChange={handleChange}
                className="form-control"
                placeholder="Search for Books"
                autoComplete="off"
              />
            </div>
            <Button 
              style={{
                backgroundColor: "#D2B48C",
              }}
              variant="contained" size="small" type="submit" className="button">
              Search
            </Button>
            <p></p>
          </form>
        </div>

        <ImageList sx={{ padding: 4, paddingTop: 0}} cols={7} rowHeight={250}>
          {/*use arrow function with on click so that handleClick function is not automatically called*/}
            {result.map((book) => (
              <Card key={book.title} component="div" sx={{ paddingTop: 1 }}>
                <CardMedia>
                  <img
                    key={book.id}
                    src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
                    alt={book.title}
                    onClick={() => handleClick(book.volumeInfo)}
                  />
                </CardMedia>
              </Card>
            ))}
        </ImageList>
      </div>
      </Grid>
    </div>
  );
}

export default AddMedia;

{
  /*<p>Title: {book.volumeInfo.title}</p> <p>Author: {book.volumeInfo.authors}</p>*/
}
