import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/CarCarousel.css';

const CarCarousel: React.FC = () => {
  const [_slickIndex, setSlickIndex] = useState(0);

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => {

      console.log('Current slide index:', current);
      console.log('Next slide index:', next);

      // 슬라이드 전환 시 index 값 업데이트
      setSlickIndex(next);
    },
    // 슬라이드 전환 방향 고정
    swipeToSlide: true,
    rtl: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-img">
          <img
            className="car-img"
            src="/public/images/CarCarouselImages/sport_3210x1780o.png"
            alt="Car 1"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="slider-img">
          <img
            className="car-img"
            src="/public/images/CarCarouselImages/compact_4020x1740o.png"
            alt="Car 2"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="slider-img">
          <img
            className="car-img"
            src="/public/images/CarCarouselImages/utility_4020x1930o.png"
            alt="Car 3"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarCarousel;
