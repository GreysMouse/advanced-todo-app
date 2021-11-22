import React from 'react';

import { IAuthFormProps } from '../../types/components/authForm';

import './styles/auth-form.css';
import './styles/auth-form__error-message.css';
import './styles/auth-form__submit-button.css';
import './styles/auth-form__submit-button_disabled.css';

const AuthForm = ({
  children,
  submitButtonText,
  errorMessage,
  onSubmit
}: React.PropsWithChildren<IAuthFormProps>): JSX.Element => {
  
  const handleSubmit = (evt: React.MouseEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    onSubmit();
  }

  return (
    <form
      className='auth-form'
      noValidate={ true }
      onSubmit={ handleSubmit }
    >
      { children }
      <p className='auth-form__error-message'>{ errorMessage }</p>
      <button
        className={ 'auth-form__submit-button' }
        type='submit'
      >
        { submitButtonText }
      </button>
    </form>
  );
}

export default AuthForm;
