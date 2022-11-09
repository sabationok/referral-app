import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/userApi';



export const getAllRefChildrenThunk = createAsyncThunk(
  'userAuth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/referral/children`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCountChildrenThunk = createAsyncThunk(
  'userAuth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/referral/count`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
