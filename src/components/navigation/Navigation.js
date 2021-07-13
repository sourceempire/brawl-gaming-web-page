import React, { useEffect, useRef, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import lottie from 'lottie-web';

import SideNav from './SideNav/SideNav';
import Logo from '../../resources/images/logo/logo';

import hamburgerAnim from '../../resources/animations/hamburger-toggle.json';
import profileAnim from '../../resources/animations/profile-toggle.json';

import './Navigation.scss';




const Navigation = ({ loggedIn, setLoggedIn, history }) => {

  const hamburgerMenu = useRef()
  const profileMenu = useRef()
  const hamburgerAnimation = useRef();
  const profileAnimation = useRef();
  
  const shouldNavigationBeTransparent = useSelector(state => state.app.navigation.transparent)
  
  const [menuOpen, setOpen] = useState(false);
  
  useEffect(() => {
    hamburgerAnimation.current = loadHamburgerAnimation();
    hamburgerAnimation.current.setSpeed(3);

    profileAnimation.current = loadProfileAnimation();
  }, []);
  
  const loadHamburgerAnimation = () => 
    lottie.loadAnimation({
      container: hamburgerMenu.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hamburgerAnim
    });

  const loadProfileAnimation = () => 
    lottie.loadAnimation({
      container: profileMenu.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: profileAnim
    })
  
  
  const toggleSideNavigation = () => {
    if (menuOpen) {
      setOpen(false);
      hamburgerAnimation.current.setDirection(-1);
      hamburgerAnimation.current.play();
      
    } else {
      setOpen(true);
      hamburgerAnimation.current.setDirection(1);
      hamburgerAnimation.current.play();
    }
  }

  const scrollToTop = () => {
    document.body.scrollTo(0, 0);
  };

  return (
    <>
      <div className={'navigation' + (shouldNavigationBeTransparent? ' is-transparent': '')}>
        <NavLink exact to='/' className='logo-link' onClick={() => scrollToTop()}>
          <Logo/>
          <p className="logo-label">BRAWL GAMING</p>
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