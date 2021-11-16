import { configureStore } from '@reduxjs/toolkit';

import getObjectIndexByKey from './utils/getObjectIndexByKey';

import { sectionsReducer } from './utils/slices/sectionsSlice';
import { tasksReducer } from './utils/slices/tasksSlice';

const togglePathMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  if (action.type === 'sections/removeSection/fulfilled') {
    const allSections = storeAPI.getState().sections.allSections;
    const indexOfRemoved = getObjectIndexByKey(allSections, '_id', action.payload._id);

    storeAPI.dispatch({
      type: 'sections/setActiveSection',
      payload: allSections[indexOfRemoved - 1].path
    });
  }
  return next(action);
}

const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    tasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(togglePathMiddleware)
});

type TDispatch = typeof store.dispatch;

export type { TDispatch };

export default store;
