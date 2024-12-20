import '../styles/ProductDetail.css';
import { Car } from '../types/modelsTypes';

/** 컴포넌트 */
import ScrollPanelSpecs from './ScrollPanelSpecs';
import ScrollPanelChars from './ScrollPanelChars';
import ScrollRotator from '../components/ScrollRotator';

interface ScrollPanelProps {
  carData: Car;  // 타입을 Car로 지정
}

const ScrollPanel = ({ carData }: ScrollPanelProps) => {

  // 모델 목록
  const models = ['Radian RD6', 'Radian Rover', 'Radian Cooper'];
  
  // 원하는 모델을 두 번째로 고정
  const secondModel = 'Radian Rover';

  // 배열을 재정렬하여 원하는 모델을 두 번째로 위치시킴
  const sortedModels = models
    .filter(model => model !== secondModel) // 'Radian Rover'를 제외한 나머지 모델
    .reduce((acc, model, index) => {
      if (index === 1) {
        acc.push(secondModel); // 두 번째 인덱스에 'Radian Rover' 삽입
      }
      acc.push(model); // 나머지 모델들 추가
      return acc;
    }, [] as string[]);
    
  return (
    <>
      <div className="panel">
        <div className="intro" id="intro">
          <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
          <h1 id="intro-h1">Ready to Cruise</h1>
          <h3 id="intro-h3">Relax and enjoy the drive</h3>
        </div>

        <img id="radian-model" src={carData.image} alt={carData.name} />

        <ScrollRotator />
        
        <h1 id="panel-h1">{carData.name}</h1>
        
        <ul className="models">
          {sortedModels.map((model, index) => (
            <li key={index}>{model}</li>
          ))}
        </ul>

        <div className="rotator">
          <p>0&deg;</p>
          <svg version="1.1" viewBox="0 0 10 30">
            <path d="M5 5.663V40" fill="none" stroke="#999" strokeWidth="0.92" transform="matrix(1 0 0 1.16492 0 -6.597)" />
            <circle cx="7.423" cy="7.159" r="2.577" fill="#fff" transform="translate(-2.423 -4.582)" />
          </svg>
          <p>360&deg;</p>
        </div>

        <ScrollPanelSpecs />
        
        <ScrollPanelChars />
        
        <div className="outro">
          <h2>{carData.name}</h2>
          <p>{carData.price}</p>
          <button className='outro-btn'>Build Now</button>
        </div>
      </div>
    </>
  );
};

export default ScrollPanel;

