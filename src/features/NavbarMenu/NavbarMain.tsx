import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavbarMain = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">MYTHICS Automation Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-0">
            <NavDropdown title={<AccountCircleIcon />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarMain.propTypes = {};

export default NavbarMain;
