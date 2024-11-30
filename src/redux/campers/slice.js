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
    filteredCampers: [],
    favoriteCampers: JSON.parse(localStorage.getItem('favoriteCampers')) || [],
    allCities: [],
    currentPage: 1,
    limit: 10,
    totalItems: 0,
    loading: false,
    error: null,
    message: '',
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAllCities: (state, action) => {
      state.allCities = action.payload;
    },
    setFilter(state, action) {
      state.filterLocation = action.payload.location || null;
      state.filterOptions = action.payload.options || [];
      state.filterForm = action.payload.form || null;
    },
    setFilteredCampers(state, action) {
      state.filteredCampers = action.payload || [];
    },
    clearMessage(state) {
      state.message = '';
    },
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.favoriteCampers.includes(camperId)) {
        state.favoriteCampers = state.favoriteCampers.filter(
          id => id !== camperId,
        );
      } else {
        state.favoriteCampers.push(camperId);
      }
    },
    resetFilters(state) {
      state.filterLocation = null;
      state.filterOptions = [];
      state.filterForm = null;
      state.filteredCampers = [];
      state.message = '';
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
        state.message = '';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalItems = action.payload.total || 0; //оновлюємо загальну кількість

        if (state.currentPage === 1) {
          state.campers = action.payload.items;
        } else {
          state.campers = [...state.campers, ...action.payload.items];
        }

        if (state.allCities.length === 0) {
          const cities = [
            ...new Set(action.payload.items.map(camper => camper.location)),
          ];
          state.allCities = cities;
        }

        // якщо це просто додавання нових кемперів (не фільтрація)
        if (!action.payload.filtersApplied) {
          state.message = '';
          return; // завершуємо обрабку, щоб не чипати `filteredCampers`
        }
        // якщо прийшло повідомлення, що нічого не знайдено
        if (action.payload.message) {
          state.message = action.payload.message;
          state.filteredCampers = []; // Очищуємо відфільтровані дані
        } else {
          state.message = '';
          state.filteredCampers = action.payload.items || [];
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        console.log('error', action.payload);
        if (typeof action.payload === 'object' && action.payload.message) {
          // якщо це 404 и прийшов об'єкт з повідомленням
          state.message = action.payload.message;
          state.filteredCampers = [];
        } else {
          // Обрабляємо інші помилки
          state.error = action.payload || 'Something went wrong';
          state.message = '';
          state.filteredCampers = [];
        }
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

export const {
  resetFilters,
  setLimit,
  setPage,
  setAllCities,
  setFilter,
  setFilteredCampers,
  clearMessage,
  toggleFavorite,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
