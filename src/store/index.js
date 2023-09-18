import { cartSlice } from "./features/cart";
import { loggerMiddleware } from "./middlewares/logger";
import { authorizationSlice } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    authorization: authorizationSlice.reducer,
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
    checkAuthorization,
  ],
});
