import { selectRequestStatus } from "@/store/features/request/selectors";
import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";


export function useMakeRequest(thunk) {
  const requestRef = useRef();
  const status = useSelector((state) =>
    selectRequestStatus(state, requestRef.current?.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      requestRef.current = dispatch(thunk(...params));
    },
    [dispatch, thunk]
  );

  return [status, makeRequest];
}
