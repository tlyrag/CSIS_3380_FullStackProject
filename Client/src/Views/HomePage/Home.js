import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SponsorCarousel from './Components/SponsorCarousel'
import ProductCard from './Components/CardItems';
import './Home.css';
import { useState,useEffect } from 'react';
import getProductData from '../../Controllers/ApiController' 


const Home = () => {
    const [ProductList, setProductList] = useState();
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
        const fetchProductList= async () => {
            const productList = await getProductData(10);
            setProductList(productList);
            setisLoading(false);
        }
        fetchProductList();
       
        
    }, [ProductList]);

    return ( 
        <div>
            <Row>
                <Col md={2} id="side-bar">SideBar</Col>
                <Col md={10} id="main-content">
                    <Row id="carousel-row">
                        <SponsorCarousel id="sponsor-carousel" />
                    </Row>
                    <Row id="item-list">
                    <ProductCard products={ProductList} loading={isLoading}></ProductCard>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Home;