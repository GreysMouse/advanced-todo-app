import { configureStore } from '@reduxjs/toolkit';

import pathRouterReducer from './utils/pathRouterSlice';

const store = configureStore({
  reducer: {
    sectionLink: pathRouterReducer
  },
});

export default store;
