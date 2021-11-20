import { FORM_HEADINGS, USER_NAME_MIN_LENGTH, USER_NAME_MAX_LENGTH } from '../../config';

import AuthPage from '../AuthPage/AuthPage';
import AuthFormInputField from '../AuthFormInputField/AuthFormInputField';

const RegisterPage = (): JSX.Element => {
  return (
    <AuthPage heading={ FORM_HEADINGS.REGISTER }>
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
    </AuthPage>
  );
}

export default RegisterPage;
