import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./MatchUltime.css";
import MyCard from "./MyCard";

export default class MatchUltime extends React.Component {
  constructor(props) {
    super(props);
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
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
