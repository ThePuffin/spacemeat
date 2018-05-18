import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col
} from 'reactstrap';
class CardPute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.image} alt="Card image cap"/>
                <CardBody className="card_body">
                    <CardTitle className="prenom">
                        {this
                            .props
                            .name
                            .split(" ")
                            .shift()}
                    </CardTitle>
                    <CardSubtitle>
                        Poids: {this.props.mass}kg, Taille: {this.props.height}m, Magnifiques Yeux{" "} {this.props.eyeColor}
                    </CardSubtitle>
                    <Button color="danger" onClick={this.props.count}>
                        X
                    </Button>
                    <Button color="success">V</Button>
                </CardBody>
            </Card>
        );
    }
}

export default CardPute;