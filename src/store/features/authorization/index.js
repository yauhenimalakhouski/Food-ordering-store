
import { storeItems } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";



const DEFAULT_STATE = {
  currentUserName: localStorage.getItem("currentUser") || null,
  userPassword: localStorage.getItem("currentUserPassword") || null,
  startSessionTime: localStorage.getItem("userStartSessionTime") || null,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: DEFAULT_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.currentUserName = payload.login;
      state.userPassword = payload.password;
      state.startSessionTime = Date.now();
      // localStorage.setItem("userStartSessionTime", state.startSessionTime);
      storeItems(state);
    },
    logout: (state) => {
      state.currentUserName = null;
      state.userPassword = null;
      state.startSessionTime = null;
      
    },
  },
});

