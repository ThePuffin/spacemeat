import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
<<<<<<< HEAD

const MyCard = ({ name, homeworld, species, imageUrl }) => (
=======
import "./MyCard.css";
const MyCard = ({name, homeworld, cybernetics, imageUrl}) => (
>>>>>>> 185d7ed13c631d85080cba2961cde30e02e11225
  <div>
    <Card>
      <Row>
        <Col className="jambon">
          <CardImg top width="100%" height="100%" src={imageUrl} alt="Card image cap"/>
        </Col>
      </Row>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>From : {homeworld}</CardSubtitle>
<<<<<<< HEAD
        <CardText>{species}</CardText>
        <Button>Call</Button>
=======
        <CardText>{cybernetics}</CardText>
>>>>>>> 185d7ed13c631d85080cba2961cde30e02e11225
      </CardBody>
    </Card>
  </div>
);

export default MyCard;
