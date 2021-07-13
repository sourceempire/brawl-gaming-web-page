import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as appActions from '../../../store/actions/appActions';

import './Hero.scss';


const SCROLL_TOP_BREAK = 150;

class Hero extends Component {

  documentBody = document.body;

  state = {
    scrollPosition: undefined,
  }

  componentDidMount = () => {
    this.documentBody.addEventListener('scroll', this.addScrollListener);
    this.documentBody.dispatchEvent(new CustomEvent('scroll'));
  }

  componentWillUnmount = () => {
    this.props.setNavigationTransparent(false);
    this.documentBody.removeEventListener('scroll', this.addScrollListener);
  }

  addScrollListener = () => {
    this.scrollOutListener();
    this.scrollInListener();
  }

  setScrollPosition = (scrollPosition) => this.setState({scrollPosition})

  scrollOutListener = () => {
    if (this.props.shouldNavigationBeTransparent) {
      if (this.documentBody.scrollTop > SCROLL_TOP_BREAK) {
        this.props.setNavigationTransparent(false);
      }
    }
  }
  
  scrollInListener = () => {
    if (!this.props.shouldNavigationBeTransparent) {
      if (this.documentBody.scrollTop <= SCROLL_TOP_BREAK) {
        this.props.setNavigationTransparent(true);
      }
    }
  }

  render() {
    return(
      <section className="hero">
        {this.props.children}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    shouldNavigationBeTransparent: state.app.navigation.transparent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNavigationTransparent: (transparent) => {
      dispatch(appActions.setNavigationTransparent(transparent))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);