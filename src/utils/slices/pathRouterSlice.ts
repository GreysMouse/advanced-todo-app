import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_PATH } from '../../config';

const initialState = {
  activePath: INITIAL_SECTION_PATH
}

const pathRouterSlice = createSlice({
  name: 'pathRouter',
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    }
  }
});

const { setActivePath } = pathRouterSlice.actions;

const pathRouterReducer = pathRouterSlice.reducer;

export { setActivePath, pathRouterReducer };
