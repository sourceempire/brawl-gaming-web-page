import React from "react";
import "./GameBox.scss";
const MediumButton = ({image,label,gamemodes}) => {
    return (
        <div className="gameBox">
            <div className="gameImage" style={{backgroundImage:`url(${image})`}}>
                <div className="gamemodes">
                    <div className="textInImage">
                    <h1>Gamemodes</h1>
                    <hr/>
                    <h3>{gamemodes}</h3>
                    </div>
                </div>
            </div>
            <div className="label">
                <h2>{label}</h2>
            </div>
        </div>
        );
};

export default MediumButton;