import React from "react";
// import Fire from "./Hero/Fire/Fire";
import Hero from "./Hero/Hero";
import Concept from './Concept/Concept';

import orc from '../../resources/images/home-hero/orc.png'
import military from '../../resources/images/home-hero/military.png'

import "./Home.scss";
import "./Section1/Section1";
// import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const Home = () => {
  return (
    <div className="home">
      <Hero>
        <div className="home-hero">
          <div className="hero-text">
            
            {/* <p>Earn real money rewards, playing the game of your choice</p> */}
          </div>
          
          {/* <img className="orc" src={orc}></img>
          <img className="military" src={military}></img> */}
        </div>
        {/* <Fire /> */}
      </Hero>
      <Concept />
      {/* <Section1/> */}
      <Section2/>   
      <Section3/>
    </div>
  );
};

export default Home;
