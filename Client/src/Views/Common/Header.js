import React from 'react';
import { Container, Navbar, Nav, Button, Col } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons'; // Make sure to install react-bootstrap-icons if you haven't
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Col md ={2}>
                <Navbar.Brand href="/">
                    <img
                        alt="Logo"
                        src="/logo.svg" // Place your logo in the public/assets/images folder
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    
                </Navbar.Brand>
                </Col>
                <Col md ={8}>
                  <h1 id="company-name">Company Name</h1>
                </Col>
                <Col md ={2}>
              <Nav className="ms-auto">
                  <Button variant="outline-success">
                      <Cart /> Cart
                  </Button>
              </Nav>
                </Col>
            </Container>
        </Navbar>
    );
};

export default Header;
