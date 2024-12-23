import React, { useState, useEffect } from 'react';
import CarCarousel from '../components/ProductList/CarCarousel';
import '../styles/ProductList.css';

import CarProduct from '../components/ProductList/CarList';
import ProductDetail from '../components/ProductList/CarListDetail';
import { CarProductTypes } from '../types/CarProductTypes';

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<CarProductTypes | null>(null);
  const [products, setProducts] = useState<CarProductTypes[]>([]);

  useEffect(() => {
    fetch('/src/data/ProductList.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // 디테일 버튼 클릭 시 모달을 열기
  const handleDetailedClick = (id: string) => {
    const product = products.find((product) => product.id === id); // id로 해당 제품 찾기
    setSelectedProduct(product || null); // 찾은 제품을 상태에 저장
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
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
              pathId={product.pathId} // 상품 ID 전달
              titleImg={product.titleImg}
              productImg={product.productImg}
              name={product.name}
              price={product.price}
              onClickCarDetail={(event) => {
                event.stopPropagation(); // 부모의 클릭 이벤트를 막기 위해 사용
                handleDetailedClick(product.id);
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
            <ProductDetail {...selectedProduct} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
