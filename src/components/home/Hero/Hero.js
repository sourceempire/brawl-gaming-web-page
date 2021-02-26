import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'

import * as appActions from '../../../store/actions/appActions';

import './Hero.scss';

class Hero extends Component {

  section = createRef()

  state = {
    scrollPosition: undefined,
  }

  componentDidMount = () => {
    
    window.addEventListener("scroll", this.addScrollListener);
    window.dispatchEvent(new CustomEvent('scroll'));

  }

  componentWillUnmount = () => {
    this.props.setNavBgShown();
    window.removeEventListener('scroll', this.addScrollListener);
  }

  addScrollListener = () => {
    this.scrollOutListener();
    this.scrollInListener();
    this.scrollIsTopListener();
  }

  setScrollPosition = (scrollPosition) => this.setState({scrollPosition})

  scrollIsTopListener = () => {
    if (window.scrollY === 0) {
      //TODO, Create something on scroll top after hero design is completed.
    }
  } 

  scrollOutListener = () => {
    if (!this.props.navBgShown) {
      if (window.scrollY + 100 > this.section.clientHeight) {
        this.props.setNavBgShown();
      }
    }
  }
  
  scrollInListener = () => {
    if (this.props.navBgShown) {
      if (window.scrollY + 100 <= this.section.clientHeight) {
        this.props.setNavBgHidden();
      }
    }
  }

  render() {
    return(
      <section ref={node => this.section = node} className="hero">
        {this.props.children}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navBgShown: state.app.navBgShown,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNavBgShown: () => dispatch(appActions.setNavBgVisibility(true)),
    setNavBgHidden: () => dispatch(appActions.setNavBgVisibility(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);