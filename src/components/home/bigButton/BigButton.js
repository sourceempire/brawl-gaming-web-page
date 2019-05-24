import React from "react";
import "./BigButton.scss";
import { Link } from "react-router-dom";
const BigButton = ({ icon, label, labelcolor, color, navigationTo }) => {
  const GoTo = () => {};
  return (
    <div>
      <Link
        className="BigButton"
        to={`/${navigationTo}`}
        style={{ background: color, color: labelcolor }}
      >
        <img src={icon} alt="icon" />
        <hr style={{ backgroundColor: labelcolor, color: labelcolor }} />
        <h3 style={{ color: labelcolor }}>{label}</h3>
        <hr className="hrUnder" style={{ color: labelcolor }} />
      </Link>
    </div>
  );
};

export default BigButton;
