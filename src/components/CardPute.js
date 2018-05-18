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
    notifSuccess = () => {
        const message = "Vous avez matché"
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast(message, {autoClose: 3000})
            return this
                .props
                .count()
        }
        return this
            .props
            .count()
    }
    notifError = () => {
        const message = "Vous avez beurké"
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast(message, {autoClose: 3000})
            return this
                .props
                .count()
        }
        return this
            .props
            .count()
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
                    <Button className="lol" color="danger" onClick={this.notifError}>
                        Beurk
                    </Button>
                    <div>
                        <Button color="success" onClick={this.notifSuccess}>Miam</Button>
                        <ToastContainer/></div>

                </CardBody>
            </Card>
        );
    }
}

export default CardPute;