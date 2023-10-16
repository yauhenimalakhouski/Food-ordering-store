"use client";

import { useReducer } from "react";

import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserId,
} from "@/store/features/authorization/selectors";

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

  const [form, dispatch] = useReducer(reducer, review ? review : DEFAULT_VALUE);
  if (!review) {
    if (userName) {
      form.name = userName;
    }
  }

  const userId = useSelector(selectCurrentUserId);

  return (
    <div className={styles.root}>
      <form method="post" action="/">
        {!review?.id && (
          <div>
            <label htmlFor="name" className={styles.label}>
              <span className={styles.required}>Name: *</span>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required="required"
                tabIndex="1"
                disabled={!userName}
                value={form.name}
                onChange={(event) =>
                  dispatch({ type: "setName", payload: event.target.value })
                }
              />
            </label>
          </div>
        )}
        <div>
          <label htmlFor="rating" className={styles.label}>
            <span className={styles.required}>Rating: *</span>
            <input
              className={styles.input}
              type="text"
              id="rating"
              name="rating"
              placeholder="Rating"
              required="required"
              tabIndex="2"
              disabled={!userName}
              value={form.rating}
              onChange={(event) =>
                dispatch({ type: "setRating", payload: event.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="review" className={styles.label}>
            <span className={styles.required}>Review: *</span>
            <textarea
              className={styles.textarea}
              id="review"
              name="review"
              placeholder="Please write your review here."
              required="required"
              tabIndex="3"
              disabled={!userName}
              value={form.text}
              onChange={(event) =>
                dispatch({ type: "setText", payload: event.target.value })
              }
            ></textarea>
          </label>
        </div>
        <Button
          type="btn_confirm"
          disabled={!userName}
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
      </form>
    </div>
  );
};
