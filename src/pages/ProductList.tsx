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
import CooperImg from '../assets/CarLIstImages/cooper3d.png';
import Rd6Img from '../assets/CarLIstImages/radianRD63d.png';
import RoverImg from '../assets/CarLIstImages/rover3d.png';

interface Product {
  id: string;
  titleimg: string;
  productimg: string;
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
      titleimg: SportTitleImg,
      productimg: Rd6Img,
      name: 'Radian RD6',
      price: 42080000,
      detailimgs: [Rd6Img, Rd6Img, Rd6Img, Rd6Img],
      dataildescription:
        '낮고 유려한 차체와 개방감을 극대화한 매끈한 실루엣이 조화를 이루며, 시대를 초월한 스포티한 매력을 완성합니다.',
    },
    {
      id: 'RadianCooper',
      titleimg: CompactTitleImg,
      productimg: CooperImg,
      name: 'Radian Cooper',
      price: 27750000,
      detailimgs: [CooperImg, CooperImg, CooperImg, CooperImg],
      dataildescription:
        '낮고 컴팩트한 차체와 부드러운 곡선이 조화를 이루며, 클래식한 매력과 독특한 개성이 돋보이는 디자인을 완성합니다.',
    },
    {
      id: 'RadianRover',
      titleimg: UtiltyTitleImg,
      productimg: RoverImg,
      name: 'Radian Rover',
      price: 51140000,
      detailimgs: [RoverImg, RoverImg, RoverImg, RoverImg],
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
            titleimg={product.titleimg}
            productimg={product.productimg}
            name={product.name}
            price={product.price}
            detailed={(event) => {
              event.stopPropagation(); // 부모의 클릭 이벤트를 막기 위해 사용
              handleDetailedClick(product);
            }}
          />
        ))}
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
