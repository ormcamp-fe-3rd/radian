import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import signUpFormat from '../data/signUpFormat';

const SignUpForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const password = watch('password');
  const navigate = useNavigate();

  // 회원가입 처리 함수
  const onSubmit = async (userEmailAndPassword: string) => {
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
    <>
      <div className="register-container slide-from-right">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {signUpFormat.map((userInformation) => {
            return (
              <>
                <input
                  className="input-form"
                  placeholder={userInformation.placeHolder}
                  id={userInformation.id}
                  type={userInformation.category}
                  {...register(userInformation.id, userInformation.validation)}
                  aria-invalid={errors[userInformation.id] ? 'true' : 'false'}
                />
                {errors[userInformation.id]?.message &&
                  typeof errors[userInformation.id]?.message === 'string' && (
                    <small>{errors[userInformation.id]?.message}</small>
                  )}
              </>
            );
          })}
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

export default SignUpForm;
