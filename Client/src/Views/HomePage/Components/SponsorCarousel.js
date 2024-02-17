import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SponsorCarousel.css';
import Image from 'react-bootstrap/Image';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src='https://i5.walmartimages.com/asr/163af2b3-079b-4033-9027-23c04701d97a.764009ae6050e85eb3bd335bb3268dc4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'  text="Item 1" alt="Starbucks coffee1"></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://m.media-amazon.com/images/I/61huxTDtwbL.__AC_SX300_SY300_QL70_ML2_.jpg' text="Item 2" alt="Starbucks coffee2"></Image> 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.roastar.com/build/roastar/assets/death-wish-gusset.50814509.webp'  text="Item 1" alt="Starbucks coffee1"></Image>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;