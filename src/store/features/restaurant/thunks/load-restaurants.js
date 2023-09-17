import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = createAsyncThunk(
  "restaurant/loadRestaurantsIfNotExist",
  async () => {
    const response = await fetch(`http://localhost:3001/api/restaurants/`);

    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
