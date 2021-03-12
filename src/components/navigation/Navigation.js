import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './Navigation.scss';

import Logo from '../../resources/images/logo/logo';

const Navigation = ({ loggedIn, setLoggedIn, history }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navBgShown = useSelector(state => state.app.navBgShown)

  return (
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
  );
};

export default withRouter(Navigation);