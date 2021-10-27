import { configureStore } from '@reduxjs/toolkit';

import { pathRouterReducer } from './utils/pathRouterSlice';
import { sectionsReducer } from './utils/sectionsSlice';

const store = configureStore({
  reducer: {
    pathRouter: pathRouterReducer,
    sections: sectionsReducer
  }  
});

type TDispatch = typeof store.dispatch;

export type { TDispatch };

export default store;
