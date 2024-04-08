import React, { useState } from 'react';
import { Card, Spinner, Button, Toast } from 'react-bootstrap';
import "./CardItems.css";
import ProductDetailsModal from './productDetailsModal';
import apiController from '../../../Controllers/ApiController';

function ProductCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToCart = (product) => {
    props.addProductToCart(product);
    setAddedItem(product);
    setShowToast(true);

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  if (props.loading === true) {
    return (
      <Card style={{ width: "18rem" }} id="card-item">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <Spinner animation="grow" />
          </Card.Title>
          <Card.Text>
            <Spinner animation="grow" />
          </Card.Text>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      {props.products.map((product) => (
        <Card style={{ width: "18rem" }} id="card" key={product.id}  >
          <Card.Img
            id="cardImage"
            variant="top"
            src={product.image}
            onClick={() => handleShowDetails(product)}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>CAD$ ${product.price}</Card.Text>
            <Button
              className="add-cart"
              onClick={() => {
                apiController.addtocart(product.id)
                handleAddToCart(product)}
                }
            >
              Add to Cart
            </Button>
            <br />
          </Card.Body>
        </Card>
      ))}
      <ProductDetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
        addToCart={handleAddToCart} // Pass addToCart function
      />
      <Toast id="cart-toast"
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        className="toast-container show"
      >
        <Toast.Header>
          <strong className="me-auto">Shopping Cart</strong>
        </Toast.Header>
        <Toast.Body>
          {addedItem && (
            <>
              <h4>Item added to cart:</h4>
              <img
                src={addedItem.image}
                alt={addedItem.title}
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              {addedItem.title}
            </>
          )}
        </Toast.Body>
      </Toast>
    </>
  );
}

export default ProductCard;
