import React, { Component } from "react";
import axios from "axios";

class MatchUltime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      random: 0
    };
    this.name = this.name.bind(this);
    this.image = this.image.bind(this);
  }

  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }

  RandomMatch() {
    const min = 0;
    const max = this.state.api.length;
    const random = min + Math.ceil(Math.random() * (max - min));
    const match = this.state.api[random];
    return match.image;
  }

  name() {
    if (this.state.api.length === 0) {
      console.log("lol");
    } else {
      const bossk = this.state.api.find(elt => elt.name === "Bossk");
      return bossk.name;
    }
  }

  image() {
    if (this.state.api.length === 0) {
      console.log("lol");
    } else {
      const Chewbacca = this.state.api.find(elt => elt.name === "Chewbacca");
      return Chewbacca.image;
    }
  }
  render() {
    return (
      <div>
        <h1>Match Ultime</h1>
        <img src={this.image()} />
        <p>{this.name()}</p>
        <img src={this.RandomMatch()} />
        <p>{this.RandomMatch()}</p>
      </div>
    );
  }
}

export default MatchUltime;
