import React from "react";
import "./concept.scss";
import "./concept-components/Grids"
import Grids from "./concept-components/Grids";

const Concept = () => {

  const concepts = [
    {
        left: true,
        header: "About Brawl Gaming",
        text: "Textsssss",
        img: "/images/no_image.svg"
    },
    {
        left: false,
        header: "About Brawl Gaming 2",
        text: "Textsssss 2",
        img: "/images/no_image.svg"
    }
]

  return (
    <section>
      {concepts.map(concept =>(
        <Grids concept={concept} />
      ))}
    </section>
  );
};

export default Concept