import React, { Component, BrowserRouter, Route } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import Badge from "./Badge";
import Fond from "./GIF/old.jpg";
import BoutonOui from "./boutons/BoutonOui";
import BoutonNon from "./boutons/BoutonNon";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      pretendants: [],
      compteur: 0,
      matching: 0
    };
    this.augmenter = this.augmenter.bind(this);
    this.randomMatch = this.randomMatch.bind(this);
  }
  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }

  componentDidMount() {
    const generePretendants = () => {
      let tabDoublons = [];
      console.log(pretendants);
      let idaleatoire = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      for (let i = 0; i < 5; i++) {
        let id = idaleatoire(1, 87);
        tabDoublons.push(id);
      }
      let pretendants = [...new Set([...tabDoublons])];
      this.setState({ pretendants });
    };
    generePretendants();
  }

  randomMatch() {
    const matching = Math.round(Math.random());
    this.setState({ matching });
  }

  augmenter(event) {
    this.randomMatch();
    let compteur = this.state.compteur + 1;
    this.setState({ compteur });
  }

  miam(event) {
    return this.state.matching === 1 ? <BoutonOui /> : <BoutonNon />;
  }

  render() {
    const page1 = this.state.api[this.state.pretendants[this.state.compteur]];

    return page1 !== undefined ? (
      <div className="cardBox">
        <Badge />
        <div className="identifiant">Yaa-yaah CHEWIE!</div>
        <h1>Here is your local meat</h1>
        <Card>
          <div className="cardIMG">
            <CardImg top width="100%" src={page1.image} alt="Card image cap" />
          </div>

          <CardBody className="card_body">
            <CardTitle className="prenom">
              {page1.name.split(" ").shift()}
            </CardTitle>
            <CardSubtitle className="detail">
              Weight: {page1.mass}kg, Height: {page1.height}m, Wonderful{" "}
              {page1.eyeColor} eyes
            </CardSubtitle>
            <Button color="danger" onClick={e => this.augmenter(e)}>
              Beurk
            </Button>
            {this.miam()}
          </CardBody>
        </Card>
      </div>
    ) : (
      <div>
        <img src={Fond} className="imgg" alt="logo" />
        <Link to="./Machfinallyultime">
          <Button className="ultimate">
            Pas Terrible? Tente l'Ultimate Matching..
          </Button>
        </Link>
      </div>
    );
  }
}

export default Home;
