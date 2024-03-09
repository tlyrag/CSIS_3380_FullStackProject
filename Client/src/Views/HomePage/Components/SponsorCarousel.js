import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './SponsorCarousel.css';
import Image from 'react-bootstrap/Image';
import apiController from '../../../Controllers/ApiController';
import Spinner from 'react-bootstrap/Spinner';

const LoadingCarousel = ()  =>{
  return <Spinner animation="grow" />;
}



const createCarouselItems = (itemArray) => {
  
 
  if(itemArray.length===0) {
    return (
        <Carousel.Item id="carousel-item">
          <Image  id="carousel-img"></Image>
          <Carousel.Caption id="carousel-caption">
            {LoadingCarousel()}
          </Carousel.Caption>
        </Carousel.Item>
      )

  }

  return itemArray.map(item => {

    return (
      <Carousel.Item key={item.id} id="carousel-item" interval={1000}>
          <Image src={item.image}  text="Item 1" alt={item.title} id="carousel-img"></Image>
          <Carousel.Caption id="carousel-caption">
            <h5>{item.title}</h5>
            <h5>$ {item.price}</h5>
            <p>{item.description}</p>
          </Carousel.Caption>
      </Carousel.Item>
    )
  })
}

function ControlledCarousel() {



  const [index, setIndex] = useState(0);
  const [productList, setproductList] = useState([]);


  useEffect(() => {
    const fetchChar = async () => {
      const apiResponse = await apiController.getProductData(3);
      setproductList(apiResponse)
      
    }
    fetchChar();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="sponsor-carousel-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} id="sponsor-carousel">
        {createCarouselItems(productList)}
      </Carousel>
    </div>

  );
}

export default ControlledCarousel;