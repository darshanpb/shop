import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import fallback from '../assets/fallback.svg'
const ItemCard = (props) => {
  const {
    id,
    src,
    title,
    subTitle,
    description,
    price,
    onClick,
    handleQuantityChange,
    inCart = false,
  } = props;

  return (
    <Card
      id={id}
      style={{ width: "18rem", height: "fit-content" }}
      className="border-1 rounded-2"
    >
      <Card.Img
        className="border rounded-3 pt-1"
        src={src}
        onError={(e) => (e.target.src = fallback)}
        alt={"Item Logo"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Container fluid={true} className="d-flex flex-row align-items-center">
          <Row
            className="d-flex flex-row align-items-center"
            style={{ height: "4rem" }}
          >
            <div className=" h5">
              <span className="price-new">${price}</span>
            </div>{" "}
            <Col className="d-flex flex-column justify-content-end">
              <Button
                variant="primary"
                onClick={(event, id) => {
                  onClick && onClick(event, id);
                }}
                style={{ width: "10rem" }}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
