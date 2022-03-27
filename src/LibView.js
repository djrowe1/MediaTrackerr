import * as React from "react";
import { Grid } from "@mui/material";
import "./App.css";
import ListView from "./ListView.js";
import Button1 from "./Button1.js";

const Home = () => {
  return (
    <body>
      <div>
        <h1>MediaTrackerr - Library View Page</h1>
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
      </Grid>
    </body>
  );
};

export default Home;
