import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectRequestModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) =>
  selectRequestModule(state)[requestId]?.status || LOADING_STATUS.idle;
