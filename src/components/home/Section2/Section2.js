import React from "react";
import "./Section2.scss";
import MediumButton from "../MediumButton/MediumButton";
import BoxHolder from "../Section2/BoxHolder/BoxHolder";
const Section2 = () => {
  const readyText =
    "Choose your game and game mode. Invite your friends or play solo.";
  const betText =
    "Bet money on yourself or your team, and match with others who are betting the same amount.";
  const brawlText =
    "Play against opponents worldwide, and the winners gets the whole pot instantly after the match!";

  return (
    <section className="HTB-container">
      <div className="HTB">
        <h1>How To Brawl</h1>
      </div>
      <div className="content-container">
        <div className="steps">
          <BoxHolder image="/images/user.svg" label="Ready" text={readyText} />
        </div>
        <div className="steps-arrow">
          <img className="arrow" src="/images/Arrow.svg" alt="Arrow" />
        </div>
        <div className="steps-arrow-small">
          <img className="arrow-small" src="/images/ArrowSmall.svg" alt="Arrow" />
        </div>
        <div className="steps">
          <BoxHolder image="/images/Dollars.svg" label="Bet" text={betText} />
        </div>
        <div className="steps-arrow">
          <img className="arrow" src="/images/Arrow.svg" alt="Arrow" />
        </div>
        <div className="steps-arrow-small">
          <img className="arrow-small" src="/images/ArrowSmall.svg" alt="Arrow" />
        </div>
        <div className="steps">
          <BoxHolder image="/images/brawl.svg" label="Brawl" text={brawlText} />
        </div>
      </div>
      <MediumButton className="read-more" label="Read more" navigationTo="concept" />
    </section>
  );
};

export default Section2;
