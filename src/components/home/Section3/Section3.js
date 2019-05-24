import React from "react";
import "./Section3.scss";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";
const Section3 = () => {
  const gameModeText1 = "modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}]";
  return (
    <div>
      <div className="Games">
        <h1>Popular games</h1>
      </div>
      <div className="threeGames">
        <GameBox
          image="FIFA-19-BACKGROUND.png"
          label="CS:GO"
          gamemodes={gameModeText1}
        />
        <GameBox
          image="FIFA-19-BACKGROUND.png"
          label="CS:GO"
          gamemodes="5 vs 5"
        />
        <GameBox
          image="FIFA-19-BACKGROUND.png"
          label="CS:GO"
          gamemodes="Deathmatch"
        />
      </div>
      <MediumButton label="See more games" navigationTo="games" />
    </div>
  );
};

export default Section3;
