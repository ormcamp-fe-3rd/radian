import React from 'react';
import Slider from 'react-slick';
import '../../styles/ProductorList/CarListDetail.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarProductTypes } from '../../types/CarProductTypes';

type CarProductPickProps = Pick<
  CarProductTypes,
  'detailimgs' | 'name' | 'dataildescription'
>;

const ProductDetail: React.FC<CarProductPickProps> = ({
  detailimgs,
  name,
  dataildescription,
}) => {
  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-text">
        <h3 className="product-car-name">{name}</h3>
        <p className="product-car-description">{dataildescription}</p>
      </div>
      <div className="product-slider-wrapper">
        <Slider {...settings}>
          {detailimgs.map((img, index) => (
            <div key={index} className="product-carousel-slide">
              <img
                className="product-carousel-img"
                src={img}
                alt={`detail ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetail;
