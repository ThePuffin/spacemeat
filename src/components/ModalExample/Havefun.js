import React, { Component } from "react";
import oups from "./oups.gif";
import leia from "./leia.gif";
import wink from "./wink.gif";
import love from "./love.gif";
import "./Havefun.css";

class Havefun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
        <img src={wink} className="gify" alt="logo" />
        <img src={leia} className="gify" alt="logo" />
        <img src={love} className="gify" alt="logo" />
        <img src={oups} className="gify" alt="logo" />
      </div>;
  }
}

export default Havefun;
