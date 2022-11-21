import { createSlice } from '@reduxjs/toolkit';
import {
  userCurrentThunk,
  userLogInThunk,
  userLogOutThunk,
  userRegisterThunk,
} from './authThunks';

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
  admin: {
    name: null,
    rolle: null,
    nickName: null,
    email: null,
    isAdmin: null,
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
  reducers: {},
  extraReducers: {
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
    [userLogOutThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = initialState.user;
      state.tokens = initialState.tokens;
      state.admin = initialState.admin;
      state.isLoggedIn = payload.isLoggedIn;
      console.log(payload);
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
      state.user = { ...payload.user };
      state.admin = payload.admin?.email
        ? { ...payload.admin }
        : { ...initialState.admin };
    },
    [userCurrentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data.error;
    },
    [userCurrentThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
