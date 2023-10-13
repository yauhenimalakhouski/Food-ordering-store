import { authorizationSlice } from "../features/authorization";
import { selectStartSessionTime } from "../features/authorization/selectors";
import { cartSlice } from "../features/cart";



const AUTHORIZED_ACTIONS = [
  cartSlice.actions.incrementDish.type,
  cartSlice.actions.decrementDish.type,
];
const SESSION_LIFE_TIME = 60 * 60 * 1000;

export const checkAuthorization =
  (store) =>
  (next) =>
  (action = {}) => {
    if (!AUTHORIZED_ACTIONS.includes(action.type)) {
      return next(action);
    }

    const startSessionTime = selectStartSessionTime(store.getState());

    if (startSessionTime && Date.now() - startSessionTime < SESSION_LIFE_TIME) {
      return next(action);
    }
    alert('Authorize to add dishes to your order');
    store.dispatch(authorizationSlice.actions.logout());
  };

