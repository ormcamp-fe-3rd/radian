import '../styles/Footer.css';

const Footer = (): JSX.Element => {
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <div className="footer-icon-logo">
                                <img src="/images/common/logo.png" alt="icon-logo" />
                            </div>
                            <div className="footer-logo-title">RADIAN</div>
                        </div>
                        <div className="footer-info-text">
                            info.radian@gmail.com<br />
                            02  1335  1302
                        </div>
                    </div>

                    <div className="icon-sns">
                        <img src="/images/common/Instagram-icon.png" />
                        <img src="/images/common/Facebook-icon.png" />
                        <img src="/images/common/Twitter-icon.png" />
                        <img src="/images/common/Github-icon.png" />
                    </div>
                </div>
            </footer>
        </>
    );
  };
  
  export default Footer;
  