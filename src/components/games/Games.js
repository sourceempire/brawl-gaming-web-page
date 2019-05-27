import React, {useState, useEffect} from "react";
import "./games.scss";
import Server from "../../utils/Server";
import GameBox from "../home/Section3/GameBox/GameBox";

const Games = () => {
  const gameArray = [
    {id:1, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:2, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:3, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:4, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:5, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] }
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
    <section>    
      {/* <div className="availableGames">
        {games.map(game => (
          
          <GameBox 
            title={game.title}
            img_back={game.img_back}
            img_front={game.img_front}
            gamemodes={game.modes}
          />
        ))}
      </div> */}
      <div className="availableGames">
        {gameArray.map(game => (
          <div className="game">
            <div alt={`${game.title}`} className="cover-back" style={{backgroundImage:`url('/images/game-images/${game.img_back}')`}}>
              <img src={'/images/game-images/' + game.img_front} alt={`${game.title}`} className="cover-front" />
            </div>
            <h2>{game.title}</h2>
            <div className="hidden-container">
              <h1>Game Modes</h1>
              <div className="gameModes">
                {game.modes.map(modes => (
                    <h3>{modes.mode}</h3>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;