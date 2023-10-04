import { createSlice } from "@reduxjs/toolkit";
import { restoreItems, storeItems } from "@/utils/local-storage";

let currentUserId;
let currentUserName;
let userPassword;
let startSessionTime;

if (typeof window !== 'undefined') {
  currentUserId = restoreItems().currentUserId;
  currentUserName = restoreItems().currentUserName;
  userPassword = restoreItems().userPassword;
  startSessionTime = restoreItems().startSessionTime;
}


const DEFAULT_STATE = {
  currentUserId: currentUserId || null,
  currentUserName: currentUserName || null,
  userPassword: userPassword || null,
  startSessionTime: startSessionTime || null,
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

