import React from "react";
import {
  Row,
  Button,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "./MyCard.css"


const MyCard = ({ name, homeworld, species, imageUrl }) => (
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
        <CardText>{species}</CardText>
        <Button>Call</Button>
      </CardBody>
    </Card>
  </div>
);

export default MyCard;
