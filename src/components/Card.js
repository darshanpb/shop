import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemCard = (props) => {
  const { id, src, title, subTitle, description } = props;
  return (
      <Card id={id} style={{ width: "18rem" }} className='m-auto'>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
  );
};

export default ItemCard;
