import React, { useEffect, useRef, useState } from 'react';

import lottie from "lottie-web";



import './ConceptPart.scss';

const ConceptPart = ({part}) => {

    const container = useRef(null);
    const animationContainer = useRef(null);

    useEffect(() => {

        let timeout = {};
        let animationShouldPlay = false;

        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: part.animation
        })

        anim.addEventListener('complete', () => {
            if (animationShouldPlay) {
                anim.setDirection(anim.playDirection * -1)
                timeout = setTimeout(() => anim.play(), 1000);
            } else {
                clearTimeout(timeout)
                anim.pause()
            }
        })

        const mouseenterEvent = container.current.addEventListener('mouseenter', () => {
            anim.play()
            animationShouldPlay = true;
        })
        const mouseleaveEvent = container.current.addEventListener('mouseleave', () => {
            animationShouldPlay = false;
        })

        return () => {
            anim.removeEventListener('complete')
            container.current.removeEventListener('mouseenter', mouseenterEvent)
            container.current.removeEventListener('mouseleave', mouseleaveEvent)
        }

    }, [])
 
    return (
        <div className="concept-part" ref={container}>
            <div className="animation-container" ref={animationContainer} />
            <p className="title">
                {part.title}
            </p>
            <p className="description">
                {part.description}
            </p>
        </div>
    )
}

export default ConceptPart;
