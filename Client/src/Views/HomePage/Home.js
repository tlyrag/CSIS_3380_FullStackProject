import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SponsorCarousel from './Components/SponsorCarousel'

import './Home.css';
import { useState,useEffect } from 'react';
import apiController from '../../Controllers/ApiController' 
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';

const Home = () => {
    const [ProductList, setProductList] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [CategoryList, setCategoryList] = useState([]);
    const [categoryLoading, setcategoryLoading] = useState(true);
    const [isNotFound, setisNotFound] = useState(false);
  
    useEffect(() => {
        const fetchProductList= async () => {
            const productList = await apiController.getProductData();
            setProductList(productList);
            setisLoading(false);
        }

        const fetchCategoryList = async () => {
            const categoryList = await apiController.getproductCategory();
            setCategoryList(categoryList);
            setcategoryLoading(false);
            
        }

        fetchProductList();
        fetchCategoryList()
       
        
    }, []);


    const searchForProduct =async (productName) => {
         const productList = await apiController.getProductData()
         let searchProductList = productList.filter(product=> {
            return product.title.toLowerCase().includes(productName.toLowerCase());
         })
         
         if(searchProductList.length===0) {
            setisNotFound(true);
            setProductList(productList);
            return;
         }
         setProductList(searchProductList);
         setisNotFound(false);


    }

    const filterProductByCat = async (category) => {
        const filteredProduct = await apiController.getproductByCategory(category)
        console.log(filteredProduct)
        setProductList(filteredProduct)
    }

    return ( 
        <div>
            <Row>
                <Col md={2} id="side-bar">
                    <SideBar categoryList={CategoryList} isLoading={categoryLoading} handleFilterClick = {filterProductByCat}></SideBar>
                </Col>
                <Col md={10} id="main-content">
                    <Row id="carousel-row">
                        <SponsorCarousel id="sponsor-carousel" />
                    </Row>
                    <Row id="item-list">
                    <MainContent products={ProductList} loading={isLoading} handleSearchClick={searchForProduct} notFound={isNotFound}></MainContent>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Home;