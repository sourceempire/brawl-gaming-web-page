import React from "react";
import "./MediumButton.scss";
import { Link } from "react-router-dom";
const MediumButton = ({label,navigationTo}) => {


    return (
        <div>
        <Link className="MediumButton" to={`/${navigationTo}`}>
            <h3>{label}</h3>
        </Link>
        </div>
        );
};

export default MediumButton;