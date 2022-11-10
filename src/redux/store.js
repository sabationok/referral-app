import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './auth/authSlice';
import { refsReducer } from './referrals/referralsSlice';
import { transactionsReduser } from './transactions/transationsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'tokens',
  storage,
  whitelist: ['tokens'],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  userAuth: persistedUserReducer,
  referral: refsReducer,
  transactions: transactionsReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
