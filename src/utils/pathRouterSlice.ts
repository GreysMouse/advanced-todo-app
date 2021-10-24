import { createSlice } from '@reduxjs/toolkit';

const pathRouterSlice = createSlice({
  name: 'pathRouter',
  initialState: {
    activePath: '/',
  },
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    }
  }
});

export const { setActivePath } = pathRouterSlice.actions;

export default pathRouterSlice.reducer;
