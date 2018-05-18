import React, { Component } from "react";
import Waiting from "./BB8.gif";


class Wait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Nous attendons de voir si la personne veut de toi </h3>,
        <img src={Waiting} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Wait;
