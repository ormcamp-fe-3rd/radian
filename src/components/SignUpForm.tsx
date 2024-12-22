import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import signUpFormat from '../data/signUpFormat';

interface UserLogInData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<UserLogInData>({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  // 회원가입 처리 함수
  const onSubmit = async (userEmailAndPassword: UserLogInData) => {
    const { email, password } = userEmailAndPassword;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('회원가입 성공', userCredential);
      navigate('/login');
    } catch (error: any) {
      console.error('회원가입 실패', error);
      alert(
        error.message === 'Firebase: Error (auth/email-already-in-use).'
          ? '이미 가입한 회원입니다.'
          : error.message,
      );
    }
  };

  return (
    <div className="register-container slide-from-right">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {signUpFormat.map((userInformation) => (
          <div key={userInformation.id}>
            <input
              className="input-form"
              placeholder={userInformation.placeHolder}
              id={userInformation.id}
              type={userInformation.category}
              {...register(
                userInformation.id as keyof UserLogInData,
                userInformation.validation,
              )}
              aria-invalid={!!errors[userInformation.id as keyof UserLogInData]}
            />
            {errors[userInformation.id as keyof UserLogInData]?.message && (
              <small>
                {errors[userInformation.id as keyof UserLogInData]?.message}
              </small>
            )}
          </div>
        ))}
        <button
          className="next-step-button"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
