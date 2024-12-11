import '../styles/Login.css';

/** 컴포넌트 */
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
    return (
        <>
            <HeaderLogin />

            <LoginForm />
        
            <Footer />
        </>
    );
};

export default Login;
