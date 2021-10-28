import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../config';

import { ISection } from '../types/section';
import { ISectionsState } from '../types/state';

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
  }],

  isInputFieldOpen: false
}

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    openInputField: (state: ISectionsState, action: { type: string }) => {
      state.isInputFieldOpen = true;
    },

    addNewSection: (state: ISectionsState, action: { type: string, payload: ISection }) => {
      state.allSections = [ ...state.allSections, action.payload ];;
    }
  }
});

const { openInputField, addNewSection } = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export { openInputField, addNewSection, sectionsReducer };
