import styles from './styles.module.css';
import classNames from 'classnames';

import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/component";
import { authorizationSlice } from "@/store/features/authorization";
import { selectCurrentUser, selectCurrentUserPassword } from '@/store/features/authorization/selectors';
import { restoreItems } from '@/utils/local-storage';

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
  const dispatchUser = useDispatch();

  DEFAULT_FORM_VALUE.login = useSelector(selectCurrentUser);
  DEFAULT_FORM_VALUE.password = useSelector(selectCurrentUserPassword);

  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  
  
  
  
  

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.input_row)}>
        <label className={classNames(styles.input_title)}>Name</label>
        <input
          value={form.login}
          onChange={(event) =>
            dispatch({ type: "setLogin", payload: event.target.value })
          }
          className={classNames(styles.input)}
        />
      </div>
      <div className={classNames(styles.input_row)}>
        <label className={classNames(styles.input_title)}>Password</label>
        <input
          value={form.password}
          onChange={(event) =>
            dispatch({ type: "setPassword", payload: event.target.value })
          }
          className={classNames(styles.input)}
        />
      </div>

      <Button
        disabled={
          (!form.login || !form.password)
        }
        onClick={() => {
          dispatchUser(authorizationSlice.actions.login({login:form.login, password:form.password}));
          onLogin();
          document.body.style.overflow = "auto";
          document.querySelector('.main').style.opacity = "1";
        }}
        type = "auth_submit"
      >
        Log In
      </Button>
    </div>
  );
};
