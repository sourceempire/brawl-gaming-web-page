import React from "react";
import "./MediumButton.scss";
const MediumButton = ({label}) => {
    return (
        <div>
        <button className="MediumButton" type="submit">
            <h3>{label}</h3>
        </button>
        </div>
        );
};

export default MediumButton;