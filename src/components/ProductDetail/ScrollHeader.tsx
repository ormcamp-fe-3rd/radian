import '../../styles/ProductDetail.css';
import { Link } from 'react-router-dom';
import { Car } from '../../types/modelsTypes';

/** 컴포넌트 */
import GoListIcon from './GoListIcon';
import OptionsIcon from './OptionsIcon';

interface ScrollHeaderProps {
  carData: Car; // 타입을 Car로 지정
}

const ScrollHeader = ({ carData }: ScrollHeaderProps) => {
  return (
    <div className="detail-header">
      <Link to={`/product-list`}>
        <GoListIcon />
      </Link>
      <Link
        to={`/product-reservation/${carData.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="detail-go-options">
          <p>More Options</p>
          <OptionsIcon />
        </div>
      </Link>
    </div>
  );
};

export default ScrollHeader;
