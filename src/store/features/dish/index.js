// import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
// import { loadDishesByRestaurantIfNotExist } from "./thunks/load-dishes-by-restaurant";

// const dishEntityAdapter = createEntityAdapter();

// export const dishSlice = createSlice({
//   name: "dish",
//   initialState: dishEntityAdapter.getInitialState(),
//   extraReducers: (builder) =>
//     builder.addCase(
//       loadDishesByRestaurantIfNotExist.fulfilled,
//       (state, { payload } = {}) => {
//         dishEntityAdapter.setMany(state, payload);
//       }
//     ),
// });
