import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../config';

import { ISection } from '../types/section';
import { ISections } from '../types/state';

const initialState = {
  allSections: [{
    _id: '0',
    name: INITIAL_SECTION_NAME,
    path: INITIAL_SECTION_PATH
  },
  {
    _id: '1',
    name: 'mouse',
    path: '/section-mouse'
  },
  {
    _id: '2',
    name: 'mouser',
    path: '/section-mouser'
  }]
}

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addNewSection: (state: ISections, action: { type: string, payload: ISection }) => {
      const updatedSections = [ ...state.allSections, action.payload ];

      state.allSections = updatedSections;
    }
  }
});

const { addNewSection } = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export { addNewSection, sectionsReducer };
