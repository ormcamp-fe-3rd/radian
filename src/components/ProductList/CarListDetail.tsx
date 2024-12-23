import React from 'react';
import Slider from 'react-slick';
import '../../styles/CarList/CarListDetail.css'; // 스타일
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 자동차 데이터 타입 정의
interface ProductDetailProps {
  product: {
    id: string;
    detailimgs: string[];
    name: string;
    dataildescription: string;
    price: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
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
        <h3 className="product-car-name">{product.name}</h3>
        <p className="product-car-description">{product.dataildescription}</p>
      </div>
      <div className="product-slider-wrapper">
        <Slider {...settings}>
          {product.detailimgs.map((img, index) => (
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
