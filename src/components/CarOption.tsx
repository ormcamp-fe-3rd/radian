// import React, { useState } from 'react';
// import '../styles/ProductReservation.css';

// interface CarOptionProps {
//   onColorChange: (color: string) => void;
// }

// const CarOption: React.FC<CarOptionProps> = ({ onColorChange }) => {
//   const [batteryPrice, setBatteryPrice] = useState<number>(0);
//   const [drivePrice, setDrivePrice] = useState<number>(0);
//   const [soundPrice, setSoundPrice] = useState<number>(0);

//   const totalPrice = batteryPrice + drivePrice + soundPrice;

//   const handleSubmit = () => {
//     alert('예약되었습니다.');
//   };

//   return (
//     <div className="productreservation-right-panel">
//       <h2 className="productreservation-midtitle">Color</h2>
//       <div className="color-buttons">
//         {['#18520c', '#d9b718', '#b82729', '#1149a6'].map((col, index) => (
//           <button
//             key={index}
//             onClick={() => onColorChange(col)}
//             style={{
//               backgroundColor: col,
//               borderRadius: '50%',
//               width: '30px',
//               height: '30px',
//               border: 'none',
//             }}
//           />
//         ))}
//       </div>

//       <h2 className="productreservation-midtitle">Battery Type</h2>
//       <div className="option-grid">
//         <div className="option-item">
//           <span>Standard (356 km)</span>
//           <button
//             className={batteryPrice === 42000000 ? 'selected' : ''}
//             onClick={() => setBatteryPrice(42000000)}
//           >
//             +42,000,000원
//           </button>
//         </div>
//         <div className="option-item">
//           <span>Long Range (468 km)</span>
//           <button
//             className={batteryPrice === 44680000 ? 'selected' : ''}
//             onClick={() => setBatteryPrice(44680000)}
//           >
//             +44,680,000원
//           </button>
//         </div>
//       </div>

//       <h2 className="productreservation-midtitle">Drive Type</h2>
//       <div className="option-grid">
//         <div className="option-item">
//           <span>Two-Wheel Drive (2WD)</span>
//           <button
//             className={drivePrice === 0 ? 'selected' : ''}
//             onClick={() => setDrivePrice(0)}
//           >
//             +0원
//           </button>
//         </div>
//         <div className="option-item">
//           <span>All-Wheel Drive (AWD)</span>
//           <button
//             className={drivePrice === 2500000 ? 'selected' : ''}
//             onClick={() => setDrivePrice(2500000)}
//           >
//             +2,500,000원
//           </button>
//         </div>
//       </div>


//       {/* Virtual Engine Sound */}
//       <h2 className="productreservation-midtitle">Virtual Engine Sound</h2>
//       <div className="option-grid">
//         {[
//           { label: 'Analog type 1', price: 500000, sound: '/sounds/sound1.mp3' },
//           { label: 'Analog type 2', price: 500000, sound: '/sounds/sound2.mp3' },
//           { label: 'Default EV Sound', price: 0, sound: '/sounds/sound3.mp3' },
//         ].map(({ label, price, sound }, index) => (
//           <div className="option-item" key={index}>
//             <div className="left-group">
//               <span>{label}</span>
//               <button
//                 className="audio-button"
//                 onClick={() => {
//                   const audio = new Audio(sound);
//                   audio.play();
//                 }}
//               >
//                 <img src="/images/play-icon.png" alt="Play" />
//               </button>
//             </div>
//             <button
//               className={soundPrice === price ? 'selected' : ''}
//               onClick={() => setSoundPrice(price)}
//             >
//               +{price.toLocaleString()}원
//             </button>
//           </div>
//         ))}
//       </div>

      

//       <h2 className="productreservation-midtitle">Total</h2>
//       <div className="total-price">{totalPrice.toLocaleString()}원</div>

//       {/* Submit Button */}
//       <button className="submit-button" onClick={handleSubmit}>
//         submit
//       </button>
//     </div>
//   );
// };

// export default CarOption;