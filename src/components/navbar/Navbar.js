import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid className="contaniner_navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              exact
              activeClassName="selected-route"
              className="route-link"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="route-link"
              activeClassName="selected-route"
              to="/mint"
            >
              MINT
            </NavLink>
            <NavLink
              className="route-link"
              activeClassName="selected-route"
              to="/story"
            >
              STORY
            </NavLink>
            <NavLink
              activeClassName="selected-route"
              className="route-link"
              to="/whitepaper"
            >
              WHITEPAPER
            </NavLink>
            <NavLink
              activeClassName="selected-route"
              className="route-link"
              to="/marketplace"
            >
              MARKETPLACE
            </NavLink>
            <NavLink
              activeClassName="selected-route"
              className="route-link"
              to="/faq"
            >
              FAQ
            </NavLink>
            <NavLink
              activeClassName="selected-route"
              className="route-link"
              to="/news"
            >
              NEWS
            </NavLink>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <Button className="u-btn btn_mint" variant="primary">
                MINT
              </Button>{" "}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button className="u-btn btn_connect" variant="primary">
                CONNECT WALLET{" "}
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
