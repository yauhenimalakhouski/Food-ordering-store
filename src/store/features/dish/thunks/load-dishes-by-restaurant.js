// import { selectRestaurantMenuById } from "../../restaurant/selectors";
// import { selectDishIds } from "../selectors";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const loadDishesByRestaurantIfNotExist = createAsyncThunk(
//   "review/loadDishesByRestaurantIfNotExist",
//   async (restaurantId) => {
//     const response = await fetch(
//       `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
//     );

//     return await response.json();
//   },
//   {
//     condition: (restaurantId, { getState }) => {
//       const state = getState();
//       const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
//       const dishIds = selectDishIds(state);

//       return (
//         restaurantMenu &&
//         restaurantMenu.some((reviewId) => !dishIds.includes(reviewId))
//       );
//     },
//   }
// );
