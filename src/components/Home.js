import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
// import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Container id="pagePretendants">
        <Row className="no-gutters">
          <Col sm="12">
            <h1 className="logoHome text-center mt-5">Space Meet</h1>
            <h2 className="subtitleHome text-center mt-1 mb-5">
              Fresh meat from the outer space
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
