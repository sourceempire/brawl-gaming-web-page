import React from "react";
import "./GameBox.scss";
const MediumButton = ({image,label}) => {
    return (
        <div className="gameBox">
            <img className="gameImage"src= {image} alt={label}/>
            <div className="label">
            <h3>{label}</h3>
            </div>
        
        </div>
        );
};

export default MediumButton;