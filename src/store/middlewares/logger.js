export const loggerMiddleware = (state) => (next) => (action) => {
  console.log(state.getState());
  

  next(action);
};
