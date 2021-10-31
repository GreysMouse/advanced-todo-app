import API from './API';

import { BASE_URL } from '../../config';

class SectionsAPI extends API{
  getSections() {
    return fetch(`${ this._baseURL }/sections`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

const sectionsAPI = new SectionsAPI({
  baseURL: BASE_URL
});

export default sectionsAPI;
