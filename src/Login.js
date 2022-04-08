import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Login.css";

import { Container, Grid, Paper } from "@mui/material";
import { TextField  } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    user: username,
    pass: password,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //send login info to server
    //console.log("WE ARE HERE Part1000!");
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    //console.log("WE ARE HERE PartMiddle!");
    const data = await res.json();
    localStorage.setItem("token", data.token);

    /*.then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        //console.log("WE ARE HERE Part100!");
        //console.log(data.token);
      });*/
    //console.log("WE ARE HERE Part2000!");
    navigate("/LibView");
  }

  //send user to library view if logged-in
  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? navigate("/LibView") : null));
  }, [navigate]);


  const paperStyle= {padding: 20, height: '50vh', width: 300, marginTop: "200px"}
  const imagepaperStyle= {padding: 20, height: '50vh', width: 600, marginTop: "200px"}

  const nounderline= {textdecoration: "false"}

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
    <Grid paddingTop={0} align='center'>
      <div className="main-library" align='center' align-items='inline'>
      <div className="flex">
      <Paper sx={{ width: 300, color: '#4c1034'}} className="landingimage" style={imagepaperStyle} >
        <div className="blacktext">
          <h1>Welcome to MediaTrackerr</h1>
        </div>
        <h3><em>Your Media, Managed Easily.</em></h3>

      </Paper> 
        <Paper elevation={50} color="blue" style={paperStyle} >
          <Grid>
            <h2> Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  fullWidth required
                />
              </div>
              <div className="form-group">
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  fullWidth required
                />
              </div>
              <div className="buttons">
              <Link to="/Register">
                <ThemeProvider theme={browntheme}>
                  <Button 
                  style={{
                    backgroundColor: "#4D1137",
                  }}
                  color="secondary" variant="contained"  sx={{ margin: 1}}>
                    Register
                  </Button>
                </ThemeProvider>
              </Link>
              <ThemeProvider theme={browntheme}>
                <Button 
                style={{
                  backgroundColor: "#DBA37D",
                }}
                color="secondary"type="submit" variant="contained" sx={{ margin: 1}}>
                  Login
                </Button>
              </ThemeProvider>
              </div>
          </form>
        </Paper> 
        </div>
        </div>
    </Grid>
  );
};

export default Login;
