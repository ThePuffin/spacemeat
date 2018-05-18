import React, {Component} from 'react';
import {
    Card,
    CardImg,

    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
class CardPute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <div className="containerImg"><CardImg top width="100%" src={this.props.image} alt="Card image cap"/></div>
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
                    <Button className="lol" color="danger" onClick={this.props.count}>
                        Beurk
                    </Button>
                    <Button className="lol2" color="success" onClick={this.props.count}>Miam</Button>

                </CardBody>
            </Card>
        );
    }
}

export default CardPute;