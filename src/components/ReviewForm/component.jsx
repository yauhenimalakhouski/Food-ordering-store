"use client";

import { useReducer } from "react";

import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentUserId } from "@/store/features/authorization/selectors";

const DEFAULT_VALUE = {
  text: "",
  rating: 5,
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "clearForm":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviewForm = ({ review, onSaveForm, onCancelForm }) => {

  const userName = useSelector(selectCurrentUser);
  
  const [form, dispatch] = useReducer(reducer, review ? review : (DEFAULT_VALUE));
  if(!review){
    if(userName){
      form.name = userName;
    } 
  }
  
  const userId = useSelector(selectCurrentUserId);

  return (
    <div>
      {!review?.id && (
        <div className={styles.field}>
          <label>Name:</label>
          <input
            disabled = {!userName}
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
      )}
      <div className={styles.field}>
        <label>Text</label>
        <input
          disabled = {!userName}
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label>Rating</label>
        <input
          disabled = {!userName}
          value={form.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
      <Button
        disabled = {!userName}
        onClick={() => {
          onSaveForm({
            ...form,
            userId: userId,
          });
          dispatch({ type: "clearForm" });
        }}
      >
        Save
      </Button>
      {onCancelForm && <Button onClick={onCancelForm}>Cancel</Button>}
    </div>
  );
};
