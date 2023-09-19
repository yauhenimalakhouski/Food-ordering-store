import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  currentUser: localStorage.getItem("currentUser"),
  userPassword: localStorage.getItem("currentUserPassword"),
  startSessionTime: localStorage.getItem("userStartSessionTime"),
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: DEFAULT_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload.login;
      state.userPassword = payload.password;
      state.startSessionTime = Date.now();
      localStorage.setItem("userStartSessionTime", state.startSessionTime);
    },
    logout: (state) => {
      state.currentUser = null;
      state.userPassword = null;
      state.startSessionTime = null;
      
    },
  },
});

