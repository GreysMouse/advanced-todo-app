import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_PATH } from '../config';

import { IPathRouter } from '../types/state';

const initialState = {
  activePath: INITIAL_SECTION_PATH
}

const pathRouterSlice = createSlice({
  name: 'pathRouter',
  initialState,
  reducers: {
    setActivePath: (state: IPathRouter, action: { type: string, payload: string }) => {
      state.activePath = action.payload;
    }
  }
});

const { setActivePath } = pathRouterSlice.actions;

const pathRouterReducer = pathRouterSlice.reducer;

export { setActivePath, pathRouterReducer }
