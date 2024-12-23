import { useState } from 'react';
import '../styles/ProductReservation.css';
import '../styles/reset.css';
import CarObicontrol from '../components/ProductReservation/CarObicontrolUtility';
import CarOption from '../components/ProductReservation/CarOptionUtility';

const ProductReservation = (): JSX.Element => {
  const [color, setColor] = useState('#0000ff'); // 기본 색상

  return (
    <div className="carobicontrol-container">
      <CarObicontrol color={color} />
      <CarOption onColorChange={(selectedColor) => setColor(selectedColor)} />
    </div>
  );
};

export default ProductReservation;
