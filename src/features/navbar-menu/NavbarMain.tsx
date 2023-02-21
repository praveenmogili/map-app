import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const MenuModal = (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-left"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Body>Being implemented...</Modal.Body>
    </Modal>
  );

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <button
            className="navbar-menu-toggler me-2"
            type="button"
            onClick={() => setShow(true)}
          >
            <MenuIcon />
          </button>
          <Navbar.Brand href="/">MYTHICS Automation Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-0">
              <NavDropdown
                title={<AccountCircleIcon />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {MenuModal}
    </>
  );
};

NavbarMain.propTypes = {};

export default NavbarMain;
