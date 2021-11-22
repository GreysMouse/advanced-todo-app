import React from 'react';
import { IUserBody } from '../../types/user';

import RegisterPage from '../RegisterPage/RegisterPage';

const RegisterPageWrapper= (): JSX.Element => {

  const handleRegisterSubmit = ({ name, email, password }: IUserBody): void => {
    console.log(name, email, password);
  }

  return <RegisterPage onRegisterSubmit={ handleRegisterSubmit } />;
}

export default RegisterPageWrapper;


