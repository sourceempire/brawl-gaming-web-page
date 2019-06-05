import React, { useState, useEffect } from "react";
import "./games.scss";
import Server from "../../utils/Server";
import GameBox from "../home/Section3/GameBox/GameBox";

const Games = () => {
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

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section>
      <div className="availableGames">
        {games.map(game => (
          <GameBox
            title={game.title}
            img_back={game.img_back}
            img_front={game.img_front}
            gamemodes={game.modes}
          />
        ))}
      </div>
    </section>
  );
};

export default Games;
