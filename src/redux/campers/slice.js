import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    selectedCampers: [],
    filterLocation: null,
    filterOptions: [],
    filterForm: null,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log('state', action.payload);

        state.loading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
