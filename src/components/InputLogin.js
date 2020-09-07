import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Link from "react-router-dom/Link";

class InputLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="inputEmail" className="mr-sm-2">
            Identifiant :
          </Label>
          <Input
            className="id"
            type="text"
            name="id"
            id="inputEmail"
            required="required"
            value={this.state.value}
            onChange={this.handleChange}
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
        <Link to={`/home/${this.state.value}`}>Connexion</Link>
        {/* <h1>{this.state.value}</h1> */}
      </form>
    );
  }
}

export default InputLogin;
