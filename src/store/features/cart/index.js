import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    incrementDish: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrementDish: (state, { payload }) => {
      state[payload] = (state[payload] || 0) > 0 ? state[payload] - 1 : 0;
    },
  },
});
