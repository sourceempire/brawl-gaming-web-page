import React from "react";
import "./concept.scss";
import "./concept-components/Grids"
import Grids from "./concept-components/Grids";
import SideNav from "./concept-components/SideNav";

const Concept = () => {

  const concepts = [
    {
        id:1,
        left: true,
        header: "About Brawl Gaming",
        text: "Brawl gaming is a desktop client that lets gamers bet money on " +
        "their own performance and play against other people worldwide. " +
        "You can play with your friends against others, or challenge your " +
        "friends directly. The games are hosted on our dedicated servers, " +
        "and our automatic match verification instantly gets the match " + 
        "result and rewards the winners. No manual match reporting " + 
        "needed!",
        img: "/images/no_image.svg", 
        key: "About"
    },
    {
        id:2,
        left: false,
        header: "Register Account",
        text: "To register an account, fill in our registration form. To make " + 
        "sure our matchmaking always is fair, each person is only able to " +
        "have one Brawl Gaming account. To prevent users from " +
        "creating multiple accounts, you need to enter your personal " +
        "number. We at Brawl Gaming take security very seriously, and we " +
        "can assure you that your personal information is secure with us.",
        img: "/images/no_image.svg", 
        key: "Register"
    },
    {
        id:3,
        left: true,
        header: "Getting started",
        text: "After making an account and downloading the client, you choose " +
        "your preferred game and game mode. Then you can invite friends to " +
        "your team, or you can choose to queue up solo and get matched " +
        "with both teammates and opponents. ",
        img: "/images/no_image.svg", 
        key: "GetStarted"
    },
    {   
        id:4,
        left: false,
        header: "Making bets",
        text: "After adding money to your account, you can place bets on you or " +
        "your team winning the game. You choose the bet amount you " +
        "want to play for, and you get matched with players that play for " + 
        "the same amount. You can choose multiple bet options to increase " +
        "your chances of quickly finding a match. The creator of the lobby " +
        "choose the bet amount, and everyone in the lobby have to accept " +
        "the bet amount before you can queue up.",
        img: "/images/no_image.svg", 
        key: "MakingBets"
    },
    {
        id:5,
        left: true,
        header: "Matchmaking",
        text: "Our queue system matches you with players of similar skill level " + 
        "using a ranking system. If you play with friends, our queue system " +
        "matches you against another party with similar individual skill " +
        "levels. After the game is over, the winner is awarded the prize pot " +
        "instantly. Since the match is played on our own server, our " +
        "automatic match verification knows who won and eliminates the " + 
        "need to manually report a match score.",
        img: "/images/no_image.svg", 
        key: "Matchmaking"
    }
]

  return (
    <section>
      {concepts.map(concept =>(
        <li key = {concept.key}>
          <Grids concept={concept} />
        </li>
      ))}
        <SideNav/>
    </section>
  );
};

export default Concept