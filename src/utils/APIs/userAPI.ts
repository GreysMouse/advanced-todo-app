import API from './API';

import { BASE_URL } from '../../config';

import { IUserBody } from '../../types/user';

class UserAPI extends API {
  register(user: IUserBody) {
    return fetch(`${ this._baseURL }/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(this._checkResponse);
  }
}

const userAPI = new UserAPI({
  baseURL: BASE_URL
});

export default userAPI;
