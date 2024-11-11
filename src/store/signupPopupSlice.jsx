// src/store/signupPopupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
};

const signupPopupSlice = createSlice({
  name: 'signupPopup',
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
  },
});

export const { togglePopup } = signupPopupSlice.actions;

export default signupPopupSlice.reducer;
