import React, { useState, useEffect } from 'react';
import CarCarousel from '../components/ProductList/CarCarousel';
import '../styles/ProductorList/ProductList.css';
import CarProduct from '../components/ProductList/CarList';
import ProductDetail from '../components/ProductList/CarListDetail';
import { CarProductTypes } from '../types/CarProductTypes';
import ProductListData from '../data/ProductList.json';

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<CarProductTypes | null>(null);
  const [products, setProducts] = useState<CarProductTypes[]>([]);

  useEffect(() => {
    // fetch('/src/data/ProductList.json')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch((error) => console.error('Error fetching products:', error));
    setProducts(ProductListData);
  }, []);

  const handleDetailedClick = (id: string) => {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product || null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="main-content">
        {products.length > 0 && (
          <div className="product-img-container">
            <CarCarousel
              productImgs={products.map((product) => product.productImg)}
            />
          </div>
        )}
        <div className="product-list-title">
          <h3>What's your lifestyle?</h3>
        </div>
        <div className="product-list-container">
          {products.map((product) => (
            <CarProduct
              key={product.id}
              id={product.id}
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
