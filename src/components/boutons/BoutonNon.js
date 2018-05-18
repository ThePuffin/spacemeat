import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class BoutonNon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link to="./search">
        <Button color="success">Miam</Button>
      </Link>
    );
  }
}

export default BoutonNon;
