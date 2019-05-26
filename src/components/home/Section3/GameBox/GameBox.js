import React from "react";
import "./GameBox.scss";
const GameBox = ({image,label,gamemodes}) => {
    return (
        <div className="gameBox">
            <div className="gameImage" style={{backgroundImage:`url(/images/${image})`}}>
                <div className="gamemodes">
                    <div className="textInImage">
                    <h1>Gamemodes</h1>
                    <hr/>
                    {gamemodes.map(modes =>( 
                        <h3>{modes.mode}</h3>
                    ))}
                    </div>
                </div>
            </div>
            <div className="label">
                <h2>{label}</h2>
            </div>
        </div>
        );
};

export default GameBox;