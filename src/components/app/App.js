import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Home from "../home/Home";
import Download from "../download/Download";
import Games from "../games/Games";
import Concept from "../concept/Concept";
import FAQ from "../faq/Faq";
import Signup from "../signup/Signup";
import Legal from "../legal/Legal";
import Privacy from "../privacy/Privacy";
import Footer from "../footer/Footer";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import PasswordReset from "../passwordreset/PasswordReset";
import "./App.scss";
import "../../resources/styles/site.scss";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-147561487-1');
  ReactGA.pageview('/');
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      initializeReactGA()
    }
  }, []);
  
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
          <Route path="/legal" component={Legal} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/passwordreset" component={PasswordReset} />
          <Redirect from="*" to="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
