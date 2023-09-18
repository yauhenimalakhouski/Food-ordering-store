import { selectRequestStatus } from "@/store/features/request/selectors";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useRequest(thunk, ...params) {
  const requestRef = useRef();
  const status = useSelector((state) =>
    selectRequestStatus(state, requestRef.current?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    requestRef.current = dispatch(thunk(...params));

    return () => {
      requestRef.current.abort();
    };
  }, [dispatch, ...params, thunk]);

  return status;
}
