import React from 'react';

import './Shapes.scss';

export const Hexagon = ({fill, active, hinted, content, opacity}) => {
  return (
    <div className={"hexagon-wrapper" + (fill? ' filled': '') + (active? ' active': '') + (hinted? ' hinted': '')}>
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
          {content? content: ''}
        </div>
    </div>
  )
}

export const HexagonalGrid = ({currentStep, hoverStep}) => {

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
                ? <Hexagon 
                    key={i +""+ j}
                    fill="#171715" 
                    active={currentStep === 0} 
                    hinted={hoverStep === 0} 
                    content={<OnboardingStep header="SIGN UP" text={["BECAUSE ", <span key={i +""+ j}>YOU</span>, ' CAN']}/>} 
                    opacity={Math.random() * 0.9}/>
                : i === 1 && j === 2
                ? <Hexagon 
                    key={i +""+ j}
                    fill="#171715" 
                    active={currentStep === 1} 
                    hinted={hoverStep === 1} 
                    content={<OnboardingStep key={"DOWNLOAD"} header="DOWNLOAD" text={['THE ', <span key={i +""+ j}>DESKTOP</span>, ' APP']}/>} 
                    opacity={Math.random() * 0.9}/>
                : i === 1 && j === 4
                ? <Hexagon 
                    key={i +""+ j}
                    fill="#171715" 
                    active={currentStep === 2} 
                    hinted={hoverStep === 2} 
                    content={<OnboardingStep key={"CHOOSE"} header="CHOOSE" text={['YOUR ', <span key={i +""+ j}>FAVORITE</span>, ' GAME']}/>} 
                    opacity={Math.random() * 0.9}/>
                : i === 2 && j === 5
                ? <Hexagon 
                  key={i +""+ j}
                  fill="#171715" 
                  active={currentStep === 3} 
                  hinted={hoverStep === 3} 
                  content={<OnboardingStep key={"COMPETE"} header="COMPETE" text={['WITH ', <span key={i +""+ j}>FAIR</span>, ' CONDITIONS']}/>} 
                  opacity={Math.random() * 0.9}/>
                : <Hexagon key={i +""+ j} opacity={Math.random() * 0.9}/>}

            </div>
            )
          }
        </div>
      )}
    </div>
  )
}

const OnboardingStep = ({header, text, icon, active}) => {
  return (
    <div className="onboarding-step">
 
      <p className="header">{header}</p>
      <p className="text">{text}</p>
    </div>
  )
}