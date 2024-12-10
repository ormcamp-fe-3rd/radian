import React from 'react';
import CarCarousel from '../components/CarCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ProductList.css';

import CarProduct from '../components/CarList';

import CompactTitleImg from '../assets/CarLIstImages/Compact.png';
import SportTitleImg from '../assets/CarLIstImages/SPORT.png';
import UtiltyTitleImg from '../assets/CarLIstImages/Utilty.png';
import CooperImg from '../assets/CarLIstImages/cooper3d.png';
import Rd6Img from '../assets/CarLIstImages/radianRD63d.png';
import RoverImg from '../assets/CarLIstImages/rover3d.png';

const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      titleimg: SportTitleImg,
      productimg: Rd6Img,
      name: 'Radian RD6',
      price: 42080000,
    },
    {
      id: 2,
      titleimg: CompactTitleImg,
      productimg: CooperImg,
      name: 'Radian Cooper',
      price: 27750000,
    },
    {
      id: 3,
      titleimg: UtiltyTitleImg,
      productimg: RoverImg,
      name: 'Radian Rover',
      price: 51140000,
    },
  ];
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
            titleimg={product.titleimg}
            productimg={product.productimg}
            name={product.name}
            price={product.price}
            detailed={() => console.log(product.id, 'View Detail')}
          />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default ProductList;
