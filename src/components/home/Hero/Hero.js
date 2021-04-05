import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'

import * as appActions from '../../../store/actions/appActions';

import './Hero.scss';

class Hero extends Component {

  section = createRef()
  scrollRef = document.body;

  state = {
    scrollPosition: undefined,
  }

  componentDidMount = () => {
    this.scrollRef.addEventListener('scroll', this.addScrollListener);
    this.scrollRef.dispatchEvent(new CustomEvent('scroll'));

  }

  componentWillUnmount = () => {
    this.props.setNavBgShown();
    this.scrollRef.removeEventListener('scroll', this.addScrollListener);
  }

  addScrollListener = () => {
    this.scrollOutListener();
    this.scrollInListener();
    this.scrollIsTopListener();
  }

  setScrollPosition = (scrollPosition) => this.setState({scrollPosition})

  scrollIsTopListener = () => {
    if (this.scrollRef.scrollTop === 0) {
      //TODO, Create something on scroll top after hero design is completed.
    }
  } 

  scrollOutListener = () => {
    if (!this.props.navBgShown) {
      if (this.scrollRef.scrollTop + 100 > this.section.clientHeight) {
        this.props.setNavBgShown();
      }
    }
  }
  
  scrollInListener = () => {
    if (this.props.navBgShown) {
      if (this.scrollRef.scrollTop + 100 <= this.section.clientHeight) {
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