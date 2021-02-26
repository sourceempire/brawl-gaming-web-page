import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
//import Login from '../login/Login';
import './Navigation.scss';

import filledlogo from '../../resources/images/logo/filled.svg';
import outlinewhite from '../../resources/images/logo/outline-white.svg';

const Navigation = ({ loggedIn, setLoggedIn, history }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navBgShown = useSelector(state => state.app.navBgShown)

  return (
    <div className='navigation'>
      <NavLink exact to='/' className='logo'>
        <img src={outlinewhite} className="logo-outline" alt='logo'/>
      </NavLink>
      <div className='menu'>
        <NavLink className='nav-text' to='/concept' onClick={() => scrollToTop()}>
          Concept
        </NavLink>
        <NavLink className='nav-text' to='/faq' onClick={() => scrollToTop()}>
          FAQ
        </NavLink>
      </div>
      <div className={'navigation nav-bg' + (navBgShown? ' shown': '')}>
        <div className='logo'>
          <img src={filledlogo} alt='logo'/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navigation);


/* <NavLink className='nav-text' exact to='/' onClick={() => scrollToTop()}>
          Home
        </NavLink> */
        /* <NavLink className='nav-text' to='/download' onClick={() => scrollToTop()}>
          Downloads
        </NavLink> */

        /* <NavLink className='nav-text' to='/games' onClick={() => scrollToTop()}>
          Games
        </NavLink> */

        /* <div className='not-mobile'>
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div> */