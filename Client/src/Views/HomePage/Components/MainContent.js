import ProductCard from "./CardItems";
import SearchBar from "./SearchBar"
import Row from 'react-bootstrap/Row';
const MainContent = (props) => {
    return (
        <div>
        <Row>
            <SearchBar handleSearchClick={props.handleSearchClick}></SearchBar>
        </Row>
        {props.notFound ? <Row><h1>Oops, couldnt find any Product</h1></Row>: <></>}
        <Row>
        <ProductCard products={props.products} loading={props.loading}></ProductCard>
        </Row>
            
            
        </div>

     );
}
 
export default MainContent;