import React from "react";
import "./BoxHolder.scss";
const BoxHolder = ({image,label,text}) => {
    return (
        <div className="box">
        <img className="rbbIcon" src={image} alt="icon"/>
        <div className="label">
            <h1>{label}</h1>
        </div>
        <p>{text}</p>
        </div>
        );
};

export default BoxHolder;