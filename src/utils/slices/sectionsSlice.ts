import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import sectionsAPI from '../APIs/sectionsAPI';

import { ISectionBody } from '../../types/section';

const initialState = {
  errorMessage: '',
  allSections: [{
    _id: '0',
    name: INITIAL_SECTION_NAME,
    path: INITIAL_SECTION_PATH
  }],
  isInputFieldOpen: false
}

const setSections = createAsyncThunk('sections/setSections', () => {
  return sectionsAPI.getSections().then((sectionsList) => sectionsList);
});

const addSection = createAsyncThunk('sections/addSection', (section: ISectionBody) => {
  return sectionsAPI.createSection(section).then((section) => section);
});

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    openInputField: (state) => {
      state.isInputFieldOpen = true;
    },
    closeInputField: (state) => {
      state.isInputFieldOpen = false;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(setSections.fulfilled, (state, action) => {
      state.allSections = state.allSections.concat(action.payload);
    })
    .addCase(setSections.rejected, (state, action) => {
      console.log(action.error.message);
    })
    .addCase(addSection.fulfilled, (state, action) => {
      state.allSections = [ ...state.allSections, action.payload ];
    })
    .addCase(addSection.rejected, (state, action) => {
      console.log(action.error.message);
    });
  }
});

const {
  openInputField,
  closeInputField,
} = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export {
  openInputField,
  closeInputField,
  setSections,
  addSection,
  sectionsReducer
};
