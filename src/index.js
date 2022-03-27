import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LibView from "./LibView";
import AddMedia from "./AddMedia";
import MediaDetail from "./MediaDetail";
import { Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="navi">
        <Link to="/">Home</Link> | <Link to="/Login">Login</Link> |{" "}
        <Link to="/Register">Register</Link> |{" "}
        <Link to="/LibView">Library View Test</Link> |{" "}
        <Link to="/AddMedia">Add Media</Link> |{" "}
        <Link to="/MediaDetail">MediaDetail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LibView" element={<LibView />} />
        <Route path="/AddMedia" element={<AddMedia />} />
        <Route path="/MediaDetail" element={<MediaDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
