import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  type: 'undefined',
  message: '',
  actionPayload: null
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    enablePopup: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.actionPayload = action.payload.actionPayload;
    },
    disablePopup: (state) => {
      state.isOpen = false;
      state.type = 'undefined';
      state.message = '';
      state.actionPayload = null;
    }
  }
});

const { enablePopup, disablePopup } = popupSlice.actions;

const popupReducer = popupSlice.reducer;

export { enablePopup, disablePopup, popupReducer };
