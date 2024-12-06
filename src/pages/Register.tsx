import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Register.css';

const Register = (): JSX.Element => {
  return (
    <>
      <ul className="container">
        <li className="list-item">
          <input type="checkbox" className="circle-check"></input>
          아래 내용을 모두 확인했으며 전체 동의합니다.
        </li>
        <li className="list-item">
          <input type="checkbox" className="circle-check"></input>
          라디안 서비스 이용 약관 동의 (필수)
          <button className="read-more">더보기</button>
        </li>
        <li className="content-box"></li>
        <li className="list-item">
          <input type="checkbox"></input>라디안 개인정보 수집 이용 동의 (필수)
          <button className="read-more">더보기</button>
        </li>
        <li className="content-box"></li>
        <li className="list-item">
          <input type="checkbox"></input>마케팅 정보 수신에 동의합니다. (선택)
          <button className="read-more">더보기</button>
        </li>
        <li className="content-box"></li>
      </ul>
    </>
  );
};

export default Register;
