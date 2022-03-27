import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";

const Register = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <h1 className="text-center">MediaTrackerr - Register</h1>

          <form>
            <fieldset>
              <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">User Name: </label>
                <input
                  value={username}
                  onChange={(e) => setuser_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Addr: </label>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
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
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
