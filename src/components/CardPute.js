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
import Moment from 'react-moment';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CardPute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    notifError = () => {
        const message = "Vous avez beurké"
        this.toastId = toast(message, {autoClose: 3000})
        return this.props.count
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
                    <Button color="danger" onClick={this.notifError()}>
                        Beurk
                    </Button>
                    <Button color="success" onClick={this.props.count}>Miam</Button>
                    <ToastContainer autoClose={8000}/>
                </CardBody>
            </Card>
        );
    }
}

export default CardPute;