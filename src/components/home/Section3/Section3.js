import React, {useState, useEffect} from "react";
import "./Section3.scss";
import Fetcher from "../../../utils/Fetcher";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Section3 = () => {
    const [games, setGames] = useState([]);

  const fetchGames = async () => {
    Fetcher.get(SERVER_URL + "api/public/games", {})
    .then(resp => {
      setGames(resp.games);
    })
    .catch((err) => {
      //OM MAN INTE ÄR INLOGGAD KOMMER MAN HIT
      setGames([]);
      console.log(err);
    }) 
  }

    useEffect(() => {
    fetchGames();
  }, []);

  const getFrontAndBackImage = (str) => {
    if(str === '4747a477-3445-4b0a-9db9-bf0e68238208' ) {
      return 'csgo_';
    }
  } 

  return (
    <div>
      <div className="Games">
        <h1>Popular games</h1>
      </div>
      
      <div className="threeGames">

      {Object.entries(games).map(([id, game]) => (
          <GameBox
            key={id}
            title={game.name}
            img_back={getFrontAndBackImage(id) + 'back.png'}
            img_front={getFrontAndBackImage(id) + 'front.png'}
            contests={game.contests}
          />
        ))}
        <GameBox 
          title="More coming soon"
          img_back="Brawl-MoreCommingSoon-Back.png"
          img_front="Brawl-MoreCommingSoon-Front.png"
          contests={[]}
        />
        
        
      </div>
      <MediumButton label="See more games" navigationTo="games" />
    </div>
  );
};

export default Section3;
