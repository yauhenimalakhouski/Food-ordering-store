export const selectAuthorizationModule = (state) => state.authorization;

export const selectCurrentUser = (state) =>
  selectAuthorizationModule(state).currentUser;

export const selectStartSessionTime = (state) =>
  selectAuthorizationModule(state).startSessionTime;
