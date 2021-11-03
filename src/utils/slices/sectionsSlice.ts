import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_ID, INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import sectionsAPI from '../APIs/sectionsAPI';

import { ISectionBody } from '../../types/section';

const initialState = {
  errorMessage: '',
  allSections: [{
    _id: INITIAL_SECTION_ID,
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

const removeSection = createAsyncThunk('sections/removeSection', (sectionId: string) => {
  return sectionsAPI.deleteSection(sectionId).then((section) => section);
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
    // GET
    .addCase(setSections.fulfilled, (state, action) => {
      state.allSections = state.allSections.concat(action.payload);
    })
    .addCase(setSections.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // POST
    .addCase(addSection.fulfilled, (state, action) => {
      state.allSections = [ ...state.allSections, action.payload ];
    })
    .addCase(addSection.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // DELETE
    .addCase(removeSection.fulfilled, (state, action) => { 
      state.allSections = state.allSections.filter((section) => section._id !== action.payload._id);
    })
    .addCase(removeSection.rejected, (state, action) => {
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
  removeSection,
  sectionsReducer
};
