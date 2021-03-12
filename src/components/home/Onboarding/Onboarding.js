import React, { useState, useEffect } from 'react';


import { HexagonalGrid } from '../../shapes/Shapes';
import onboardingTop from '../../../resources/images/home-onboarding/home-onboarding-top.svg'
import onboardingBottom from '../../../resources/images/home-onboarding/home-onboarding-bottom.svg'

import './Onboarding.scss';


const Onboarding = () => {

  let timeout = {}

  const [elements] = useState({
    bgs: ['register-background', 'download-background', 'choose-background', 'play-background'],
    steps: []
  })
  const [currentStep, setCurrentStep] = useState(0);
  const [hoverStep, setHoverStep] = useState(null);
  
  useEffect(() => {
    clearTimeout(timeout) //If step is updated by user

    timeout = setTimeout(() => {
      setCurrentStep(currentStep => (currentStep + 1) % 4)
    }, 3500)
    return () => {
      clearTimeout(timeout)
    }
  }, [currentStep])

  return (
    <React.Fragment>
      
      <div className="onboarding-header">
        <p className="pre-label">NOW, LET'S GET STARTED WITH</p> 
        <p className="label">FOUR <span>SIMPLE</span> STEPS</p>
      </div>
      
      <div className="home-onboarding">

        <HexagonalGrid currentStep={currentStep} hoverStep={hoverStep}/>
        
        {elements.bgs.map((bgClass, index) => 
          <div className={'onboarding-background ' + bgClass + (currentStep === index? ' active': '')  }/>  
        )}

        <img className="angle angle-top" src={onboardingTop}/>
        <img className="angle angle-bottom" src={onboardingBottom}/>
        
        <div className="step-choice">
          {elements.bgs.map((_, index) =>
            <div 
              className={"step" + (currentStep === index? ' active': '')} 
              onClick={() => setCurrentStep(index)}
              onMouseEnter={() => setHoverStep(index)}
              onMouseLeave={() => setHoverStep(undefined)}/>
          )}
        </div>

      </div>
    </React.Fragment>
    
  )
}

export default Onboarding;