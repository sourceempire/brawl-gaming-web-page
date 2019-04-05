import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Concept from '../concept/Concept';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/concept' component={Concept} />
        </Switch>
      </div>
    );
  }
}

export default App;
