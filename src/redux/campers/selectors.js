export const selectCampers = state => {
  //   console.log('state.campers', state.campers);

  return state.campers;
};

export const selectedCamper = state => {
  console.log('state.selectedCamper', state.selectedCamper);
  return state.selectedCamper;
};

export const selectLoading = state => {
  console.log('state.loading', state.loading);
  return state.loading;
};

export const selectError = state => {
  console.log('state.error', state.error);
  return state.error;
};

export const selectedCampers = state => {
  console.log('state.selectedCampers', state.selectedCampers);
  return state.selectedCampers;
};
