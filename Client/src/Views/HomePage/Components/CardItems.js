import { Card, Spinner, Button, Toast } from "react-bootstrap";
import "./CardItems.css";
import { useState } from "react";

function ProductCard(props) {
  const [showToast, setShowToast] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToCart = (product) => {
    props.addProductToCart(product);
    setAddedItem(product);
    setShowToast(true);
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
        <Card style={{ width: "18rem" }} id="card" key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button
              className="add-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart{" "}
            </Button>
            <br />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        className="toast-container"
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
