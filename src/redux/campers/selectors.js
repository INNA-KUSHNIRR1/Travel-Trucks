import { createSelector } from 'reselect';
export const selectFilteredCampers = state => state.filteredCampers;
export const selectFavoriteCampers = state => state.favoriteCampers;
export const selectCampers = state => state.campers;
export const selectCurrentPage = state => state.currentPage;
export const selectLimit = state => state.limit;
export const selectedCamper = state => state.selectedCamper;
export const selectLoading = state => state.loading;
export const selectError = state => state.error;
export const selectMessage = state => state.message;
export const selectAllCities = state => state.allCities;
export const selectTotalItems = state => state.totalItems;

export const selectTotalItemsMemo = createSelector(
  [selectTotalItems],
  totalItems => totalItems,
);

export const selectAllCitiesMemo = createSelector(
  [selectAllCities],
  allCities => allCities,
);

export const selectMessageMemo = createSelector(
  [selectMessage],
  message => message,
);
export const selectErrorMemo = createSelector([selectError], error => error);

export const selectLoadingMemo = createSelector(
  [selectLoading],
  loading => loading,
);

export const selectedCamperMemo = createSelector(
  [selectedCamper],
  selectedCamper => selectedCamper,
);

export const selectFilteredCampersMemo = createSelector(
  [selectFilteredCampers],
  filteredCampers => filteredCampers,
);

export const selectFavoriteCampersMemo = createSelector(
  [selectFavoriteCampers],
  favoriteCampers => favoriteCampers,
);

export const selectCampersByPage = createSelector(
  [selectCampers, selectCurrentPage, selectLimit],
  (campers, currentPage, limit) => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return campers.slice(startIndex, endIndex);
  },
);
