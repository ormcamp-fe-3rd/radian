import React from 'react';
import '../../styles/CarList.css';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

interface CarProductProps {
  pathId: string;
  titleImg: string;
  productImg: string;
  name: string;
  price: number;
  onClickCarDetail: (event: React.MouseEvent) => void;
}

const CarProduct: React.FC<CarProductProps> = ({
  pathId,
  titleImg,
  productImg,
  name,
  price,
  onClickCarDetail,
}: CarProductProps) => {
  return (
    <div className="car-product-container">
      <Link to={`/product-detail/${pathId}`} className="car-product-title-link">
        <div className="car-product-title">
          <img
            src={titleImg}
            alt="car-title"
            className="car-product-title-img"
          />
        </div>
      </Link>
      <Link to={`/product-detail/${pathId}`} className="car-product-link">
        {/*상품상세페이지로 변경*/}
        <div className="car-product-img">
          <img src={productImg} alt="car-product" className="carlist-img" />
        </div>
      </Link>
      <div className="car-product-button" onClick={onClickCarDetail}>
        <img
          src="/public/images/CarList/pluse.png"
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
