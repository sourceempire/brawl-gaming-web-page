import React from "react";
import "./GameBox.scss";
const GameBox = ({image,front_img,label,gamemodes}) => {
    return (
        <div className="gameBox">
            <div className="gameImage" style={{backgroundImage:`url(/images/game-images/${image})`}}>
            
            <img className="frontImage" src={'/images/game-images/'+ front_img} alt="front img"/>
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