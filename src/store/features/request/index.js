import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: LOADING_STATUS.loading,
          };
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: LOADING_STATUS.finished,
          };
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { meta, error }) => {
          state[meta.requestId] = {
            status: LOADING_STATUS.failed,
            error,
          };
        }
      ),
});
