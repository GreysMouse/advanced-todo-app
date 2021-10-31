import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import sectionsAPI from '../APIs/sectionsAPI';

const initialState = {
  errorMessage: '',
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

const getSections = () => sectionsAPI.getSections().then((sectionsList) => sectionsList);

const fetchSections = createAsyncThunk('sections/setAllSections', getSections);

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    openInputField: (state) => {
      state.isInputFieldOpen = true;
    },
    closeInputField: (state) => {
      state.isInputFieldOpen = false;
    },
    addNewSection: (state, action) => {
      state.allSections = [ ...state.allSections, action.payload ];
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchSections.fulfilled, (state, action) => {
      state.allSections = action.payload;
    })
    .addCase(fetchSections.rejected, (state, action) => {
      console.log(action.error.message);
    });
  }
});

const {
  openInputField,
  closeInputField,
  addNewSection
} = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export {
  openInputField,
  closeInputField,
  addNewSection,
  fetchSections,
  sectionsReducer
};
