import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadRestaurantsIfNotExist } from "./thunks/load-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  reducers: {
    addReview: (state, { payload: { restaurantId, reviewId } }) => {
      restaurantEntityAdapter.updateOne(state, {
        id: restaurantId,
        changes: {
          reviews: [...state.entities[restaurantId].reviews, reviewId],
        },
      });
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      loadRestaurantsIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        restaurantEntityAdapter.setAll(state, payload);
      }
    ),
});
