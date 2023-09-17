export const selectCartModule = (state) => state.cart;

export const selectDishAmountById = (state, id) =>
  selectCartModule(state)[id] || 0;

export const selectCartDishIds = (state) =>
  Object.entries(selectCartModule(state)).reduce((acc, [dishId, amount]) => {
    if (amount > 0) {
      acc.push(dishId);
    }
    return acc;
  }, []);
