import { configureStore } from '@reduxjs/toolkit';

import { INITIAL_SECTION_PATH } from './config';

import { activePathSetReducer } from './utils/pathRouterSlice';

const initialState = {
  pathRouter: {
    activePath: INITIAL_SECTION_PATH
  }
}

const store = configureStore({
  preloadedState: initialState,
  reducer: {
    pathRouter: activePathSetReducer
  }  
});

type TDispatch = typeof store.dispatch;

export type { TDispatch };

export default store;
