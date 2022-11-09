import { createSlice } from '@reduxjs/toolkit';
import {
  userCurrentThunk,
  userLogInThunk,
  userLogOutThunk,
  userRegisterThunk,
} from './authThunks';
import { authSignOutAction } from './authAction';

const initialState = {
  user: {
    name: null,
    email: null,
    id: null,
    parentId: null,
    phone: null,
    banned: true,
    banReason: null,
    role: null,
    children: null,
  },
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: {
    [authSignOutAction]: (state, action) => {
      state.user = initialState.user;
      state.tokens = initialState.tokens;
      state.isLoggedIn = false;
    },
    //* РЕЄСТРАЦІЯ
    [userRegisterThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      // state.tokens.accessToken = payload.accessToken;
      // state.tokens.refreshToken = payload.refreshToken;
    },
    [userRegisterThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userRegisterThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ВХІД
    [userLogInThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.tokens.accessToken = payload.accessToken;
      state.tokens.refreshToken = payload.refreshToken;
    },
    [userLogInThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
    [userLogInThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [userLogOutThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.token = null;
    },
    [userLogOutThunk.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
    },
    [userLogOutThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [userCurrentThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = { ...payload };
      // console.log('current user data', payload);
    },
    [userCurrentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userCurrentThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
