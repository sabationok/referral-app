import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/userApi';
import Notiflix from 'notiflix';

export const getAllTransactionsThunk = createAsyncThunk(
  'transactions/all',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/transaction/all`);
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getBlockedBonusesThunk = createAsyncThunk(
  'transactions/BlockedBonuses',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/transaction/blocked/bonuses`);
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getActiveBonusesThunk = createAsyncThunk(
  'transactions/ActiveBonuses',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.get(`/transaction/active/bonuses`);
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const postBonusTransferThunk = createAsyncThunk(
  'transactions/BonusTransfer',
  async (transferData, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.post(
        `/transaction/transfer`,
        transferData
      );
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const postBonusAccrualThunk = createAsyncThunk(
  'transactions/Accrual',
  async (accrualData, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.userAuth.tokens.accessToken);
    try {
      const response = await userApi.post(`/transaction/Accrual`, accrualData);
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
