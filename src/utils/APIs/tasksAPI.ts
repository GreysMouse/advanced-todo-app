import API from './API';

import { BASE_URL } from '../../config';

import { ITaskBody, ITask } from '../../types/task';

class TasksAPI extends API {
  getTasks() {
    return fetch(`${ this._baseURL }/tasks`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  createTask(task: ITaskBody) {
    return fetch(`${ this._baseURL }/tasks`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(this._checkResponse);
  }

  updateTask(task: ITask) {
    const { _id, section, entry } = task;

    return fetch(`${ this._baseURL }/tasks/${ _id }`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ section, entry })
    })
    .then(this._checkResponse);
  }

  deleteTask(taskId: string) {
    return fetch(`${ this._baseURL }/tasks/${ taskId }`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

const tasksAPI = new TasksAPI({
  baseURL: BASE_URL
});

export default tasksAPI;
