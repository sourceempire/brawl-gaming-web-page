import React, {useState, useEffect} from "react";
import "./Section3.scss";
import Server from "../../../utils/Server";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";
const Section3 = () => {
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
      const res = await fetch(`${Server.ip}/games`, {
        method: "GET"
      });
      if (res.status === 200) {
        const ret = await res.json();
        setGames(ret);
      } else {
        alert("Not able to get games right now.");
        setGames([]);
      }
    };

    useEffect(() => { fetchGames() }, [])

  return (
    <div>
      <div className="Games">
        <h1>Popular games</h1>
      </div>
      
      <div className="threeGames">

        {games.map(game=>(
          <GameBox
          title={game.title}
          img_back={game.img_back}
          img_front={game.img_front}
          gamemodes={game.modes}

        />
        ))}
        
        
      </div>
      <MediumButton label="See more games" navigationTo="games" />
    </div>
  );
};

export default Section3;
