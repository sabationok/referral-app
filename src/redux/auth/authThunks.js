import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/userApi';
import { admins } from 'data/admins';

import { toast } from 'react-toastify';

export const userRegisterThunk = createAsyncThunk(
  'userAuth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await userApi.post(`/auth/registration`, newUser);
      toast.success(`Ви зареєстровані під іменем "${newUser?.name}".`);
      toast.info(`Тепер Ви моеже увійти до системи.".`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data?.message);
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
      toast.success(`Вітаємо у системі.`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data?.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOutThunk = createAsyncThunk(
  'userAuth/logout',
  async (_, thunkAPI) => {
    try {
      // await userApi.post(`/users/logout`);
      token.unset();
      toast.success(`До зустрічі. Вдалого Вам дня.`);
      return { isLoggedIn: false };
    } catch (error) {
      toast.error(error.response.data.message);
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
      const adminUser = admins.find(
        admin => admin.email === response.data.email
      );
      // toast.success(
      //   `Ви аутентифіковані під іменем ${response.data?.name.toUpperCase()}`
      // );
      return { user: response.data, admin: adminUser };
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
