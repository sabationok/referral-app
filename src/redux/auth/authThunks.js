import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/userApi';

export const userRegisterThunk = createAsyncThunk(
  'userAuth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await userApi.post(`/auth/registration`, newUser);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const userLogInThunk = createAsyncThunk(
  'userAuth/login',
  async (loginData, thunkAPI) => {
    try {
      const response = await userApi.post(`/auth/login`, loginData);
      token.set(response.data.accessToken);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOutThunk = createAsyncThunk(
  'userAuth/logout',
  async (_, thunkAPI) => {
    try {
      await userApi.post(`/users/logout`);
      token.unset();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userCurrentThunk = createAsyncThunk(
  'userAuth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/user/get`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
