import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css'; // Create this file for your custom styles
import aman1Image from '../../assets/aman1.jpg';
import aman2Image from '../../assets/aman2.jpg';

const images = [
    aman1Image,
    aman2Image
];

const ImageSlider = () => {
  return (
    <Carousel autoPlay showThumbs={false} interval={2000} infiniteLoop>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
