import React, { useState } from 'react';
import '../styles/ProductReservation.css';
import '../styles/reset.css';
import CarObicontrol from '../components/CarObicontrol';

const ProductReservation = (): JSX.Element => {
  const [color, setColor] = useState<string>('#0000ff'); // 기본 색상: 파란색

  return (
    <div className="carobicontrol-container">
      <CarObicontrol color={color} />

      {/* Right Panel */}
      <div className="productreservation-right-panel">
        <h2 className="productreservation-midtitle">Color</h2>
        <div className="color-buttons">
          <button
            onClick={() => setColor('#0000ff')}
            style={{ backgroundColor: '#0000ff', color: '#fff' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('#ff0000')}
            style={{ backgroundColor: '#ff0000', color: '#fff' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('#ffff00')}
            style={{ backgroundColor: '#ffff00', color: '#000' }}
          >
            Yellow
          </button>
        </div>
        <h2 className="productreservation-midtitle">Battery Type</h2>
        <h2 className="productreservation-midtitle">Drive Type</h2>
        <h2 className="productreservation-midtitle">Virtual Engine Sound</h2>
        <h2 className="productreservation-midtitle">Total</h2>
      </div>
    </div>
  );
};

export default ProductReservation;
