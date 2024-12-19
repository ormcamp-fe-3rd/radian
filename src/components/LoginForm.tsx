import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type LoginForm = {
  id: string;
  password: string;
};

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({
    id: '',
    password: '',
  });
  const { id, password } = form;
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 두 필드 모두 채워졌을 때 로그인 버튼 활성화
    setIsActive(id !== '' && password !== '');
  }, [id, password]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        access(); // Enter 키를 눌렀을 때 로그인 처리
      }
    },
    [id, password],
  );

  const [nextStepAnimation, setNextStepAnimation] = useState('');

  //   const access = useCallback(() => {
  //     if (id === 'radian@gamil.com' && password === '12345') {
  //       navigate('/home'); // 홈으로 이동
  //     } else if (id === '') {
  //       alert('아이디를 입력해주세요.');
  //     } else if (password === '') {
  //       alert('비밀번호를 입력해주세요.');
  //     } else {
  //       alert('아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해주세요.');
  //     }
  //   }, [id, password, navigate]);

  const access = useCallback(() => {
    if (id === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // Firebase Authentication을 이용하여 로그인
    //     signInWithEmailAndPassword(auth, id, password)
    //       .then(() => {
    //         navigate('/home'); // 로그인 성공 시 홈으로 이동
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;

    //         if (errorCode === 'auth/invalid-email') {
    //           alert('유효하지 않은 이메일 주소입니다.');
    //         } else if (errorCode === 'auth/wrong-password') {
    //           alert('비밀번호가 틀렸습니다.');
    //         } else {
    //           alert('로그인 실패: ' + errorMessage);
    //         }
    //       });
    //   }, [id, password, navigate]);

    // Firebase Authentication을 이용하여 로그인
    signInWithEmailAndPassword(auth, id, password)
      .then((userCredential) => {
        // 로그인 성공 시

        const user = userCredential.user;
        console.log('로그인 성공', user);
        navigate('/home'); // 로그인 성공 후 홈으로 이동
      })
      .catch((error) => {
        // 로그인 실패 시
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage); // 에러 코드와 메시지를 로그로 출력

        if (errorCode === 'auth/invalid-email') {
          alert('유효하지 않은 이메일 주소입니다.');
        } else if (errorCode === 'auth/wrong-password') {
          alert('비밀번호가 틀렸습니다.');
        } else if (errorCode === 'auth/user-not-found') {
          alert('해당 이메일로 등록된 사용자가 없습니다.');
        } else {
          alert('로그인 실패: ' + errorMessage);
        }
      });
  }, [id, password, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 기본 제출 방지
    access();
  };

  return (
    <>
      <section className={`login-form ${fadeOut ? 'fade-out' : ''}`}>
        <form className="input-container" onSubmit={handleSubmit}>
          <div className="int-area">
            <input
              type="email"
              name="id"
              value={id}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              id="name-input"
              autoComplete="email"
              placeholder="e-mail"
              required
            />
            <label id="id" htmlFor="name-input" />
          </div>

          <div className="int-area">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              id="password-input"
              autoComplete="current-password"
              placeholder="password"
              required
            />
            <label id="pw" htmlFor="password-input" />
          </div>

          <button
            id="btn-login"
            className={isActive ? 'login-active' : 'login-inactive'}
            type="submit"
          >
            로그인하기
          </button>
          <div className="register">
            <Link
              to="/register"
              onClick={(e) => {
                e.preventDefault();
                setFadeOut(true);
                setTimeout(() => {
                  navigate('/register');
                }, 300);
              }}
            >
              아직 radian 회원이 아니신가요?
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
