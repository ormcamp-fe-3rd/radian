import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../styles/ProductorList/CarCarousel.css';

interface CarCarouselProps {
  productImgs: string[]; // 이미지 URL 배열
}

const CarCarousel: React.FC<CarCarouselProps> = ({ productImgs }) => {
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
      console.log('Current slide index:', current, 'Next slide index:', next);
      setSlickIndex(next);
    },
    swipeToSlide: true,
    rtl: false,
  };

  if (!productImgs || productImgs.length === 0) {
    console.error('productImgs must be a non-empty array.');
    return <div>No images available</div>;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {productImgs.map((img, index) => (
          <div className="slider-img" key={index}>
            <img
              className="car-img"
              src={img}
              alt={`Car ${index + 1}`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarCarousel;
