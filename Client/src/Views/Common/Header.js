import React from 'react';
import { Container, Navbar, Nav, Button, Col } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons'; // Make sure to install react-bootstrap-icons if you haven't
import './Header.css'
import Image from 'react-bootstrap/Image';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Col md ={2}>
                <Navbar.Brand href="/">
                <Image src="../../../assets/images.logo.png" roundedCircle
                    alt="Logo" 
                    width="30"
                    height="30"
                />
                    
                </Navbar.Brand>
                </Col>
                <Col md ={8}>
                  <h1 id="company-name">Green Harverst Organics</h1>
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
