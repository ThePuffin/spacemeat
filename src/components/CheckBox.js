import React, {Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
            rSelected: {}
        };
        this.onRadioBtnClick = this
            .onRadioBtnClick
            .bind(this);
    }
    onRadioBtnClick(rSelected) {
        return Promise
            .resolve(this.setState({rSelected}))
            .then(() => this.props.maj(this.state.rSelected))
    }
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick({gender: "male"})}
                        active={this.state.rSelected === 1}>Male</Button>

                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick({species: "human"})}
                        active={this.state.rSelected === 2}>Human</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick({species: "droid"})}
                        active={this.state.rSelected === 2}>Droid</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick({homeworld: "naboo"})}
                        active={this.state.rSelected === 2}>Naboo</Button>
                    <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick({homeworld: "coruscant"})}
                        active={this.state.rSelected === 2}>Coruscant</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default CheckBox;