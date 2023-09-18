import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

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
    updateReview: (state, {payload: {restaurantId, reviewId}}) => {
      restaurantEntityAdapter.updateOne(state, {
        id: reviewId,
        changes: {
          reviews: [...state.entities[restaurantId], reviewId],
        },
      });
    },
  },
});
