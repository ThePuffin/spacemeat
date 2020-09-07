import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./MatchUltime.css";
import MyCard from "./MyCard";
import axios from "axios";

class MachUltime extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
    const nbAleatoire = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const chewy = 12;
    const profilMatch = nbAleatoire(1, 87);
    if (this.state.api[chewy] !== undefined) {
      console.log(this.state.api[chewy].name);
      return (
        <Container id="pageMatch" className="pageMatch">
          <Row>
            <Col>
              <h1 className="text-center matchTitle pt-4">It's a Match !</h1>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4" xs="6">
              <MyCard
                name={this.state.api[chewy].name}
                homeworld={this.state.api[chewy].homeworld}
                species={this.state.api[chewy].species}
                imageUrl={this.state.api[chewy].image}
              />
            </Col>
            <Col className="mt-4" xs="6">
              <MyCard
                name="Luke Skywalker"
                homeworld="Tattooine"
                cybernetics="Prosthetic right hand"
                imageUrl="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
              />
            </Col>
            <img
              className="eclair"
              src={"http://www.clker.com/cliparts/F/l/Y/n/b/k/lightning.svg"}
=======
    this.state = {};
  }
  render() {
    return (
      <Container id="pageMatch" className="pageMatch">
        <Row>
          <Col>
            <h1 className="text-center matchTitle pt-4">It's a Match !</h1>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4" xs="6">
            <MyCard
              name="Jabba"
              homeworld="Tattooine"
              cybernetics="Prosthetic right hand"
              imageUrl="https://starwarsblog.starwars.com/wp-content/uploads/2016/06/jabba-the-hutt-portrait-tall.jpg"
            />
          </Col>
          <Col className="mt-4" xs="6">
            <MyCard
              name="Luke"
              homeworld="Tattooine"
              cybernetics="Prosthetic right hand"
              imageUrl="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
>>>>>>> 185d7ed13c631d85080cba2961cde30e02e11225
            />
          </Row>
          <Link to="./tunnel" className="tunnel">
            <Button className="ultimate">TUNNEL OF LOVE</Button>
          </Link>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}
export default MachUltime;
