import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import Login from "../login/Login";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink exact to="/">
          <img src="/images/logo.png" alt="logo" />
        </NavLink>
        <div className="text">
          <h4>Brawl</h4>
          <h4>Gaming</h4>
        </div>
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink to="/download" onClick={() => scrollToTop()}>
          Download
        </NavLink>
        <NavLink to="/concept" onClick={() => scrollToTop()}>
          Concept
        </NavLink>
        <NavLink to="/games" onClick={() => scrollToTop()}>
          Games
        </NavLink>
        <NavLink to="/faq" onClick={() => scrollToTop()}>
          FAQ
        </NavLink>
        <Login />
        <NavLink to="/signup" className="signup" onClick={() => scrollToTop()}>
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
