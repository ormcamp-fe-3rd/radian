import '../styles/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import term from '../data/terms.json';

const Agreement = (): JSX.Element => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([false, false, false]);
  const [nextStepAnimation, setNextStepAnimation] = useState('');
  const [signUp, setSignUp] = useState(term);

  return (
    <>
      <ul className={`container ${nextStepAnimation}`}>
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
                  let copy = [...isChecked];
                  copy[i] = !copy[i];
                  setIsChecked(copy);
                }}
              />
              {e.title}
              <button
                className="read-more"
                onClick={() => {
                  let copy = [...signUp];
                  copy[i].buttonStatus = !copy[i].buttonStatus;
                  setSignUp(copy);
                }}
              >
                더보기
              </button>
            </div>
            {e.buttonStatus === true ? (
              <div className="content-box">
                {e.content.split('\n').map((line) => (
                  <span>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
        <li>
          <button
            className="next-step-button"
            disabled={!(isChecked[0] && isChecked[1] === true)}
            onClick={() => {
              if (isChecked[0] && isChecked[1]) {
                setNextStepAnimation('fade-animation');
                setTimeout(() => {
                  navigate('/register/form');
                }, 200);
              } else {
                alert('필수 약관에 동의해주세요.');
              }
            }}
          >
            회원 정보 입력하기
          </button>
        </li>
      </ul>
    </>
  );
};

export default Agreement;
