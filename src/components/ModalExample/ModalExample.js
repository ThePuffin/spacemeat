import React, { Component } from 'react';
import LogoHeader from './classic.gif'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalExample.css";


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="Head">
            <img src={LogoHeader} className="App-logo" alt="logo" />
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Accepter ce match
            </Button> <Button color="secondary" onClick={this.toggle}>
              Hop hop hop je me suis trompé
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}

export default ModalExample;