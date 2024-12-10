import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Register.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import term from '../data/terms.json';
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';

const Register = (): JSX.Element => {
  return (
    <>
      <HeaderLogin />
      <h2 className="register-title">회원 가입</h2>
      <Routes>
        <Route path="/" element={<Agreement />} />
        <Route path="/form" element={<SignInForm />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Register;

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

const SignInForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const password = watch('password');

  return (
    <>
      <div className="container slide-from-right">
        <form
          noValidate
          onSubmit={handleSubmit((data) => alert('가입이 완료되었습니다.'))}
        >
          <label htmlFor="name"></label>
          <input
            id="name"
            placeholder="이름을 입력해주세요."
            className="input-form"
            type="text"
            {...register('name', {
              required: '이름은 필수 입력값입니다.',
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <small>{errors.name.message}</small>}

          <label htmlFor="email"></label>
          <input
            id="email"
            placeholder="이메일 형식으로 아이디를 입력해주세요"
            className="input-form"
            type="email"
            {...register('email', {
              required: '이메일은 필수 입력값입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <small>{errors.email.message}</small>}
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="비밀번호는 8자 이상 입력해주세요"
            className="input-form"
            type="password"
            {...register('password', {
              required: '비밀번호는 필수 입력값입니다.',
              pattern: {
                value: /^.{8,}$/,
                message: '비밀번호는 8자리 이상 입력해주세요.',
              },
            })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && <small>{errors.password.message}</small>}
          <label htmlFor="passwordConfirm"></label>
          <input
            id="passwordConfirm"
            placeholder="상단의 비밀번호를 한번 더 입력해주세요"
            className="input-form"
            type="password"
            {...register('passwordConfirm', {
              required: '비밀번호 확인은 필수입니다.',
              validate: (value) =>
                value === password || '비밀번호가 일치하지 않습니다.',
            })}
            aria-invalid={errors.passwordConfirm ? 'true' : 'false'}
          />
          {errors.passwordConfirm && (
            <small>{errors.passwordConfirm.message}</small>
          )}
          <button
            className="next-step-button"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};
