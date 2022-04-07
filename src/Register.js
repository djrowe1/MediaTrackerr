import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Paper } from "@mui/material";
import { TextField  } from "@mui/material";
import { Button } from "@mui/material";
import "./Login.css";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleSubmit() {
    const formData = {
      first: first_name,
      last: last_name,
      user: username,
      email1: email,
      pass: password,
    };
    fetch("/Register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.response) {
          alert("Error encountered... Please Try Again");
        } else {
          alert("Success!!! User Profile Created!");
          navigate("/Login");
        }
      }, navigate("/Login"));
  }
  //send user to library view if logged-in
  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.isLoggedIn ? navigate("/LibView") : navigate("/Register")
      );
  }, [navigate]);

  const paperStyle= {padding: 20, height: '50vh', width: 300, marginTop: "200px"}
  const imagepaperStyle= {padding: 20, height: '50vh', width: 600, marginTop: "200px"}


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


  return (
    <Grid paddingTop={0} align='center' >
      <div className="main" align='center'>
        <div className="flex">
        <Paper sx={{ width: 300, color: '#4c1034'}} className="landingimage" style={imagepaperStyle} >
          <h1>Welcome to MediaTrackerr</h1>
          <h5>We'll Help You Keep Track of All of Your Books</h5>
        </Paper> 
        <Paper elevation={50} style={paperStyle} >
          <Grid>
            <h2> Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  fullWidth required
                />
              </div>
              <div className="form-group">
                <TextField
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  fullWidth required
                />
              </div>
              <div className="form-group">
                <TextField
                  value={username}
                  onChange={(e) => setuser_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                  fullWidth required
                />
              </div>
              <div className="form-group">
                <TextField
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  fullWidth required
                />
              </div>
              <div className="form-group">
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  fullWidth required
                />
              </div>
              <Link to="/Login">
                <ThemeProvider theme={browntheme}>
                  <Button color="secondary" variant="contained" sx={{ margin: 1}}>
                    Login
                  </Button>
                </ThemeProvider>
              </Link>
              <ThemeProvider theme={browntheme}>
                <Button color="secondary"type="submit" variant="contained" sx={{ margin: 1}}>
                  Register
                </Button>
              </ThemeProvider>
          </form>
          </Paper> 
        </div>
      </div>
    </Grid>
  );
};

export default Register;
