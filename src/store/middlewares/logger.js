export const loggerMiddleware = () => (next) => (action) => {
  console.log(action);

  next(action);
};
