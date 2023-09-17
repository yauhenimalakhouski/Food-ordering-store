import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) =>
  selectDishModule(state).entities[id];

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishesLoading = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsDishLoadingFailed = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUS.failed;
