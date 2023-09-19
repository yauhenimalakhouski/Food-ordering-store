import { useReducer } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../Button/component";
import { authorizationSlice } from "@/store/features/authorization";

const DEFAULT_FORM_VALUE = {
  login: "",
  password: "",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setLogin":
      return { ...state, login: payload };
    case "setPassword":
      return { ...state, password: payload };

    default:
      return state;
  }
};

export const LoginForm = ({ onLogin }) => {

  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  
  const dispatchUser = useDispatch();

  return (
    <div>
      <div>
        <label>Login</label>
        <input
          value={form.login}
          onChange={(event) =>
            dispatch({ type: "setLogin", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={form.password}
          onChange={(event) =>
            dispatch({ type: "setPassword", payload: event.target.value })
          }
        />
      </div>

      <Button
        disabled={!form.login || !form.password}
        onClick={() => {
          dispatchUser(authorizationSlice.actions.login({login:form.login, password:form.password}));
          onLogin();
        }}
      >
        Login
      </Button>
    </div>
  );
};
