import React from "react";
import "./GameBox.scss";

const capatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const GameBox = ({img_back,img_front,title,contests}) => {

    
    
    return (
        <div className="gameBox">
            <div className="gameImage" style={{backgroundImage:`url(/images/game-images/${img_back})`}}>
            
            <img className="frontImage" src={'/images/game-images/'+ img_front} alt="front img"/>
                <div className="gamemodes">
                    <div className="textInImage">
                        {Object.entries(contests).map(([name, modes]) => (
                            <React.Fragment key={name}>
                                <h1>{capatilize(name)}</h1>
                                <hr/>
                                {Object.entries(modes).map(([mode, info]) => ( 
                                    <h3 key={mode}>{capatilize(mode)}</h3>
                                ))}
                            </React.Fragment>
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