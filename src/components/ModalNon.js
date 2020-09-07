import React, { Component } from "react";
import ModalDefaite from "./ModalExample/ModalDefaite";
import Fond from "./ModalExample/fond.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Modalpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={Fond} className="imgg" alt="logo" />,
        <ModalDefaite buttonLabel="Nope" />
      </div>
    );
  }
}

export default Modalpage;
