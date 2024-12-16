import React from 'react';
import '../styles/CarList.css';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

interface CarProductProps {
  id: string;
  titleImg: string;
  productImg: string;
  name: string;
  price: number;
  onClickCarDetail: (event: React.MouseEvent) => void;
}

const CarProduct: React.FC<CarProductProps> = ({
  id,
  titleImg,
  productImg,
  name,
  price,
  onClickCarDetail,
}) => {
  return (
    <div className="car-product-container">
      <Link to={`/Detail/${id}`} className="car-product-title-link">
        <div className="car-product-title">
          <img
            src={titleImg}
            alt="car-title"
            className="car-product-title-img"
          />
        </div>
      </Link>
      <Link to={`/detail/${id}`} className="car-product-link">
        {/*to={`/Detail/${id}`} 해당 부분 수진님 상품상세페이지로 변경예정*/}
        <div className="car-product-img">
          <img src={productImg} alt="car-product" className="carlist-img" />
        </div>
      </Link>
      <div className="car-product-button" onClick={onClickCarDetail}>
        <img
          src="/public/images/CarLIstImages/pluse.png"
          alt="onClickCarDetail"
          className="plus-icon"
        />
      </div>
      <div className="car-product-textcontent">
        <div className="car-product-name">{name}</div>
        <div className="car-product-price">{formatCurrency(price)} ₩ </div>
      </div>
    </div>
  );
};

export default CarProduct;
