import '../styles/Footer.css';

const Footer = (): JSX.Element => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-info">
            <div className="footer-logo">
              <img
                src="/images/common/logo.svg"
                className="footer-icon-logo"
                alt="icon-logo"
              />
              <div className="footer-logo-title">RADIAN</div>
            </div>
            <div className="footer-info-text">
              info.radian@gmail.com
              <br />
              02 1335 1302
            </div>
          </div>

          <div className="icon-sns">
            <a href="https://www.instagram.com/" target="_blank">
              <img
                src="/images/common/Instagram-icon.svg"
                alt="Instagram website"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src="/images/common/Facebook-icon.svg"
                alt="Facebook website"
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <img
                src="/images/common/Twitter-icon.svg"
                alt="Twitter website"
              />
            </a>
            <a href="https://github.com/ormcamp-fe-3rd/radian" target="_blank">
              <img src="/images/common/Github-icon.svg" alt="Github website" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
