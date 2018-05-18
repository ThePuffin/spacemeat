import React, { Component } from "react";
import axios from "axios";
import "./Badge.css";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: []
    };
  }
  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }

  render() {
    const profil = 12;
    let badge = this.state.api[profil];

    return badge !== undefined ? (
      <div className="box">
        <img src={badge.image} className="image_profil" />
      </div>
    ) : (
      <div />
    );
  }
}

export default Badge;
