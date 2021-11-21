import React from 'react';

import { IAuthPageProps } from '../../types/components/authPage';

import './styles/auth-page.css';
import './styles/auth-page__container.css';
import './styles/auth-page__heading.css';

const AuthPage = ({ children, heading }: React.PropsWithChildren<IAuthPageProps>): JSX.Element => {
  return (
    <div className='auth-page'>
      <div className='auth-page__container'>
        <p className='auth-page__heading'>{ heading }</p>
        { children }
      </div>
    </div>
  );
}

export default AuthPage;
