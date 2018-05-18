import React, {Component} from 'react';
import axios from 'axios';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col
} from 'reactstrap';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
            rSelected: []
        };
        this.onRadioBtnClick = this
            .onRadioBtnClick
            .bind(this);
    }
    onRadioBtnClick(rSelected) {
        const papa = Promise
            .resolve(this.setState({rSelected}))
            .then(() => this.props.maj(this.state.rSelected))
    }
    render() {
        return (
            <div>
                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick(1)}
                        active={this.state.rSelected === 1}>Male</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick(2)}
                        active={this.state.rSelected === 2}>Female</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default CheckBox;