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
import "./MyCard.css";
const MyCard = ({ name, homeworld, cybernetics, imageUrl }) => (
  <div>
    <Card>
      <Row>
        <Col>
          <CardImg
            top
            width="100%"
            height="100%"
            src={imageUrl}
            alt="Card image cap"
          />
        </Col>
      </Row>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>From : {homeworld}</CardSubtitle>
        <CardText>{cybernetics}</CardText>
      </CardBody>
    </Card>
  </div>
);

export default MyCard;
