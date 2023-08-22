import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  authentificated: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      //-------------REGISTER-------------
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        // state.authentificated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.error = null;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------------LOGIN-------------
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        // state.authentificated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.error = null;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------------LOGOUT-------------
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        // state.error = null;
        state.authentificated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------------REFRESH-------------
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        // state.error = null;
        state.userData = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
