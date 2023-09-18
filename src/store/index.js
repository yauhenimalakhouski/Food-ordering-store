import { cartSlice } from "./features/cart";
import { restaurantSlice } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { reviewSlice } from "./features/review";
import { authorizationSlice } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { requestSlice } from "./features/request";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    review: reviewSlice.reducer,
    authorization: authorizationSlice.reducer,
    request: requestSlice.reducer,
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
    checkAuthorization,
  ],
});
