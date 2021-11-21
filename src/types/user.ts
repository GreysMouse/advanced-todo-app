interface IUserBody {
  email: string;
  name: string;
  password: string;
}

interface IUser extends IUserBody {
  _id: string;
}

export type { IUserBody, IUser };
