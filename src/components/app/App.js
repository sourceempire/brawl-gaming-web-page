import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Home from "../home/Home";
import Download from "../download/Download";
import Games from "../games/Games";
import Concept from "../concept/Concept";
import FAQ from "../faq/Faq";
import "./app.scss";
import "../../resources/site.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/download" component={Download} />
          <Route path="/games" component={Games} />
          <Route path="/concept" component={Concept} />
          <Route path="/faq" component={FAQ} />
          <Redirect from="*" to="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
