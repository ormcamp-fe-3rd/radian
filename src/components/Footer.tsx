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
            <img src="/images/common/Instagram-icon.svg" />
            <img src="/images/common/Facebook-icon.svg" />
            <img src="/images/common/Twitter-icon.svg" />
            <img src="/images/common/Github-icon.svg" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
