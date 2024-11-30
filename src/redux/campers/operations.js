import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'fetchAll',
  async ({ page = 1, limit = 10, query = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `campers?${query}&page=${page}&limit=${limit}`,
      );

      return {
        items: response.data.items,
        total: response.data.total,
        message: '',
      };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue({
          message: 'No campers found for the given filters',
          items: [],
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getByIdCamperThink = createAsyncThunk(
  'getById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
