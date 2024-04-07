import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProductDetailsModal.css'; 

const ProductDetailsModal = ({ show, onHide, product, addToCart }) => {
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
    onHide(); 
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.title} style={{ width: '100%' }} />
        <p className="description">{product.description}</p>
        <p>CAD$ ${product.price}</p>
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;