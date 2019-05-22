import React from "react";
import BigButton from "../bigButton/BigButton";
const Section1 = () => {

return(
    <div>
    <div className="RBB">
        <h1>Ready.</h1>
        <h1>Bet.</h1>
        <h1>Brawl.</h1>
        </div>
        <img className="computer" src="/images/dator.svg" alt="computer"/>
       <div className="threeButtons">
          <BigButton className="conceptButton" icon="/images/concept.svg" label="Concept"color="linear-gradient(#32322F, #171715)"/>
          <BigButton className="registerButton" icon="/images/Register.svg" label="Register" color="linear-gradient(#66b62d, #457c1e)"/>
          <BigButton className="loginButton" icon="/images/Download.svg" labelcolor="black" label="Download" color="linear-gradient(#FFFFFF, #EDE4D7)"/>
       </div>
    </div>
);
};

export default Section1;