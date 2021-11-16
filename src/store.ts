import { configureStore } from '@reduxjs/toolkit';

import { sectionsReducer } from './utils/slices/sectionsSlice';
import { tasksReducer } from './utils/slices/tasksSlice';

const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    tasks: tasksReducer
  }
});

type TDispatch = typeof store.dispatch;

export type { TDispatch };

export default store;
