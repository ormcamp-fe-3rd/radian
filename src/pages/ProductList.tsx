import React, { useState } from 'react';
import CarCarousel from '../components/CarCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/ProductList.css';

import CarProduct from '../components/CarList';
import ProductDetail from '../components/CarListDetail';

import CompactTitleImg from '../assets/CarLIstImages/Compact.png';
import SportTitleImg from '../assets/CarLIstImages/SPORT.png';
import UtiltyTitleImg from '../assets/CarLIstImages/Utilty.png';

interface Product {
  id: string;
  titleImg: string;
  productImg: string;
  name: string;
  price: number;
  detailimgs: string[];
  dataildescription: string;
}

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'RadianRD6',
      titleImg: SportTitleImg,
      productImg: `public/images/sport_3210x1780o.png`,
      name: 'Radian RD6',
      price: 42080000,
      detailimgs: [
        `public/images/rd6_0o.png`,
        `public/images/rd6_45o.png`,
        `public/images/rd6_90o.png`,
        `public/images/rd6_135o.png`,
        `public/images/rd6_180o.png`,
        `public/images/rd6_225o.png`,
        `public/images/rd6_270o.png`,
        `public/images/rd6_315o.png`,
      ],
      dataildescription:
        '낮고 유려한 차체와 개방감을 극대화한 매끈한 실루엣이 조화를 이루며, 시대를 초월한 스포티한 매력을 완성합니다.',
    },
    {
      id: 'RadianCooper',
      titleImg: CompactTitleImg,
      productImg: `public/images/compact_4020x1740o.png`,
      name: 'Radian Cooper',
      price: 27750000,
      detailimgs: [
        `public/images/cooper_0.png`,
        `public/images/cooper_45.png`,
        `public/images/cooper_90.png`,
        `public/images/cooper_135.png`,
        `public/images/cooper_180.png`,
        `public/images/cooper_225.png`,
        `public/images/cooper_270.png`,
        `public/images/cooper_315.png`,
      ],
      dataildescription:
        '낮고 컴팩트한 차체와 부드러운 곡선이 조화를 이루며, 클래식한 매력과 독특한 개성이 돋보이는 디자인을 완성합니다.',
    },
    {
      id: 'RadianRover',
      titleImg: UtiltyTitleImg,
      productImg: `public/images/utility_4020x1930o.png`,
      name: 'Radian Rover',
      price: 51140000,
      detailimgs: [
        `public/images/rover_0.png`,
        `public/images/rover_45.png`,
        `public/images/rover_90.png`,
        `public/images/rover_135.png`,
        `public/images/rover_180.png`,
        `public/images/rover_225.png`,
        `public/images/rover_270.png`,
        `public/images/rover_315.png`,
      ],
      dataildescription:
        '강렬한 존재감과 견고한 차체가 조화를 이루며, 클래식한 디자인 속에 독보적인 스타일과 모험 정신을 담아내는 매력을 완성합니다.',
    },
  ];

  // 디테일 버튼 클릭 시 모달을 열기
  const handleDetailedClick = (product: Product) => {
    setSelectedProduct(product);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <div className="product-img-container">
          <CarCarousel />
        </div>
        <div className="product-list-title">
          <h3>What's your lifestyle?</h3>
        </div>
        <div className="product-list-container">
          {products.map((product) => (
            <CarProduct
              key={product.id}
              id={product.id} // 상품 ID 전달
              titleImg={product.titleImg}
              productImg={product.productImg}
              name={product.name}
              price={product.price}
              onClickCarDetail={(event) => {
                event.stopPropagation(); // 부모의 클릭 이벤트를 막기 위해 사용
                handleDetailedClick(product);
              }}
            />
          ))}
        </div>
      </div>
      {/* 모달 영역 */}
      {selectedProduct && (
        <div className="product-detail-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              X
            </button>
            <ProductDetail product={selectedProduct} />
          </div>
        </div>
      )}

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default ProductList;
