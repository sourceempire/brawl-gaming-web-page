import React, {useState, useEffect} from "react";
import "./Section3.scss";
import Server from "../../../utils/Server";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";
const Section3 = () => {
  const gameArray = [
    {id:1, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}, {id:3, mode:'pve'}] },
    {id:2, title:'FIFA 19', img_back:'fifa19_back.png',img_front:'fifa19_front.png',modes:[{ id:1, mode:'Team deathmatch' }, {id:2, mode:'3 vs 3'}] },
    {id:3, title:'Rocket League', img_back:'fifa19_back.png',img_front:'csgo_front.png', modes:[{ id:1, mode:'1 vs 1' }, {id:2, mode:'5 vs 5'}] }
    ]
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
      const res = await fetch(`${Server.ip}/games`, {
        method: "GET"
      });
      if (res.status === 200) {
        const ret = await res.json();
        setGames(ret);
        console.log(ret);
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
