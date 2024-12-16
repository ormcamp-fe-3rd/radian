import '../styles/Header.css';
import { Link } from 'react-router-dom';

{/* 첫째주 피드백 (6/8) */}
  return (
    
      <header>
        <div className="header-container">
          <div className="go-list">
            <Link to="/">
              <img src="/public/images/go-list.png" alt="icon-go-list" />
            </Link>
          </div>

          <div className="logo-title">
            <Link className="logo-link" to="/">
              RADIAN
            </Link>
          </div>

          <div className="go-profile">
            <Link to="/">
              <img src="/public/images/go-profile.png" alt="icon-go-profile" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );


export default Header;
