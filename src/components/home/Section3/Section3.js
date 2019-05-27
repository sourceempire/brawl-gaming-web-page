import React from "react";
import "./Section3.scss";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";
const Section3 = () => {
  const gameModeText1 = "modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}]";
  const gameArray = [
    {id:1, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:2, title:'FIFA 19', img_back:'FIFA-19-BACKGROUND.png',modes:[{ id:1, mode:'Team deathmatch' }, {id:2, mode:'3 vs 3'}] },
    {id:3, title:'Rocket League', img_back:'FIFA-19-BACKGROUND.png', modes:[{ id:1, mode:'1 vs 1' }, {id:2, mode:'5 vs 5'}] }
    ]
  return (
    <div>
      <div className="Games">
        <h1>Popular games</h1>
      </div>
      
      <div className="threeGames">

        {gameArray.map(game=>(
          <GameBox
          label={game.title}
          image={game.img_back}
          gamemodes={game.modes}

        />
        ))}
        
        
      </div>
      <MediumButton label="See more games" navigationTo="games" />
    </div>
  );
};

export default Section3;
