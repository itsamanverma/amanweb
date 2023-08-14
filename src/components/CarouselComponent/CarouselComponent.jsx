import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css'; 
import carousel1 from '../../assets/aman1.jpg';
import carousel2 from '../../assets/aman2.jpg';

const CarouselComponent = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container-fluid p-0 pb-5">
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name is <span></span></h1>
            <h1>Aman <span></span></h1>
            <a href="#projects" type="button" className="cta">Portfolio</a>
          </div>
        </div>
      </section>
      <Slider {...carouselSettings}>
        <div className="carousel-item">
          <img src={carousel1} alt="" className="carousel-image" />
          <div className="carousel-caption">Caption for Image 1</div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} alt="" className="carousel-image" />
          <div className="carousel-caption">Caption for Image 2</div>
        </div>  
      </Slider>
    </div>
  );
};

export default CarouselComponent;
