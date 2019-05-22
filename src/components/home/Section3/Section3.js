import React from "react";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox"
const Section3 = () => {
  
    return(
        <div>
            <div className="Games">
                <h1>Popular games</h1>
            </div>
            <div className="threeGames">
                <GameBox image="/images/csgo.svg" label="CS:GO"/>
            </div>
                <MediumButton label="See more games"/>
        </div>
        );
};

export default Section3;