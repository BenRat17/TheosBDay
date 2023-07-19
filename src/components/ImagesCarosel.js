import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../assets/Theo1.jpeg';
import './ImagesStyle.css';
import { useState } from 'react';

const ImagesCarosel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };

  return (
    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} style={{ width: '50%', height: '50%'}}>
      <Carousel.Item className='img-fluid'>
        <img
          className="d-block w-100"
          src={require("../assets/Theo1.jpeg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='img-fluid'>
        <img
          className="d-block w-100"
          src={require("../assets/Theo2.jpeg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='img-fluid'>
        <img
          className="d-block w-100"
          src={require("../assets/Theo3.jpeg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default ImagesCarosel