import '../styles/Login.css';

/** 컴포넌트 */
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <h2 className="register-title">회원 로그인</h2>
      <LoginForm />
    </>
  );
};

export default Login;
