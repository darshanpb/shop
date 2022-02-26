import React from "react";
import { Container as BContainer } from "react-bootstrap";

const Container = ({ fluid=true, classes, children }) => {
  return <BContainer fluid={`${fluid}`} className={classes}>{children}</BContainer>;
};

export default Container;
