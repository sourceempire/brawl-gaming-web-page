import React from "react";
import "./BigButton.scss";
import { Link } from "react-router-dom";
const BigButton = ({ icon, label, labelcolor, color, navigationTo }) => {
  return (
      <Link
        className="BigButton"
        to={`/${navigationTo}`}
        style={{ background: color, color: labelcolor }}
      >
        <img src={icon} alt="icon" />
        <div className="line" style={{ background: labelcolor }}>
        </div>
        <h3 style={{ color: labelcolor }}>{label}</h3>
      </Link>
  );
};

export default BigButton;
