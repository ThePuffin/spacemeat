import React, { Component } from "react";
import ModalExample from "./ModalExample/ModalExample"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Modalpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <ModalExample buttonLabel="ok"/>;
  }
}

export default Modalpage;
