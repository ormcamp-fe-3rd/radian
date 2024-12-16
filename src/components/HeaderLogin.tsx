import '../styles/Login.css';
import { Link } from 'react-router-dom';

const HeaderLogin = (): JSX.Element => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="go-list">
                        <Link to="/">
                            <img src="/images/common/go-list.png" alt="icon-go-list" />
                        </Link>
                    </div>

                    <div className="logo-title">
                        <Link className="logo-link" to="/">RADIAN</Link>
                    </div>
                </div>
            </header>
        </>
    )
  };
  
  export default HeaderLogin;
