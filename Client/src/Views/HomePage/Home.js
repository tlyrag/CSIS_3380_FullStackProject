
import SponsorCarousel from './Components/SponsorCarousel'
import { Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import { useState,useEffect } from 'react';
import apiController from '../../Controllers/ApiController' 
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';

const Home = (props) => {
    const [ProductList, setProductList] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [CategoryList, setCategoryList] = useState([]);
    const [categoryLoading, setcategoryLoading] = useState(true);
    const [isNotFound, setisNotFound] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);

  
    useEffect(() => {
        const fetchProductList= async () => {
            const productList = await apiController.getProductData(20);
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
        
         const productList = await apiController.getProductData(20)
         
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
        setProductList(filteredProduct)
    }
    const addProductCart = (selectedProduct) => {
       

        const selectedProducts = cartProduct.find(item => item.product.id === selectedProduct.id);
    
        if (selectedProducts) {
            setCartProduct(prevCartProduct => {
                const updatedCart = prevCartProduct.map(item =>
                    item.product.id === selectedProduct.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return updatedCart;
            });
        } else {
            setCartProduct(prevCartProduct => [
                ...prevCartProduct,
                { product: selectedProduct, quantity: 1 }
            ]);
        }
    
       
    };
    

    return ( 
        <div>
            <Row>
                <Col md={3} id="side-bar-col">
                    <Row id="side-bar-row">
                    <SideBar  categoryList={CategoryList} isLoading={categoryLoading} handleFilterClick = {filterProductByCat}></SideBar>
                    </Row>
                    
                </Col>
                <Col md={9} id="main-content">
                    <Row id="carousel-row">
                        <SponsorCarousel id="sponsor-carousel" />
                    </Row>
                    <Row id="item-list">
                    <MainContent products={ProductList} loading={isLoading} handleSearchClick={searchForProduct} notFound={isNotFound} 
                    addProductToCart={addProductCart} cartProduct={cartProduct} setCartProduct={setCartProduct} showCart={props.showCart} setShowCart={props.setShowCart} />
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Home;