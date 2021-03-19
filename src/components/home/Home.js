import React from "react";

import Hero from "./Hero/Hero";
import Concept from "./Concept/Concept";

import Onboarding from './Onboarding/Onboarding';
import About from "./About/About";

import "./Home.scss";





const Home = () => {
  return (
    <div className="home">
      <Hero>
        <div className="home-hero">
          <p className="home-hero-text">
            If you've got <span>time</span>
          </p>
          <p className="home-hero-text">
            we've got <span>esports</span>
          </p>
          <p className="home-hero-text">
            for <span>everyone</span>
          </p>
        </div>
      </Hero>
      <About />
      <Concept />
      <Onboarding />
    </div>
  );
};

export default Home;
