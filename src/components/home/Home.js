import React from "react";

import Hero from "./Hero/Hero";
import Concept from "./Concept/Concept";

import Onboarding from './Onboarding/Onboarding';

import "./Home.scss";
import ConceptPart from "./Concept/ConceptPart/ConceptPart";
import About from "./About/About";




const Home = () => {
  return (
    <div className="home">
      <Hero>
        <div className="home-hero"></div>
      </Hero>
      <About />
      <Concept />
      <Onboarding />
    </div>
  );
};

export default Home;
