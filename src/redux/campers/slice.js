import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getByIdCamperThink } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    selectedCampers: [],
    selectedCamper: null,
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
        // console.log('state', action.payload);

        state.loading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getByIdCamperThink.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getByIdCamperThink.fulfilled, (state, action) => {
        state.selectedCamper = action.payload || null;
        state.loading = false;
        state.error = null;
      })
      .addCase(getByIdCamperThink.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Something went wrong';
      });
  },
});

export const campersReducer = campersSlice.reducer;
