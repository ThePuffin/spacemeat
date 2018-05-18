import React, {Component} from 'react';
import axios from 'axios';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

class Liste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: []
        };
    }
    componentWillMount() {
        axios
            .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
            .then(res => {
                const api = res.data;
                this.setState({api})
            })
    }

    render() {
        return (this.state.api.length > 0 && this.state.api.map(elt => <Col sm="3">
            <Card key={elt.id}>
                <CardImg src={elt.image}/>
                <CardText>
                    <Row>
                        <Col sm="6">{elt.name}
                        </Col>
                        <Row>
                            <Col sm="6"></Col>
                        </Row>
                    </Row>
                </CardText>
            </Card>
        </Col>))
    }
}
export default Liste;