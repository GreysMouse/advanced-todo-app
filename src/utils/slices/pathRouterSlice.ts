import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_PATH } from '../../config';

import { IPathRouterState } from '../../types/state';

const initialState = {
  activePath: INITIAL_SECTION_PATH
}

const pathRouterSlice = createSlice({
  name: 'pathRouter',
  initialState,
  reducers: {
    setActivePath: (state: IPathRouterState, action: { type: string, payload: string }) => {
      state.activePath = action.payload;
    }
  }
});

const { setActivePath } = pathRouterSlice.actions;

const pathRouterReducer = pathRouterSlice.reducer;

export { setActivePath, pathRouterReducer }
