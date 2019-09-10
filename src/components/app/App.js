import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Home from "../home/Home";
import Download from "../download/Download";
import Games from "../games/Games";
import Concept from "../concept/Concept";
import FAQ from "../faq/Faq";
import Signup from "../signup/Signup";
import Footer from "../footer/Footer";
import "./app.scss";
import "../../resources/site.scss";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-147561487-1');
  ReactGA.pageview('/');
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'development') {
  useEffect(initializeReactGA, []); // run only once
  }
  return (
    <HashRouter>
      <div className="app">
        <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/download" component={Download} />
          <Route path="/games" component={Games} />
          <Route path="/concept" component={Concept} />
          <Route path="/faq" component={FAQ} />
          <Route path="/signup" component={Signup} />
          <Redirect from="*" to="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
