import React, { Component } from "react";
import LogoHeader from "./classic.gif";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalExample.css";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      match: 1,
      name: "Anakin"
    };

    this.toggle = this.toggle.bind(this);
    this.random = this.random.bind(this);
  }
  random() {
    const matched = Math.random();
    console.log(matched);
    this.setState({ modal: matched });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={function() {
            this.random();
            this.toggle();
          }}
        >
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} className="Head">
            <img src={LogoHeader} className="App-logo" alt="logo" />
          </ModalHeader>
          <ModalBody>{this.state.name}</ModalBody>
          <ModalFooter>
            <Button color="primary" href="/home" onClick={this.toggle}>
              Accepter ce match
            </Button>{" "}
            <Button color="secondary" href="/search" onClick={this.toggle}>
              Hop hop hop je me suis trompé
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
