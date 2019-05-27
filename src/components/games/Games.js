import React, {useState, useEffect} from "react";
import "./games.scss";
import GameBox from "../home/Section3/GameBox/GameBox";

const Games = () => {
  
  const gameArray = [
    {id:1, title:'CS:GO', img_back:'csgo_back.png', img_front:'csgo_front.png', modes:[{ id:1, mode:'pvp' }, {id:2, mode:'pve'}] },
    {id:2, title:'FIFA 19', image:'https://bit.ly/2HNpxbs'},
    {id:3, title:'Rocket League', image:'https://bit.ly/2HNpxbs'},
    {id:4, title:'Black Ops 4', image:'https://bit.ly/2HNpxbs'},
    {id:5, title:'Fortnite', image:'https://bit.ly/2HNpxbs'}
  ]
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const res = await fetch("http://130.239.212.58:5000/game", {
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
      <div className="availableGames">
        {games.map(game => (
          <div className="game">
            <div alt={`${game.title}`} className="cover" style={{backgroundImage:`url('/images/game-images/'${game.image_back})`}}>
              
             
              
              <img src={'/images/game-images/' + game.image_front} alt={`${game.title}`} className="cover" />
            </div>
            <h2>{game.title}</h2>
            {game.modes.map(modes => (
              <div className="gameModes">
                <ul>
                  <li>{modes.mode}</li>
                </ul>
              </div>
            ))}
            <GameBox
                  image={game.image_front}
                  label={game.title}
                  gamemodes={game.modes}
                />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
