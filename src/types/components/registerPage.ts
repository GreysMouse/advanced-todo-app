import { IUserBody } from '../user';

interface IRegisterPageProps {
  onRegisterSubmit(user: IUserBody): void;
}

export type { IRegisterPageProps }; 
