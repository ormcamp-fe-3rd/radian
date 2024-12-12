import '../styles/reset.css';
import '../styles/Register.css';

import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

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

const Agreement = (): JSX.Element => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([false, false, false]);
  const [signUp, setSignUp] = useState([
    {
      title: '라디안 서비스 이용 약관 동의 (필수)',
      content: '서비스 본문 (추후 추가)',
      buttonStatus: false,
    },
    {
      title: '라디안 개인정보 수집 이용 동의 (필수)',
      content: '개인정보 본분 (추후 추가)',
      buttonStatus: false,
    },
    {
      title: '마케팅 정보 수신에 동의합니다. (선택)',
      content: '마케팅 동의 (추후 추가)',
      buttonStatus: false,
    },
  ]);
  return (
    <>
      <ul className="container">
        <li className="list-item">
          <input
            type="checkbox"
            className="circle-check"
            checked={isChecked[0] && isChecked[1] && isChecked[2]}
            onClick={() => {
              const copy = [...isChecked];
              const allChecked = isChecked[0] && isChecked[1] && isChecked[2];
              copy[0] = !allChecked;
              copy[1] = !allChecked;
              copy[2] = !allChecked;
              setIsChecked(copy);
            }}
          ></input>
          아래 내용을 모두 확인했으며 전체 동의합니다.
        </li>
        {signUp.map((e, i) => (
          <li>
            <div
              className={`list-item ${e.buttonStatus === true ? 'no-border' : ''}`}
            >
              <input
                type="checkbox"
                className="circle-check"
                checked={isChecked[i]}
                onClick={() => {
                  const copy = [...isChecked];
                  copy[i] = !copy[i];
                  setIsChecked(copy);
                }}
              />
              {e.title}
              <button
                className="read-more"
                onClick={() => {
                  const copy = [...signUp];
                  copy[i].buttonStatus = !copy[i].buttonStatus;
                  setSignUp(copy);
                }}
              >
                더보기
              </button>
            </div>
            {e.buttonStatus === true ? (
              <div className="content-box">{e.content}</div>
            ) : null}
          </li>
        ))}
        <li>
          <button
            className="next-step-button"
            disabled={!(isChecked[0] && isChecked[1] === true)}
            onClick={() => {
              navigate('/register/form');
            }}
          >
            회원 정보 입력하기
          </button>
        </li>
      </ul>
    </>
  );
};

const SignInForm = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <form action="">
          <input
            placeholder="성함을 입력해주세요."
            className="input-form"
            type="text"
          />
          <input
            placeholder="이메일 형식으로 아이디를 입력해주세요"
            className="input-form"
            type="email"
          />
          <input
            placeholder="비밀번호는 숫자, 특수문자, 대소문자를 포함하여 8자 이상 입력해주세요"
            className="input-form"
            type="password"
          />
          <input
            placeholder="상단의 비밀번호를 한번 더 입력해주세요"
            className="input-form"
            type="password"
          />
          <button className="next-step-button">가입하기</button>
        </form>
      </div>
    </>
  );
};
