import React from "react";
import "../concept.scss";

const Grids = ({concept}) => {
    const style = concept.left ? "'text img'" : "'img text'";
    var gridPosStyle = {}
    var id = {}
    if(style === "'text img'"){
        gridPosStyle = {
            gridTemplateColumns:"50% 30%",
            gridTemplateAreas: style 
        }
    }else{
        gridPosStyle = {
            gridTemplateColumns:"30% 50%",
            gridTemplateAreas: style 
        }
    }
    id = concept.id;
    
    return (
        <div id={id}className="grids">
            <div className="grid" style = {gridPosStyle}>
                <div className="text">
                    <h5>{concept.header}</h5>
                    <br/>
                    <p>{concept.text}</p>
                </div>
                <img src={concept.img} alt="img" />
            </div>
        </div>
    );
}
  
export default Grids;