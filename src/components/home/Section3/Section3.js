import React from "react";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox"
const Section3 = () => {
    const gameModeText1 ="1 vs 1";
    return(
        <div>
            <div className="Games">
                <h1>Popular games</h1>
            </div>
            <div className="threeGames">
            <GameBox image="/images/FIFA-19-BACKGROUND.png" label="CS:GO" gamemodes={gameModeText1}/>
            <GameBox image="/images/FIFA-19-BACKGROUND.png" label="CS:GO"gamemodes="5 vs 5"/>
            <GameBox image="/images/FIFA-19-BACKGROUND.png" label="CS:GO"gamemodes="Deathmatch"/>
            </div>
                <MediumButton label="See more games"/>
        </div>
        );
};

export default Section3;