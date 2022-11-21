import { createSlice } from '@reduxjs/toolkit';
import {
  getAllRefChildrenThunk,
  getCountChildrenThunk,
} from './referralsThunks';

const initialState = {
  childrensList: [],
  childrensCount: null,
  error: null,
  errorMessage: null,
  isLoading: false,
};

export const userRefsSlice = createSlice({
  name: 'referrals',
  initialState,
  reducers: {},
  extraReducers: {
    //* ОТРИАТИ ВСІХ РЕФЕРАЛІВ
    [getAllRefChildrenThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.childrensList = [...payload.children];
    },
    [getAllRefChildrenThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getAllRefChildrenThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
    //* ОТРИАТИ ЗАГАЛЬНУ КУЛЬКІСТЬ ДІТЕЙ
    [getCountChildrenThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.childrensCount = payload;
    },
    [getCountChildrenThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getCountChildrenThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
  },
});

export const refsReducer = userRefsSlice.reducer;
