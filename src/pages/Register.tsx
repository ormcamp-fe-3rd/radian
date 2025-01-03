import { Route, Routes } from 'react-router-dom';

import Agreement from '../components/Register/Agreement';
import SignUpForm from '../components/Register/SignUpForm';

const Register = (): JSX.Element => {
  return (
    <>
      <h2 className="register-title">회원 가입</h2>
      <Routes>
        <Route path="/" element={<Agreement />} />
        <Route path="/form" element={<SignUpForm />} />
      </Routes>
    </>
  );
};
export default Register;
