import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  currentUser: undefined,
  startSessionTime: undefined,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: DEFAULT_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
      state.startSessionTime = Date.now();
    },
    logout: (state) => {
      state.currentUser = null;
      state.startSessionTime = null;
    },
  },
});
