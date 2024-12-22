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
    
  return (
    <>
      <div className="panel">
        <div className="intro" id="intro">
          <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
          <h1 id="intro-h1">Ready to Cruise</h1>
          <h3 id="intro-h3">Relax and enjoy the drive</h3>
        </div>

        <img id="radian-model" src={carData.modelImage} alt={carData.name} />

        <ScrollRotator carData={carData} />
        
        <h1 id="panel-h1">{carData.name}</h1>

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

