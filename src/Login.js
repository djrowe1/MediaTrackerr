import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

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
    console.log("WE ARE HERE Part1000!");
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("WE ARE HERE PartMiddle!");
    const data = await res.json();
    localStorage.setItem("token", data.token);

    /*.then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        //console.log("WE ARE HERE Part100!");
        //console.log(data.token);
      });*/
    console.log("WE ARE HERE Part2000!");
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

  return (
    <div className="main">
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">User Name: </label>
                <input
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password: </label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-info m-auto">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
