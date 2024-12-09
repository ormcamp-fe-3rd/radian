import React from 'react';
import CarCarousel from '../components/CarCarousel';

import '../styles/ProductList.css';

const ProductList: React.FC = () => {
  return (
    <div className="product-list-container">
      <CarCarousel />
    </div>
  );
};

export default ProductList;
