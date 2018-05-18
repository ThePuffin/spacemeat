import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const MyCard = ({ name, homeworld, species, imageUrl }) => (
  <div>
    <Card>
      <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
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
