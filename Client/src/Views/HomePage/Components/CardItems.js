import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './CardItems.css'

function ProductCard(props) {

 
    
    if(props.loading===true) {
        return (
            <Card style={{ width: '18rem' }} id="card-item">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title><Spinner animation="grow" /></Card.Title>
                <Card.Text>
                <Spinner animation="grow" />
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               
              </Card.Body>
            </Card>

        )
    }

    return props.products.map(product => {
        return (
            <Card style={{ width: '18rem' }}  id="card"  key={product.id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                 {product.description}
                </Card.Text>
                <Card.Text>
                 {product.price}
                </Card.Text>
               
                <Button variant="primary">Go somewhere</Button>
                <button onClick={() => props.addProductToCart(product)}>
                  Add to Cart </button>
              </Card.Body>
            </Card>
          );
    })
   
}

export default ProductCard;