import React from 'react';
import { Container, Navbar, Nav, Button, Col } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons'; 
import './Header.css'
import Image from 'react-bootstrap/Image';

const Header = (props) => {
    function showCart() {
        if (props.showCart === false) {
          props.setShowCart(true);
         
        } else {
          props.setShowCart(false);
         
        }
      }
      return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Col md={2}>
              <Navbar.Brand href="/">
                {/* The public directory is the root in the application */}
                <Image src="/assets/images/logo.png" roundedCircle alt="Logo" width="30" height="30" />
              </Navbar.Brand>
            </Col>
            <Col md={8}>
              <h1 id="company-name">Green Harvest Organics</h1>
            </Col>
            <Col md={2}>
              <Nav className="ms-auto">
                <Button variant="outline-success" onClick={showCart}>
                  <Cart /> Cart
                </Button>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      );
    };

export default Header;
