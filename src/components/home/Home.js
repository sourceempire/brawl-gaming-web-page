import React from "react";
// import Fire from "./Hero/Fire/Fire";
import Hero from "./Hero/Hero";
import Concept from './Concept/Concept';

import "./Home.scss";
import "./Section1/Section1";
// import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const Home = () => {
  return (
    <div className="home" onScroll={(e) => console.log("hej")}>
      <Hero>
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
