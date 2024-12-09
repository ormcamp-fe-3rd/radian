import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/CarCarousel.css';

// 이미지 파일 import//-
import rd6Image from '../assets/CarCarouselImages/radianRd6.png';
import austinMiniImage from '../assets/CarCarouselImages/mini.png';
import rangeRoverImage from '../assets/CarCarouselImages/range_rover.png';

const CarCarousel: React.FC = () => {
  //+
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-img">
          <img
            src={rd6Image}
            alt="Car 1"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="slider-img">
          <img
            src={austinMiniImage}
            alt="Car 2"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="slider-img">
          <img
            src={rangeRoverImage}
            alt="Car 3"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarCarousel;
