import '../../styles/ProductDetail.css';
import { Link } from 'react-router-dom';
import { Car } from '../../types/modelsTypes';

interface ScrollHeaderProps {
  carData: Car; // 타입을 Car로 지정
}

const ScrollHeader = ({ carData }: ScrollHeaderProps) => {
  return (
    <div className="detail-header">
      <Link to={`product-list`}>
        <svg className="detail-go-list" version="1.1" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </Link>
      <Link
        to={`/product-reservation/${carData.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="detail-go-options">
          <p>More Options</p>
          <svg className="options-icon" version="1.1" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default ScrollHeader;
