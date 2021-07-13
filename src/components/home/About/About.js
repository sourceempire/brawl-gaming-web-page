import React from 'react';

import gladiator from '../../../resources/images/home-about/gladiator.png'

import './About.scss';

const About = ({}) => {
    return (
        <div className="home-about">
            <div className="about-label what">
                <p className="about-label-pre-header">
                    WHY YOU SHOULD
                </p>
                <p className="about-label-header">
                    START <span>BRAWLING</span>
                </p>
                <p className="about-info"> 
                    Have you ever felt like you'd rather <span>give up</span> a game and start a 
                    new one when the odds are'nt in your favor? Brawl will give you 
                    something to <span>play for</span>.
                </p>
            </div>
            
            <div className="about-label why">
                <p className="about-label-pre-header">
                    WHAT IS IT THAT
                </p>
                <p className="about-label-header">
                    <span>BT</span> CHOOSE US?
                </p>
                <p className="about-info"> 
                    Brawl Gaming offers a <span>secure</span> and <span>automated</span> way of competing for <span>real money 
                    rewards</span>, where the terms are fair and square.
                </p>
            </div>
            <img className="gladiator" src={gladiator}/>
        </div>
    )
}

export default About;