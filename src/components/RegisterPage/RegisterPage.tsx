import {
  FORM_HEADINGS,
  USER_NAME_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  REGISTER_SUBMIT_BUTTON_TEXT
} from '../../config';

import AuthPage from '../AuthPage/AuthPage';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInputField from '../AuthFormInputField/AuthFormInputField';

import { IRegisterPageProps } from '../../types/components/registerPage';

const RegisterPage = ({ onSubmit }: IRegisterPageProps): JSX.Element => {
  return (
    <AuthPage heading={ FORM_HEADINGS.REGISTER }>
      <AuthForm
        submitButtonText={ REGISTER_SUBMIT_BUTTON_TEXT }
        errorMessage='wwfwfwfwfwf'
        onSubmit={ onSubmit }
      >
        <AuthFormInputField
          labelText='Name'
          inputAttributes={{
            type: 'text',
            minLength: USER_NAME_MIN_LENGTH,
            maxLength: USER_NAME_MAX_LENGTH,
          }}   
        />
        <AuthFormInputField
          labelText='Email'
          inputAttributes={{
            type: 'email',
            autoComplete: 'off'
          }}       
        />
        <AuthFormInputField
          labelText='Password'
          inputAttributes={{
            type: 'password'
          }}
        />
        <AuthFormInputField
          labelText='Repeat password'
          inputAttributes={{
            type: 'password'
          }}        
        />
      </AuthForm>
    </AuthPage>
  );
}

export default RegisterPage;
