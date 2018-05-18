import React from "react";
import { Switch, Route } from "react-router-dom";
import Connexion from "./Connexion";
import Home from "./Home";
import MatchUltime from "./MatchUltime";
import Search from "./Search";
import ModalOui from "./ModalOui";
import ModalNon from "./ModalNon";
import Machfinallyultime from "./Machfinallyultime";
import Wait from "./Wait";
import Tunnel from "./Tunnel";

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
      <Route path="/modalOui" component={ModalOui} />
      <Route path="/modalNon" component={ModalNon} />
      <Route path="/machfinallyultime" component={Machfinallyultime} />
      <Route path="/wait" component={Wait} />
      <Route path="/tunnel" component={Tunnel} />
    </Switch>
  </main>
);

export default Main;
