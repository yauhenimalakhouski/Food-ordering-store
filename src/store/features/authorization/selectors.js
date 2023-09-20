export const selectAuthorizationModule = (state) => state.authorization;

export const selectCurrentUserId = (state) =>
  selectAuthorizationModule(state).currentUserId;

export const selectCurrentUser = (state) =>
  selectAuthorizationModule(state).currentUserName;

export const selectCurrentUserPassword = (state) => 
  selectAuthorizationModule(state).userPassword;

export const selectStartSessionTime = (state) =>
  selectAuthorizationModule(state).startSessionTime;
