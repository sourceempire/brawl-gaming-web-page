import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation";
import Home from "../home";
import Download from "../download";
import Games from "../games";
import Concept from "../concept";
import FAQ from "../faq";
import "./app.scss";
import "../../resources/site.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/download" component={Download} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/concept" component={Concept} />
          <Route exact path="/faq" component={FAQ} />
          <Redirect to="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
