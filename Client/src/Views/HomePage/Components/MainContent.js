import ProductCard from "./CardItems";
import SearchBar from "./SearchBar"
import Row from 'react-bootstrap/Row';
import ShopCart from "./ShopCart";


import "./MainContent.css";

const MainContent = (props) => {
    return (
        <div>
        <Row id="search-bar-row">
            <SearchBar handleSearchClick={props.handleSearchClick} ></SearchBar>
        </Row>
        {props.notFound ? <Row><h1>Oops, couldnt find any Product</h1></Row>: <></>}
        <Row>
        <ProductCard products={props.products} loading={props.loading} addProductToCart={props.addProductToCart} ></ProductCard>
      
        </Row>
            
        <Row>
        {props.showCart && <ShopCart cartProduct={props.cartProduct} setCartProduct={props.setCartProduct} showCart={props.showCart} setShowCart={props.setShowCart} />}
        </Row>
        
       
            
        </div>

     );
}
 
export default MainContent;