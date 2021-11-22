import React from 'react';

import {
  FORM_HEADINGS,
  REGISTER_SUBMIT_BUTTON_TEXT,
  FORM_VALIDATION_MESSAGES,
  USER_NAME_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_PATTERN,  
  USER_EMAIL_PATTERN,
  USER_PASSWORD_PATTERN
} from '../../config';

import AuthPage from '../AuthPage/AuthPage';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInputField from '../AuthFormInputField/AuthFormInputField';
import AuthFormCheckbox from '../AuthFormCheckbox/AuthFormCheckbox';

import { IRegisterPageProps } from '../../types/components/registerPage';

const RegisterPage = ({ onRegisterSubmit }: IRegisterPageProps): JSX.Element => {

  const [ nameInputValue, setNameInputValue ] = React.useState('');
  const [ emailInputValue, setEmailInputValue ] = React.useState('');
  const [ passwordInputValue, setPasswordInputValue ] = React.useState('');
  const [ repeatedPasswordInputValue, setRepeatedPasswordInputValue ] = React.useState('');

  const [ errorMessage, setErrorMessage ] = React.useState('');

  const [ isPasswordVisible, setIsPasswordVisible ] = React.useState(false);

  const handleNameInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNameInputValue(evt.target.value);
    setErrorMessage('');
  }

  const handleEmailInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailInputValue(evt.target.value);
    setErrorMessage('');
  }

  const handlePasswordInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordInputValue(evt.target.value);
    setErrorMessage('');
  }

  const handleRepeatedPasswordInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setRepeatedPasswordInputValue(evt.target.value);
    setErrorMessage('');
  }

  const handlePasswordVisibilityToggle = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleRegisterSubmit = (): void => {
    if (!nameInputValue || !emailInputValue || !passwordInputValue || !repeatedPasswordInputValue) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.BLANK_FIELDS);
      return;
    }
    if (!USER_NAME_PATTERN.test(nameInputValue)) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.INVALID_NAME_PATTERN);
      return;
    }
    if (nameInputValue.length < USER_NAME_MIN_LENGTH || nameInputValue.length > USER_NAME_MAX_LENGTH) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.INVALID_NAME_LENGTH);
      return;
    }
    if (!USER_EMAIL_PATTERN.test(emailInputValue)) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.INVALID_EMAIL_PATTERN);
      return;
    }
    if (!USER_PASSWORD_PATTERN.test(passwordInputValue)) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.INVALID_PASSWORD_PATTERN);
      return;
    }
    if (passwordInputValue.length < 8) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.INVALID_PASSWORD_LENGTH);
      return;
    }
    if (passwordInputValue !== repeatedPasswordInputValue) {
      setErrorMessage(FORM_VALIDATION_MESSAGES.PASSWORDS_MISMATCH);
      return;
    }

    onRegisterSubmit({
      name: nameInputValue,
      email: emailInputValue,
      password: passwordInputValue
    });
  }

  return (
    <AuthPage heading={ FORM_HEADINGS.REGISTER }>
      <AuthForm
        submitButtonText={ REGISTER_SUBMIT_BUTTON_TEXT }
        errorMessage={ errorMessage }
        onSubmit={ handleRegisterSubmit }
      >
        <AuthFormInputField
          labelText='Name'
          inputAttributes={{
            type: 'text',
            minLength: USER_NAME_MIN_LENGTH,
            maxLength: USER_NAME_MAX_LENGTH,
          }}
          inputValue={ nameInputValue }
          onInput={ handleNameInput }
        />
        <AuthFormInputField
          labelText='E-mail'
          inputAttributes={{
            type: 'email',
            autoComplete: 'off'
          }}
          inputValue={ emailInputValue }
          onInput={ handleEmailInput }
        />
        <AuthFormInputField
          labelText='Password'
          inputAttributes={{
            type: isPasswordVisible ? 'text' : 'password'
          }}
          inputValue={ passwordInputValue }
          onInput={ handlePasswordInput }
        />
        <AuthFormCheckbox
          labelText='Show password'
          isChecked={ isPasswordVisible }
          onCheck={ handlePasswordVisibilityToggle }
        />
        <AuthFormInputField
          labelText='Repeat password'
          inputAttributes={{
            type: isPasswordVisible ? 'text' : 'password'
          }}
          inputValue={ repeatedPasswordInputValue }
          onInput={ handleRepeatedPasswordInput }
        />
      </AuthForm>
    </AuthPage>
  );
}

export default RegisterPage;
