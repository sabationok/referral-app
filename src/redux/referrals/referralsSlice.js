import { createSlice } from '@reduxjs/toolkit';
import {
  getAllRefChildrenThunk,
  getCountChildrenThunk,
} from './referralsThunks';

const initialState = {
  refChildren: [],
  refsChildrenCount: null,
  error: null,
  errorMessage: null,
  isLoading: false,
};

export const userRefsSlice = createSlice({
  name: 'referrals',
  initialState,
  extraReducers: {
    //* ОТРИАТИ ВСІХ РЕФЕРАЛІВ
    [getAllRefChildrenThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, 'отримано всіх дітей');
      state.refChildren = [...payload];
    },
    [getAllRefChildrenThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getAllRefChildrenThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, 'НЕ отримано всіх дітей');
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
    //* ОТРИАТИ ЗАГАЛЬНУ КУЛЬКІСТЬ ДІТЕЙ
    [getAllRefChildrenThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, 'отримано кількість всіх дітей');
      state.refsChildrenCount = payload.count;
    },
    [getAllRefChildrenThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getAllRefChildrenThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, 'НЕ отримано кількість всіх дітей');
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
  },
});

export const refsReducer = userRefsSlice.reducer;
