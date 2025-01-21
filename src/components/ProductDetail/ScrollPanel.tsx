import '../../styles/ProductDetail.css';
import { Car } from '../../types/modelsTypes';
import { Link } from 'react-router-dom';

/** 컴포넌트 */
import ScrollPanelSpecs from './ScrollPanelSpecs';
import ScrollPanelChars from './ScrollPanelChars';

interface ScrollPanelProps {
  carData: Car; // 타입을 Car로 지정
}

const ScrollPanel = ({ carData }: ScrollPanelProps) => {
  return (
    <div className="panel">
      <div className="panel-intro" id="panel-intro">
        <img id="panel-logo" src="/images/common/logo.svg" alt="logo-icon" />
        <h1 id="panel-intro-h1">Ready to Cruise</h1>
        <h3 id="panel-intro-h3">Relax and enjoy the drive</h3>
      </div>

      <img id="radian-model" src={carData.modelImage} alt={carData.name} />

      <h1 id="panel-h1">{carData.name}</h1>

      <ScrollPanelSpecs />

      <ScrollPanelChars />

      <div className="panel-outro">
        <h2 className='panel-outro-h2'>{carData.name}</h2>
        <p className='panel-outro-p'>{carData.price}</p>
        <Link to={`/product-reservation/${carData.id}`}>
          <button className="panel-outro-btn">Build Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ScrollPanel;
