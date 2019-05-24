import React from "react";
import "../concept.scss";

const SideNav = () => {

   

    return (
        <div className = "sideNav">
            <div className = "sideNav-box">
                <a href = "#About">About BG</a>
                <a href = "#Register">Register</a>
                <a href = "#GetStarted">Get started</a>
                <a href = "#MakingBets">Making bets</a>
                <a href = "#Matchmaking">Matchmaking</a>
            </div>
        </div>
    )
}
  
export default SideNav;