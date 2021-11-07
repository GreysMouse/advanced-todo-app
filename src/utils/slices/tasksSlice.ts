import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import tasksAPI from '../APIs/tasksAPI';

import { ITask, ITaskBody } from '../../types/task';

const initialState = {
  allTasks: [] as ITask[]
}

const setTasks = createAsyncThunk('tasks/setTasks', () => {
  return tasksAPI.getTasks().then(tasksList => tasksList);
});

const addTask = createAsyncThunk('tasks/addTask', (task: ITaskBody) => {
  return tasksAPI.createTask(task).then(task => task);
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
    // GET
    .addCase(setTasks.fulfilled, (state, action) => {
      state.allTasks = action.payload;
    })
    .addCase(setTasks.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // POST
    .addCase(addTask.fulfilled, (state, action) => {
      state.allTasks.push(action.payload);
    })
    .addCase(addTask.rejected, (state, action) => {
      console.log(action.error.message);
    })
  }
});

const tasksReducer = tasksSlice.reducer;

export { setTasks, addTask, tasksReducer };
