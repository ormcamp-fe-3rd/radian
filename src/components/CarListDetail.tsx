import React, { useLayoutEffect, useState } from 'react';
import Slider from 'react-slick';
import '../styles/CarListDetail.css'; // 스타일
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { formatCurrency } from '../utils/formatCurrency';

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
    adaptiveHeight: false,
  };
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    const modalContent =
      document.querySelector<HTMLDivElement>('.modal-content');
    const productImgs = document.querySelectorAll<HTMLDivElement>(
      '.product-carousel-img',
    );

    if (modalContent && productImgs.length > 0) {
      const modalHeight = modalContent.clientHeight;

      productImgs.forEach((img) => {
        img.style.height = `${modalHeight}px`; // 각 이미지의 높이 설정
        img.style.objectFit = 'cover'; // 이미지 크기 맞추기
      });
      setLoaded(true);
    }
  }, [product.detailimgs]);

  return (
    <div className="product-detail-container">
      <div className="product-detail-text">
        <h3 className="product-car-name">{product.name}</h3>
        <p className="product-car-description">{product.dataildescription}</p>
      </div>
      <Slider {...settings}>
        {product.detailimgs.map((img, index) => (
          <div key={index} className="product-carousel-slide">
            <img
              className="product-carousel-img"
              src={img}
              alt={`detail ${index}`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        ))}
      </Slider>
      <p className="product-car-price">
        Price: {formatCurrency(product.price)} 원
      </p>
    </div>
  );
};

export default ProductDetail;
