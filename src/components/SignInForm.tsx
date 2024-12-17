import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate(); // 가입 후 이동할 페이지 설정

  // 회원가입 처리 함수
  const onSubmit = async (data: any) => {
    const { email, password } = data;

    try {
      // Firebase의 createUserWithEmailAndPassword를 호출하여 회원가입
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('회원가입 성공', userCredential);

      // 회원가입 성공 후 홈 페이지로 이동
      navigate('/login'); // 성공 시 홈 페이지로 이동
    } catch (error: any) {
      console.error('회원가입 실패', error);
      alert(error.message); // 오류 메시지 출력
    }
  };

  return (
    <>
      <div className="register-container slide-from-right">
        {/* <form
          noValidate
          onSubmit={handleSubmit((data) => alert('가입이 완료되었습니다.'))}
        > */}
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name"></label>
          <input
            id="name"
            placeholder="이름을 입력해주세요."
            className="input-form"
            type="text"
            {...register('name', {
              required: '이름은 필수 입력값입니다.',
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: '이름은 한글과 영문만 입력 가능합니다.',
              },
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
                value: /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/,
                message: '이메일은 영문과 숫자만 입력 가능합니다.',
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
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                message:
                  '비밀번호는 8자리 이상이며 숫자와 특수문자를 포함해야 합니다.',
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

export default SignInForm;
