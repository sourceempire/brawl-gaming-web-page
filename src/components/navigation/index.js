import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="menu">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/concept">Concept</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/login" className="login">
            Log in
          </NavLink>
          <NavLink to="/signup" className="signup">
            Sign up
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
