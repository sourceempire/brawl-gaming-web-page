import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink exact to="/">
          <img src="/images/logo.png" alt="logo" />
        </NavLink>
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
};

export default Navigation;
