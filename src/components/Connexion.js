import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "./Connexion.css";
import { Link } from "react-router-dom";
import InputLogin from "./InputLogin";

export default class Connexion extends React.Component {
  render() {
    return (
      <Container id="pageConnexion" className="pageBody">
        <Row className="no-gutters">
          <Col sm="12">
            <h1 className="logoHome text-center mt-5">Space Meet</h1>
            <h2 className="subtitleHome text-center mt-1 mb-5">
              Fresh meat from the outer space
            </h2>
          </Col>
          <Col className="mt-2 mr-3 ml-3">
            <InputLogin />
          </Col>
        </Row>
        {/* <Row className="no-gutters">
          <Col sm="12">
            <h1 className="logoHome text-center mt-5">Space Meet</h1>
            <h2 className="subtitleHome text-center mt-1 mb-5">
              Fresh meat from the outer space
            </h2>
          </Col>
          <Col className="mt-2 mr-3 ml-3">
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="inputEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  required="required"
                  placeholder="etoile@noirec.cool"
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="inputPassword" className="mr-sm-2">
                  Mot de passe
                </Label>
                <Input
                  type="password"
                  required="required"
                  name="password"
                  id="inputPassword"
                  placeholder="❤❤❤❤"
                />
              </FormGroup>
              <p className="text-right">
                <Link
                  className="btn loginColor mt-2 text-light ml-auto"
                  to="./home/12"
                >
                  Connexion
                </Link>
              </p>
            </Form>
          </Col>
        </Row> */}
      </Container>
    );
  }
}
