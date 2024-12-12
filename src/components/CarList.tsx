import React from 'react';
import '../styles/CarList.css';
import { Link } from 'react-router-dom';
import PlustIcon from '../assets/CarLIstImages/pluse.png';

//금액 숫자 형식
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value);
};

interface CarProductProps {
  id: string;
  titleimg: string;
  productimg: string;
  name: string;
  price: number;
  detailed: (event: React.MouseEvent) => void;
}

const CarProduct: React.FC<CarProductProps> = ({
  id,
  titleimg,
  productimg,
  name,
  price,
  detailed,
}) => {
  return (
    <div className="car-product-container">
      <Link to={`/Detail/${id}`} className="car-product-title-link">
        <div className="car-product-title">
          <img
            src={titleimg}
            alt="car-title"
            className="car-product-title-img"
          />
        </div>
      </Link>
      <Link to={`/Detail/${id}`} className="car-product-link">
        {/*to={`/Detail/${id}`} 해당 부분 수진님 상품상세페이지로 변경예정*/}
        <div className="car-product-img">
          <img src={productimg} alt="car-product" className="carlist-img" />
        </div>
      </Link>
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
