import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/download">Download</NavLink>
        <NavLink to="/concept">Concept</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
    );
  }
}

export default Navigation;
