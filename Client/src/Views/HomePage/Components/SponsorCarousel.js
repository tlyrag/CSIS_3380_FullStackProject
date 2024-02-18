import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './SponsorCarousel.css';
import Image from 'react-bootstrap/Image';
import getCharacterData from '../../../Controllers/ApiController';

const createCarouselItems = (itemArray) => {
  
  if(itemArray.length===0) {
    return <h1>Loading Item</h1>
  }


  return itemArray.map(item => {
    console.log(item)
    return (
      <Carousel.Item key={item.id} id="carousel-item">
          <Image src={item.image}  text="Item 1" alt={item.title} id="carousel-img"></Image>
          <Carousel.Caption id="carousel-caption">
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
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
      const apiResponse = await getCharacterData();
      setproductList(apiResponse)
    }
    fetchChar();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="sponsor-carousel">
      {createCarouselItems(productList)}
    </Carousel>
  );
}

export default ControlledCarousel;