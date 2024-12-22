import '../styles/ProductDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import modelsData from '../data/modelsData.json'; // 데이터
import { Car, ModelsData } from '../types/modelsTypes'; // 타입
import useProductDetailScroll from '../hooks/useProductDetailScroll'; // 스크롤 트리거 애니메이션 훅

/** 컴포넌트 */
import ProductDetailIntro from '../components/ProductDetailIntro';
import ScrollHeader from '../components/ScrollHeader';
import ScrollPanel from '../components/ScrollPanel';

const ProductDetail = () => {
  const { carId } = useParams<{ carId: string }>(); // URL에서 carId를 받아옴
  const [carData, setCarData] = useState<Car | null>(null);

  useEffect(() => {
    console.log("carId from useParams:", carId);

    // 모델 데이터를 찾아서 상태에 설정
    const selectedCar = (modelsData as ModelsData).find((car) => car.id === carId);

    if (selectedCar) {
      console.log("Found selectedCar:", selectedCar);
      setCarData(selectedCar); // 데이터 업데이트
    } else {
      console.log("No product found for the given carId:", carId);
    }

  }, [carId]);
    
  useProductDetailScroll(carData);

  if (!carData) {
    return <div>Loading...</div>; // carData가 null인 경우 처리 (로딩 중 표시)
  }
  
  return (
      <main className='detail-box'>
        <ProductDetailIntro carData={carData} />

        <div className="detail-container" id="detail-container">
          <div className="wrapper" id="wrapper">

            <ScrollHeader carData={carData} />

            <ScrollPanel carData={carData} />

            <div className="bkg"></div>
          </div>

          <svg version="1.1" id="mask">
            <defs>
              <clipPath id="wrapMask">
                <rect id="wrapWin" width="1300" height="1100" fill="black" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </main>
  );
};

export default ProductDetail;