import React from "react";
import "./BigButton.scss";
const BigButton = ({icon,label,labelcolor,color}) => {
    return (
        <div>
        <button className="BigButton" type="submit" style={{background:color}}>
            <img src={icon} alt="icon"/>
            <hr/>
            <br/>
            <h3 style={{color:labelcolor}}>{label}</h3>
        </button>

        </div>
        );
};

export default BigButton;