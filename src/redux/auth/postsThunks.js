import { createAsyncThunk } from '@reduxjs/toolkit';
import crmApi from '../../services/crmApi';
// import { token } from '../../services/crmApi';

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await crmApi.get(`/posts`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddPost = createAsyncThunk(
  'posts/fetchAddPost',
  async (newPost, thunkAPI) => {
    try {
      const response = await crmApi.post(`/posts`, newPost);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeletePost = createAsyncThunk(
  'posts/fetchDeletePost',
  async (postID, thunkAPI) => {
    try {
      const response = await crmApi.delete(`/posts/${postID}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchEditPost = createAsyncThunk(
  'posts/fetchEditPost',
  async (editedPost, thunkAPI) => {
    console.log(editedPost);
    try {
      const response = await crmApi.put(
        `/posts/${editedPost.id}`,
        editedPost.data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
