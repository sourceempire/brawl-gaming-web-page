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
          <div className="home-hero-content">
            <p className="home-hero-text">
              <span>esports</span> for the people
            </p>
          </div>
        </div>
      </Hero>
      <About />
      <Concept />
      <Onboarding />
    </div>
  );
};

export default Home;
