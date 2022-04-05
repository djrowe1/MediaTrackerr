import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
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

  return (
    <div className="main">
    <div className="paddedtitle">
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <h1 className="text-center">MediaTrackerr - Register</h1>

          <form onSubmit={handleSubmit}>
            <fieldset className="center-blue">
              <div className="spacing-bottom form-group">
                <label htmlFor="firstName">First Name: </label>
                <TextField
                  id="firstName"
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                  type="text"
                  className="white form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  size="small"
                />
              </div>
              <div className="spacing-bottom form-group">
                <label htmlFor="lastName">Last Name: </label>
                <TextField
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                  type="text"
                  className="white form-control"
                  id="lastName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  size="small"
                />
              </div>
              <div className="spacing-bottom form-group">
                <label htmlFor="username">User Name: </label>
                <TextField 
                  value={username}
                  onChange={(e) => setuser_name(e.target.value)}
                  type="text"
                  className="white form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                  size="small"
                />
              </div>
              <div className="spacing-bottom form-group">
                <label className="spacing-right" htmlFor="exampleInputEmail1">Email: </label>
                <TextField
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  className="white form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  size="small"
                />
              </div>
              <div className="spacing-bottom form-group">
                <label htmlFor="exampleInputPassword1">Password: </label>
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="white form-control"
                  id="password"
                  placeholder="Password"
                  size="small"
                />
              </div>
              <Button type="submit" variant="contained" className="btn btn-info m-auto">
                Register
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;
