import API from './API';

import { BASE_URL } from '../../config';

import { ISectionBody } from '../../types/section';

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

  createSection(section: ISectionBody) {
    return fetch(`${ this._baseURL }/sections`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(section)
    })
    .then(this._checkResponse);
  }
}

const sectionsAPI = new SectionsAPI({
  baseURL: BASE_URL
});

export default sectionsAPI;
