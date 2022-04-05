import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-welcome">
        <Container>
          <rows>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to MediaTrackerr</h1>
                <p className="subtitle">
                  We'll Help You Keep Track of All of Your Books.
                </p>
              </div>
              <div className="buttonContainer">
                <Link to="/Login">
                  <Button variant="contained" className="landingbutton">
                    Login
                  </Button>
                </Link>
                <Link to="/Register">
                  <Button variant="contained" className="landingbutton">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </rows>
        </Container>
      </div>
    </>
  );
}

export default App;
