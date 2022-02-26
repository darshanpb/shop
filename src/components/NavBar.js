import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link to="/">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link to="/cart">Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
