import React from "react";
import "../concept.scss";

const Grids = ({concept}) => {
    const style = concept.left ? "text img" : "img text";
    //style={grid-template-areas: style}
    return (
        <div className="grids">
            <div className="grid">
                <div className="text">
                    <h4>{concept.header}</h4>
                    <p>{concept.text}</p>
                </div>
                <img src={concept.img} alt="img" />
            </div>
        </div>
    );
}
  
export default Grids;