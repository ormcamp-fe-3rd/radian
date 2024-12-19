import '../styles/ProductDetail.css';

const ScrollHeader = () => {

  return (
    <div className="detail-header">
        <svg version="1.1" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <div className='detail-header-options'>
          <p>More Options</p>
          <svg version="1.1" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
    </div> 
  );
};

export default ScrollHeader;