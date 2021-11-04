import API from './API';

import { BASE_URL } from '../../config';

import { ISectionBody, ISection } from '../../types/section';

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

  updateSection(section: ISection) {
    const { _id, name, path } = section;

    return fetch(`${ this._baseURL }/sections/${ _id }`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, path })
    })
    .then(this._checkResponse);
  }

  deleteSection(sectionId: string) {
    return fetch(`${ this._baseURL }/sections/${ sectionId }`, {
      method: 'DELETE',
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
