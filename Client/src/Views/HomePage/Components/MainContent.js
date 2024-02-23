import ProductCard from "./CardItems";
const MainContent = (props) => {
    return ( 
        <ProductCard products={props.products} loading={props.loading}></ProductCard>
     );
}
 
export default MainContent;