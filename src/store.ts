import { configureStore } from '@reduxjs/toolkit';

import { pathRouterReducer } from './utils/slices/pathRouterSlice';
import { sectionsReducer } from './utils/slices/sectionsSlice';

const store = configureStore({
  reducer: {
    pathRouter: pathRouterReducer,
    sections: sectionsReducer
  }
});

type TDispatch = typeof store.dispatch;

export type { TDispatch };

export default store;
