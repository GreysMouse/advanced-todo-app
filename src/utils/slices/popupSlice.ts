import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    enablePopup: (state) => {
      state.isOpen = true;
    },
    disablePopup: (state) => {
      state.isOpen = false;
    }
  }
});

const { enablePopup, disablePopup } = popupSlice.actions;

const popupReducer = popupSlice.reducer;

export { enablePopup, disablePopup, popupReducer };
