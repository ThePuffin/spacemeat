import React, {Component} from 'react';
import axios from 'axios';
import Loader from "./Loader"
import Liste from "./Liste"
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
class DisplayListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: []
        };
        this.liste = this
            .liste
            .bind(this)
    }
    componentWillMount() {
        axios
            .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
            .then(res => {
                const api = res.data;
                this.setState({api})
            })
    }

    liste() {
        if (this.state.api.length !== 0) {
            const liste = this.state.api;
            return liste
        }
    }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Liste/>
                </Row>

            </Container>

        );
    }
}

export default DisplayListe;