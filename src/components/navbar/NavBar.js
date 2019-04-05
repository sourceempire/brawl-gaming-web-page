import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './NavBar.scss';

class NavBar extends Component {
  render() {
    return(
      <div>
        <Link to='/' >Home</Link>
        <Link to='/concept'>Concept</Link>
      </div>
    )
  }
}

export default NavBar