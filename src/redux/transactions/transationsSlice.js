import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTransactionsThunk,
  postBonusTransferThunk,
  postBonusAccrualThunk,
  getBlockedBonusesThunk,
  getActiveBonusesThunk,
} from './transactionsThunks';
const initialState = {
  transactions: [],
  lastTransaction: {},
  lastCreatedBonus: {},
  bonuses: {
    activeBonuses: 0,
    blockedBonuses: { total: 0, cashback: 0, referral: 0, extra: 0 },
  },
  error: null,
  errorMessage: null,
  isLoading: false,
};

export const transactionsSlice = createSlice({
  name: 'referrals',
  initialState,
  reducers: {},
  extraReducers: {
    //* ОТРИАТИ ВСІ ТРАНЗАКЦІЇ
    [getAllTransactionsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.transactions = [...payload];
    },
    [getAllTransactionsThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getAllTransactionsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
    //* ОТРИАТИ ЗАГАЛЬНУ КУЛЬКІСТЬ BLOCKED BONUSES
    [getBlockedBonusesThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bonuses.blockedBonuses = { ...payload };
    },
    [getBlockedBonusesThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getBlockedBonusesThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
    //* ОТРИАТИ ЗАГАЛЬНУ КУЛЬКІСТЬ ACTIVE BONUSES
    [getActiveBonusesThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bonuses.activeBonuses = payload.active;
    },
    [getActiveBonusesThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getActiveBonusesThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
    },
    //* CREATE BONUS TRANSFER
    [postBonusTransferThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.lastTransaction = { ...payload };
    },
    [postBonusTransferThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [postBonusTransferThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
      //? request data
      // {
      //   "fromUser": 13,
      //   "amount": 133,
      //   "notes": "any notes",
      //   "toUser": 25
      // }
      //? response data
      // {
      //   "id": "739c1aa1-485b-42f8-8273-f054f8ef1afb",
      //   "amount": 133,
      //   "createdAt": "2022-05-19T20:57:28.932Z",
      //   "notes": "any notes",
      //   "amountStatus": "active",
      //   "type": "USER_TRANSFER",
      //   "transactionStatus": "credit"
      // }
    },
    //* CREATE USER BONUS BY USER ID
    [postBonusAccrualThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.lastCreatedBonus = { ...payload };
      console.log(payload);
    },
    [postBonusAccrualThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [postBonusAccrualThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.errorMessage = payload.message;
      //? request data
      // {
      //   "fromUser": 13,
      //   "amount": 133,
      //   "notes": "any notes",
      //   "toUser": 25
      // }
      //? response data
      // {
      //   "id": "739c1aa1-485b-42f8-8273-f054f8ef1afb",
      //   "amount": 133,
      //   "createdAt": "2022-05-19T20:57:28.932Z",
      //   "notes": "any notes",
      //   "amountStatus": "active",
      //   "type": "USER_TRANSFER",
      //   "transactionStatus": "credit"
      // }
    },
  },
});

export const transactionsReduser = transactionsSlice.reducer;
