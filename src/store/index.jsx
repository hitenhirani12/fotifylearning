// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import signupPopupReducer from './signupPopupSlice';

const store = configureStore({
  reducer: {
    signupPopup: signupPopupReducer,
  },
});

export default store;
