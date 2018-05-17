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
            cSelected: []
        };
    }
    onCheckboxBtnClick(selected) {
        const index = this
            .state
            .cSelected
            .indexOf(selected);
        if (index < 0) {
            this
                .state
                .cSelected
                .push(selected);
        } else {
            this
                .state
                .cSelected
                .splice(index, 1);
        }
        this.setState({
            cSelected: [...this.state.cSelected]
        });
        this
            .props
            .maj(this.state.cSelected)
    }
    render() {
        return (
            <div>
                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                    <Button
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick(1)}
                        active={this
                        .state
                        .cSelected
                        .includes(1)}>Male</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick(2)}
                        active={this
                        .state
                        .cSelected
                        .includes(2)}>Female</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick(3)}
                        active={this
                        .state
                        .cSelected
                        .includes(3)}>Species</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default CheckBox;