import { createSlice } from '@reduxjs/toolkit';

import { IPathRouter } from '../types/state';

const initialState = {
  activePath: '/',
}

const pathRouterSlice = createSlice({
  name: 'pathRouter',
  initialState,
  reducers: {
    activePathSetAction: (state: IPathRouter, action: { type: string, payload: string }) => {
      state.activePath = action.payload;
    }
  }
});

const { activePathSetAction } = pathRouterSlice.actions;

const activePathSetReducer = pathRouterSlice.reducer;

export { activePathSetAction, activePathSetReducer }
