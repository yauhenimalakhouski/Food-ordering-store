import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantSlice } from "../../restaurant";

export const updateReview = createAsyncThunk(
  "review/updateReview",
  async ({ reviewId, review }, { dispatch }) => {
    const response = await fetch(
      `http://localhost:3001/api/review/${reviewId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(review),
      }
    );

    const review = await response.json();

    dispatch(
      restaurantSlice.actions.updateReview({ restaurantId, reviewId: review.id })
    );

    return review;
  }
);
