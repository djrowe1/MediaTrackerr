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
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to MediaTrackerr</h1>
                <p className="subtitle">
                  <em>Your Media, Managed Easily.</em>
                </p>
              </div>
              <div className="buttonContainer">
                <Link to="/Login">
                  <Button 
                    style={{
                      backgroundColor: "#D2B48C",
                    }}
                    variant="contained" className="landingbutton"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/Register">
                  <Button 
                    style={{
                      backgroundColor: "#A15440",
                    }}
                    variant="contained" className="landingbutton"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </div>
        </Container>
      </div>
    </>
  );
}

export default App;
