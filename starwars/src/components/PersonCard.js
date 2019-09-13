import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";

const PersonCard = props => {
  // const [filmList, setFilmList] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(props.films)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(e => {
  //       console.log("Failed due to", e);
  //     });
  // }, []);
  // return (
  //   <div className="Card">
  //     <h2>{props.name}</h2>
  //     <p>{props.species[0]}</p>
  //     <p>{props.weight}</p>
  //   </div>
  // );
  return (
    <Row>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>Born {props.birth}</CardSubtitle>
            <CardText>Mass (kg): {props.mass}</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PersonCard;
