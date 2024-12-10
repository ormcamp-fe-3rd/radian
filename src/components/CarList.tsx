import React from 'react';
import '../styles/CarList.css';
import PlustIcon from '../assets/CarLIstImages/pluse.png';

//금액 숫자 형식
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value);
};

interface CarProductProps {
  titleimg: string;
  productimg: string;
  name: string;
  price: number;
  detailed: () => void;
}

const CarProduct: React.FC<CarProductProps> = ({
  titleimg,
  productimg,
  name,
  price,
  detailed,
}) => {
  return (
    <div className="car-product-container">
      <div className="car-product-title">
        <img src={titleimg} alt="car-title" className="car-product-title-img" />
      </div>
      <div className="car-product">
        <img src={productimg} alt="car-product" className="car-img" />
      </div>
      <div className="car-product-button" onClick={detailed}>
        <img src={PlustIcon} alt="detail" className="plus-icon" />
      </div>
      <div className="car-product-textcontent">
        <div className="car-product-name">{name}</div>
        <div className="car-product-price">{formatCurrency(price)} ₩ </div>
      </div>
    </div>
  );
};

export default CarProduct;
