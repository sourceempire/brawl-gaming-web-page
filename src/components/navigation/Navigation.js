import React, { useEffect, useRef, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import lottie from 'lottie-web';

import SideNav from './SideNav/SideNav';
import Logo from '../../resources/images/logo/logo';

import hamburgerAnim from '../../resources/animations/hamburger-toggle.json';

import './Navigation.scss';




const Navigation = ({ loggedIn, setLoggedIn, history }) => {

  const hamburgerMenu = useRef()
  const profileMenu = useRef()
  const animation = useRef();
  
  const navBgShown = useSelector(state => state.app.navBgShown)
  
  const [menuOpen, setOpen] = useState(false);
  
  useEffect(() => {
    animation.current = loadAnimation();
    animation.current.setSpeed(3);
  }, []);
  
  const loadAnimation = () => {
    return animation.current = lottie.loadAnimation({
      container: hamburgerMenu.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hamburgerAnim
    });
  }
  
  

  const toggleSideNavigation = () => {
   
    if (menuOpen) {
      setOpen(false);
      animation.current.setDirection(-1);
      animation.current.play();
      
    } else {
      setOpen(true);
      animation.current.setDirection(1);
      animation.current.play();
    }
  }

  const scrollToTop = () => {
    document.body.scrollTo(0, 0);
  };

  return (
    <>
      <div className={'navigation' + (navBgShown? ' not-top': '')}>
        <NavLink exact to='/' className='logo-link' onClick={() => scrollToTop()}>
          <Logo filled={navBgShown}/>
        </NavLink>
        <div className='menu'>
          <NavLink className='nav-text' to='/concept' onClick={() => scrollToTop()}>
            Concept
          </NavLink>
          <NavLink className='nav-text' to='/faq' onClick={() => scrollToTop()}>
            FAQ
          </NavLink>
        </div>
      </div>
      
      <div className={'navigation-mobile'}>
        <div 
          ref={hamburgerMenu} 
          className='menu-aside'
          onClick={toggleSideNavigation}
        />

        <NavLink exact to='/' className='logo-link' onClick={() => scrollToTop()}>
          <p className="product-name">
            BRAWL
          </p>
          <Logo/>
          <p className="product-name">
            GAMING
          </p>
        </NavLink>
        <div ref={profileMenu} className='menu-aside'>
          <SideNav 
            orientation="left" 
            open={menuOpen}
            onClose={toggleSideNavigation}
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(Navigation);