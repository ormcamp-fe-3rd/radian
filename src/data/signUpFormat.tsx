import { SignUpInputFormat } from './signUpFormType';

const signUpFormat: SignUpInputFormat[] = [
  {
    id: 'name',
    category: 'name',
    placeHolder: '이름을 입력해주세요.',
    validation: {
      required: '이름은 필수 입력값입니다.',
      pattern: {
        value: /^[가-힣a-zA-Z]+$/,
        message: '이름은 한글과 영문만 입력 가능합니다.',
      },
    },
  },
  {
    id: 'email',
    category: 'email',
    placeHolder: '이메일 형식으로 아이디를 입력해주세요',
    validation: {
      required: '이메일은 필수 입력값입니다.',
      pattern: {
        value: /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/,
        message: '이메일은 영문과 숫자만 입력 가능합니다.',
      },
    },
  },
  {
    id: 'password',
    category: 'password',
    placeHolder: '비밀번호는 숫자와 특수문자를 포함하여 8자 이상 입력해주세요',
    validation: {
      required: '',
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        message: '비밀번호는 8자리 이상이며 숫자와 특수문자를 포함해야 합니다.',
      },
      validate: (value, formValues) =>
        formValues.passwordConfirm !== ''
          ? value === formValues.passwordConfirm ||
            '비밀번호 확인란과 일치하지 않습니다.'
          : true,
    },
  },
  {
    id: 'passwordConfirm',
    category: 'password',
    placeHolder: '상단의 비밀번호를 한번 더 입력해주세요',
    validation: {
      required: '비밀번호 확인은 필수입니다.',
      validate: (value, formValues) =>
        value === formValues.password || '상단의 비밀번호가 일치하지 않습니다.',
    },
  },
];

export default signUpFormat;
