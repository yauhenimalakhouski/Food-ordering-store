import { createSlice } from "@reduxjs/toolkit";
import { restoreItems, storeItems } from "@/utils/local-storage";

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
    initial: (state) => {
      state.currentUserId = restoreItems().currentUserId;
      state.currentUserName = restoreItems().currentUserName;
      state.userPassword = restoreItems().userPassword;
      state.startSessionTime = restoreItems().startSessionTime;
    },
    login: (state, { payload }) => {
      state.currentUserId = Date.now();
      state.currentUserName = payload.login;
      state.userPassword = payload.password;
      state.startSessionTime = Date.now();
      storeItems(state);
    },
    logout: (state) => {
      state.currentUserId = null;
      state.currentUserName = null;
      state.userPassword = null;
      state.startSessionTime = null;
    },
  },
});

