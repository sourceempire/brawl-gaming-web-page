import React, { useState, useEffect } from 'react';


import { HexagonalGrid } from '../../shapes/Shapes';
import conceptTop from '../../../resources/images/home-concept/concept-home-top.svg'
import conceptBottom from '../../../resources/images/home-concept/concept-home-bottom.svg'

import './Concept.scss';


const Concept = () => {

  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    console.log(33)
    const interval = setInterval(() => {
      setCurrentStep(currentStep => (currentStep + 1) % 4)
    }, 6000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="home-concept">
      <HexagonalGrid currentStep={currentStep}/>
      <div className={"concept-background register-background" + (currentStep === 0? ' active': '')}/>
      <div className={"concept-background download-background"  + (currentStep === 1? ' active': '')}/>
      <div className={"concept-background choose-background"  + (currentStep === 2? ' active': '')}/>
      <div className={"concept-background play-background"  + (currentStep === 3? ' active': '')}/>
      <img className="angle angle-top" src={conceptTop}/>
      <img className="angle angle-bottom" src={conceptBottom}/>
    </div>
  )
}

export default Concept;