import React from "react";
import { Switch, Route } from "react-router-dom";
import Connexion from "./Connexion";
import Home from "./Home";
import MatchUltime from "./MatchUltime";
import Search from "./Search";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Connexion} />
      <Route path="/home" component={Home} />
      <Route path="/match" component={MatchUltime} />
      <Route path="/search" component={Search} />
    </Switch>
  </main>
);

export default Main;
