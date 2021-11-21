import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userAPI from '../APIs/userAPI';

import { IUserBody } from '../../types/user';

const initialState = {
  user: {}
}

const registerUser = createAsyncThunk('user/registerUser', (user: IUserBody) => {
  return userAPI.register(user).then(user => user);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      
    }
  },
  extraReducers(builder) {
    builder
    // GET
    .addCase(registerUser.fulfilled, (state, action) => {
      // state.allTasks = action.payload;
    })
    .addCase(registerUser.rejected, (state, action) => {
      console.log(action.error.message);
    })
  }
});

const {

} = userSlice.actions;

const tasksReducer = userSlice.reducer;

export {
  registerUser,
  tasksReducer
};
