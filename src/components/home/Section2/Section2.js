import React from "react";
import MediumButton from "../MediumButton/MediumButton";
import BoxHolder from "../Section2/BoxHolder/BoxHolder";
const Section2 = () => {
    const readyText="Choose your game and game mode. Invite your friends or play solo.";
    const betText="Bet money on yourself or your team, and match with others who are betting the same amount.";
    const brawlText="Play against opponents worldwide, and the winners gets the whole pot instantly after the match!";
   
    return(
        <div>
            <div className="HTB">
                <h1>How To Brawl</h1>
            </div>
            <div className="threeBoxes">
                    <BoxHolder image="/images/User.svg" label="Ready" text={readyText}/>
                    <img className="arrow" src="/images/Arrow.svg" alt="Arrow"/>
                    <BoxHolder image="/images/Dollars.svg" label="Bet" text={betText}/>
                    <img className="arrow" src="/images/Arrow.svg" alt="Arrow"/>
                    <BoxHolder image="/images/brawl.svg" label="Brawl" text={brawlText}/>
                </div>
                <MediumButton label="Read more"/>
        </div>
        );
};

export default Section2;