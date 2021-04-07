import React from 'react';
import { createPortal } from 'react-dom';

import './SideNav.scss';

const allowedOrientations = ['right', 'left']; 

const SideNav = ({orientation, children, open, onClose}) => {
    //orientation prop validation
    if (!allowedOrientations.includes(orientation)) throw new Error(`'orientation' prop not allowed: ${orientation}`);
    if (orientation === undefined)                  throw new Error(`'orientation' prop needs to be provided: ${orientation}`);
    

    return createPortal(
        <div className={'side-nav-wrapper' + (orientation? ' from-'+orientation: '') + (open? ' open': '')}>
            <div className='nav-background' onClick={onClose}/>
            <div className={'side-nav'+ (orientation? ' from-'+orientation: '')}>

            </div>
        </div>
    , document.querySelector('#menu-root'))
}

export default SideNav;