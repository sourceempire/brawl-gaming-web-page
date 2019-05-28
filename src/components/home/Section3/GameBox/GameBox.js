import React from "react";
import "./GameBox.scss";
const GameBox = ({img_back,img_front,title,gamemodes}) => {
    return (
        <div className="gameBox">
            <div className="gameImage" style={{backgroundImage:`url(/images/game-images/${img_back})`}}>
            
            <img className="frontImage" src={'/images/game-images/'+ img_front} alt="front img"/>
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
                <h2>{title}</h2>
            </div>
        </div>
        );
};

export default GameBox;