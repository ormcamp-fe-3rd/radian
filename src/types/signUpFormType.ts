export interface UserSignUpFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type UserSignUpFormValueKey = keyof UserSignUpFormValue;

export interface SignUpInputFormat {
  id: UserSignUpFormValueKey;
  category: string;
  placeHolder: string;
  validation: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    validate?: (
      value: string,
      formValues: UserSignUpFormValue,
    ) => boolean | string;
  };
}
