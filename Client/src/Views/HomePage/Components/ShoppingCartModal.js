import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShoppingCartModal = ({ show, onHide, cartProduct, setCartProduct }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display cart items here */}
        {cartProduct.map((item, index) => (
          <div key={index}>
            <p>{item.product.title} - Quantity: {item.quantity}</p>
            {/* Add any other details you want to display */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCartModal;