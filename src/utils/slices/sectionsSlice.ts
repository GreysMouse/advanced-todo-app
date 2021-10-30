import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import { ISection } from '../../types/section';
import { ISectionsState } from '../../types/state';

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

// const fetchData = createAsyncThunk('sections/fetchSections', );

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    openInputField: (state: ISectionsState) => {
      state.isInputFieldOpen = true;
    },
    closeInputField: (state: ISectionsState) => {
      state.isInputFieldOpen = false;
    },
    addNewSection: (state: ISectionsState, action: { type: string, payload: ISection }) => {
      state.allSections = [ ...state.allSections, action.payload ];;
    }
  }
});

const { openInputField, closeInputField, addNewSection } = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export { openInputField, closeInputField, addNewSection, sectionsReducer };
