import React from 'react';
import '../../styles/ProductorList/CarList.css';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { CarProductTypes } from '../../types/CarProductTypes';

type CarProductPickProps = Pick<
  CarProductTypes,
  'id' | 'titleImg' | 'productImg' | 'name' | 'price'
> & {
  onClickCarDetail: (event: React.MouseEvent) => void;
};
const CarProduct: React.FC<CarProductPickProps> = ({
  id,
  titleImg,
  productImg,
  name,
  price,
  onClickCarDetail,
}) => {
  return (
    <div className="car-product-container">
      <Link to={`/product-detail/${id}`} className="car-product-title-link">
        <div className="car-product-title">
          <img
            src={titleImg}
            alt="car-title"
            className="car-product-title-img"
          />
        </div>
      </Link>
      <Link to={`/product-detail/${id}`} className="car-product-link">
        <div className="car-product-img">
          <img src={productImg} alt="car-product" className="carlist-img" />
        </div>
      </Link>
      <div
        className="car-product-button"
        onClick={(event) => {
          event.stopPropagation();
          onClickCarDetail(event);
        }}
      >
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
