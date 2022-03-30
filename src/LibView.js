import * as React from "react";
import { Grid } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ListView from "./ListView.js";
import Button1 from "./Button1.js";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  //logout user
  async function logout() {
    localStorage.removeItem("token");
    await navigate("/Login");
  }

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
  }, [navigate]);

  return (
    <body>
      <div>
        <h1>MediaTrackerr - Library View Page </h1>
        <div className="userInfo">
          <h2>Welcome: {JSON.stringify(username)}</h2>
          <p> - </p>
          <button>
            <div onClick={logout}>Logout</div>
          </button>
        </div>
      </div>
      {/* Using grid to position elements */}
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <grid item style={{ border: "0.2px solid grey" }}>
          <div className="App">
            <h2>Media Book List</h2>
            <ListView />
          </div>
        </grid>
        <grid item>
          <p></p>
          <Button1 />
        </grid>
        <grid item>
          <p></p>
        </grid>
      </Grid>
    </body>
  );
};

export default Home;
