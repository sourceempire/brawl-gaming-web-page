import React from 'react';

import './Shapes.scss';

export const Hexagon = ({fill, active, content, opacity}) => {
  return (
    <div className={"hexagon-wrapper" + (fill? ' filled': '') + (active? ' active': '')}>
      
      <svg className="hexagon-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.77 341.88">
        <g>
          <g>
            <polygon 
              className="hexagon"
              style={active?{fill}: opacity?{opacity}: {}} 
              points="295.5 1 99.27 1 1.16 170.94 99.27 340.88 295.5 340.88 393.62 170.94 295.5 1"/>
          </g>
        </g>
      </svg>
      <div className="hexagon-content">
        <p>{content? content: ''}</p>
      </div>
    </div>
    
  )
}

export const HexagonalGrid = ({currentStep}) => {

  const rows = [...Array(8).fill().map(() => [...Array(8).fill().map(() => "")])]

  return (
    <div className="hex-grid">
      {rows.map((columns, i) => 
        <div className="hex-grid-row" key={i}>
          {
            columns.map((_, j) => 
            <div className="hex-grid-item" key={j}>
              {
                i === 1 && j === 1 
                ? <Hexagon fill="#005756" active={currentStep === 0} content="Sign up" opacity={Math.random() * 0.9}/>
                : i === 1 && j === 2
                ? <Hexagon fill="#49346f" active={currentStep === 1} content="Download" opacity={Math.random() * 0.9}/>
                : i === 1 && j === 4
                ? <Hexagon fill="#A08800" active={currentStep === 2} content="Choose" opacity={Math.random() * 0.9}/>
                : i === 2 && j === 5
                ? <Hexagon fill="#457C1E" active={currentStep === 3} content="Compete" opacity={Math.random() * 0.9}/>
                : <Hexagon opacity={Math.random() * 0.9}/>}

            </div>
            )
          }
        </div>
      )}
    </div>
  )
}