import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="go-list">
            <Link to="/product-list">
              <img
                src="/images/common/go-list.svg"
                alt="icon-go-list"
                className="carIcon"
              />
            </Link>
          </div>

          <div className="logo-title">
            <Link className="logo-link" to="/">
              RADIAN
            </Link>
          </div>

          <div className="go-profile">
            <Link to="/login">
              <img
                src="/images/common/go-profile.svg"
                alt="icon-go-profile"
                className="profileIcon"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
