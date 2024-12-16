import '../styles/Login.css';

/** 컴포넌트 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <>
            <Header />

            <LoginForm />
        
            <Footer />
        </>
    );
};

export default Login;
