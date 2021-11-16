import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { INITIAL_SECTION_ID, INITIAL_SECTION_NAME, INITIAL_SECTION_PATH } from '../../config';

import sectionsAPI from '../APIs/sectionsAPI';

import { ISectionBody, ISection } from '../../types/section';

const initialState = {
  errorMessage: '',
  allSections: [{
    _id: INITIAL_SECTION_ID,
    name: INITIAL_SECTION_NAME,
    path: INITIAL_SECTION_PATH
  }],
  isAddFormOpen: false,
  activeSection: INITIAL_SECTION_PATH,
  renamingSection: null,
  deletingSection: null
}

const setSections = createAsyncThunk('sections/setSections', () => {
  return sectionsAPI.getSections().then(sectionsList => sectionsList);
});

const addSection = createAsyncThunk('sections/addSection', (section: ISectionBody) => {
  return sectionsAPI.createSection(section).then(section => section);
});

const renameSection = createAsyncThunk('sections/renameSection', (section: ISection) => {
  return sectionsAPI.updateSection(section).then(section => section);
});

const removeSection = createAsyncThunk('sections/removeSection', (sectionId: string) => {
  return sectionsAPI.deleteSection(sectionId).then(section => section);
});

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    openInputField: (state) => {
      state.isAddFormOpen = true;
    },
    closeInputField: (state) => {
      state.isAddFormOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setRenamingSection: (state, action) => {
      state.renamingSection = action.payload;
    },
    resetRenamingSection: (state) => {
      state.renamingSection = null;
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
      state.allSections.push(action.payload);
    })
    .addCase(addSection.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // PATCH
    .addCase(renameSection.fulfilled, (state, action) => { 
      state.allSections = state.allSections.map(section => {
        return section._id === action.payload._id ? action.payload : section;
      });
    })
    .addCase(renameSection.rejected, (state, action) => {
      console.log(action.error.message);
    })
    // DELETE
    .addCase(removeSection.fulfilled, (state, action) => { 
      const updatedSections = state.allSections.filter(section => section._id !== action.payload._id);
      
      state.allSections = updatedSections;
    })
    .addCase(removeSection.rejected, (state, action) => {
      console.log(action.error.message);
    });
  }
});

const {
  openInputField,
  closeInputField,
  setActiveSection,
  setRenamingSection,
  resetRenamingSection
} = sectionsSlice.actions;

const sectionsReducer = sectionsSlice.reducer;

export {
  openInputField,
  closeInputField,
  setActiveSection,
  setRenamingSection,
  resetRenamingSection,
  setSections,
  addSection,
  renameSection,
  removeSection,
  sectionsReducer
};
