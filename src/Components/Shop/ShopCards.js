import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsShop } from "react-icons/bs";
import "./shop.css"
import { Link } from "react-router-dom";

function ShopCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="img" variant="none" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ marginTop: '0'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: '0.9rem' }}>
          {props.description}
        </Card.Text>
        <Card.Text>
          Price: {props.amount}
        </Card.Text>
        <Button variant="primary" to="/cart" target="_blank">
          <BsShop /> &nbsp;
          {"Buy"}
        </Button>         
      </Card.Body>
    </Card>
  );
}
export default ShopCards;
