import * as React from "react";
import { useState } from "react";
import "./App.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <h1 className="text-center">Login</h1>
          <form>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address: </label>
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
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
