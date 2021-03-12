import React from 'react';

import gladiator from '../../../resources/images/home-about/gladiator.png'

import './About.scss';

const About = ({}) => {
    return (
        <div className="home-about">
            <div className="about-label what">
                <p className="about-label-pre-header">
                    THAT'S GOOD AND ALL, BUT
                </p>
                <p className="about-label-header">
                    <span>WHAT</span> IS IT, REALLY?
                </p>
            </div>

            <div className="about-label why">
                <p className="about-label-pre-header">
                    THAT'S GOOD AND ALL, BUT
                </p>
                <p className="about-label-header">
                    <span>WHY</span> CHOOSE US?
                </p>
            </div>
            
        </div>
    )
}

export default About;