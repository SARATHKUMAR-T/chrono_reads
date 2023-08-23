import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginForm: false,
  signupForm: false,
  forgotForm: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggleLogin(state) {
      state.loginForm = !state.loginForm;
    },
    toggleSignup(state) {
      state.signupForm = !state.signupForm;
    },
    toggleForgot(state) {
      state.forgotForm = !state.forgotForm;
    },
  },
});

export const { toggleForgot, toggleSignup, toggleLogin } = formSlice.actions;

export default formSlice.reducer;
