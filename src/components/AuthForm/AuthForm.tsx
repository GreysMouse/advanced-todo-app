import React from 'react';

import { IAuthFormProps } from '../../types/components/authForm';

import './styles/auth-form.css';

const AuthForm = ({
  children
}: React.PropsWithChildren<IAuthFormProps>): JSX.Element => {
  return (
    <form className='auth-form'>
      { children }
    </form>
  );
}

export default AuthForm;
