import React from "react";
import "./Section1.scss";
import BigButton from "../bigButton/BigButton";
const Section1 = () => {

return(
    <div className="section1">
    
        <div className="right">
          <div className="computerDiv1">
            <img className="computer" src="/images/dator.svg" alt="computer" />
            <img className="clientImg" src="/images/app-start.png" alt="client" />
          </div>
        </div>
        <div className="left">
          <div className="RBB">
          <h1>Ready.</h1>
          <h1>Bet.</h1>
          <h1>Brawl.</h1>
          </div>
          <div className="threeButtons">
          <BigButton
            className="conceptButton" 
            icon="/images/concept.svg" 
            navigationTo="concept" 
            labelcolor="#f2eae0"
            label="Concept"
            color="linear-gradient(#32322F,#171715)"/>

          <BigButton 
            className="registerButton" 
            icon="/images/Register.svg" 
            navigationTo="signup" 
            labelcolor="#f2eae0"
            label="Register" 
            color="linear-gradient(#66b62d, #457c1e)"/>

          <BigButton 
            className="loginButton" 
            icon="/images/Download.svg" 
            navigationTo="download" 
            labelcolor="black" 
            label="Download" 
            color="linear-gradient(#FFFFFF, #EDE4D7)"/>
            </div>
       </div>
    </div>
);
};

export default Section1;