import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Register.css';

const Register = (): JSX.Element => {
  const [signUp, setSignUp] = useState([
    {
      title: '라디안 서비스 이용 약관 동의 (필수)',
      content: '서비스 본문 (추후 추가)',
      status: false,
    },
    {
      title: '라디안 개인정보 수집 이용 동의 (필수)',
      content: '개인정보 본분 (추후 추가)',
      status: false,
    },
    {
      title: '마케팅 정보 수신에 동의합니다. (선택)',
      content: '마케팅 동의 (추후 추가)',
      status: false,
    },
  ]);
  return (
    <>
      <ul className="container">
        <li className="list-item">
          <input type="checkbox" className="circle-check"></input>
          아래 내용을 모두 확인했으며 전체 동의합니다.
        </li>
        {signUp.map((e, i) => (
          <li>
            <div
              className={`list-item ${e.status === true ? 'no-border' : ''}`}
            >
              <input type="checkbox" className="circle-check" />
              {e.title}
              <button
                className="read-more"
                onClick={() => {
                  let copy = [...signUp];
                  copy[i].status = !copy[i].status;
                  setSignUp(copy);
                }}
              >
                더보기
              </button>
            </div>
            {e.status === true ? (
              <div className="content-box">{e.content}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Register;
