import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  currentUserId: null,
  currentUserName: null,
  userPassword: null,
  startSessionTime: null,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: DEFAULT_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.currentUserId = Date.now();
      state.currentUserName = payload.login;
      state.userPassword = payload.password;
      state.startSessionTime = Date.now();
    },
    logout: (state) => {
      state.currentUserId = null;
      state.currentUserName = null;
      state.userPassword = null;
      state.startSessionTime = null;
    },
  },
});

