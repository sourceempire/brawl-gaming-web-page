import React from "react";
import "./home.scss";
import "./Section1/Section1";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const Home = () => {
  return (
    <div>
      <Section1/>
      <Section2/>   
      <Section3/>
    </div>
  );
};

export default Home;
