import { useState } from 'react';
import '../styles/ProductReservation.css';
import '../styles/reset.css';
import CarObicontrol from '../components/CarObicontrolSport';
import CarOption from '../components/CarOptionAll'; 

const ProductReservation = (): JSX.Element => {
  const [color, setColor] = useState('#0000ff'); // 기본 색상

  return (
    <div className="carobicontrol-container">
      <CarObicontrol color={color} />
      <CarOption carType="sport" onColorChange={(selectedColor) => setColor(selectedColor)} />{/*3차피드백 2번*/}
    </div>
  );
};

export default ProductReservation;