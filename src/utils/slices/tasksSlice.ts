import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import tasksAPI from '../APIs/tasksAPI';

const initialState = {
  allTasks: []
}

const setTasks = createAsyncThunk('tasks/setTasks', () => {
  return tasksAPI.getTasks().then(tasksList => tasksList);
})

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
  }
});

const { } = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;

export { setTasks, tasksReducer };
