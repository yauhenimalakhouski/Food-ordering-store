import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantReviewsById = (state, id) =>
  selectRestaurantById(state, id).reviews;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantsLoading = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsRestaurantLoadingFailed = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUS.failed;
