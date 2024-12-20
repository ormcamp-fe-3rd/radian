import { Route, Routes } from 'react-router-dom';
import Agreement from '../components/Agreement';
import SignInForm from '../components/SignInForm';

const Register = (): JSX.Element => {
  return (
    <>
      <h2 className="register-title">회원 가입</h2>
      <Routes>
        <Route path="/" element={<Agreement />} />
        <Route path="/form" element={<SignInForm />} />
      </Routes>
    </>
  );
};
export default Register;
