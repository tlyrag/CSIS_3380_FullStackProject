import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
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
        <Row>
          <Image src={item.image}  text="Item 1" alt={item.name} id="carousel-img"></Image>
        </Row>
        <Row>
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>
              {item.species}
            </p>
          </Carousel.Caption>
        </Row>

  
      </Carousel.Item>
    )
  })
}

function ControlledCarousel() {



  const [index, setIndex] = useState(0);
  const [characterList, setcharacterList] = useState([]);


  useEffect(() => {
    const fetchChar = async () => {
      const apiResponse = await getCharacterData();
      setcharacterList(apiResponse.results)
    }
    fetchChar();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="sponsor-carousel">
      {createCarouselItems(characterList)}
    </Carousel>
  );
}

export default ControlledCarousel;