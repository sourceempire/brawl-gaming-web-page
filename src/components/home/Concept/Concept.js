import React, {useState} from 'react';

import anticheat from '../../../resources/animations/anti-cheat.json';
import ranking from '../../../resources/animations/ranking.json';
import uniqueAccount from '../../../resources/animations/unique-account.json';

import ConceptPart from './ConceptPart/ConceptPart';

import './Concept.scss';

const Concept = () => {

    const [conceptParts] = useState([
        {title: 'Unique Accounts', animation: uniqueAccount, description: 'To register or log in to Brawl Gaming you need to identify yourself.'},
        {title: 'Ranking', animation: ranking, description: 'Because of identification, our ranking system is the most fair out there.'},
        {title: 'Anti Cheat', animation: anticheat, description: 'Our system finds cheaters, but we also need your help to be bulletproof'},
    ]);
    
    return (
        <div className="home-concept">
            <div className="concept-label">
                <p className="concept-label-pre-header">
                    ESPORTS FOR EVERYONE
                </p>
                <p className="concept-label-header">
                    <span>HOW</span> IT'S DONE
                </p>
                <p className="concept-label-text">
                    Enhance your gaming experience with Brawl Gaming by competing on equal terms,
                    no matter <span>Gender</span>, <span>Skill</span> or <span>Game</span>. 
                </p>
            </div>
            {
                conceptParts.map(part => 
                    <ConceptPart key={part.title} part={part}/>    
                )
            }
        </div>
    )
}

export default Concept;