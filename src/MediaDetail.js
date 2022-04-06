import * as React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function MediaDetail() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

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


  return (
    <>
      <body>
        <div className="main">
          <div className="paddedtitle">
          <h1>MediaTrackerr - Media Detail Page</h1>
          </div>
        </div>
      </body>
    </>
  );
}

export default MediaDetail;
