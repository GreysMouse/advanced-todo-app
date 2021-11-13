import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'undefined'
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    enablePopup: (state, action) => {
      state.type = action.payload;
    },
    disablePopup: (state) => {
      state.type = 'undefined';
    }
  }
});

const { enablePopup, disablePopup } = popupSlice.actions;

const popupReducer = popupSlice.reducer;

export { enablePopup, disablePopup, popupReducer };
