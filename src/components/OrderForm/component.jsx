import { selectCurrentUser } from "@/store/features/authorization/selectors";
import { cartSlice } from "@/store/features/cart";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/component";
import Link from "next/link";
import styles from "./styles.module.css";
import { Spinner } from "../Spinner/component";

const DEFAULT_VALUE = {
  name: "",
  phone: "",
  adress: "",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setPhone":
      return { ...state, phone: payload };
    case "setAdress":
      return { ...state, adress: payload };
    default:
      return state;
  }
};

export const OrderForm = () => {
  const dispatchAction = useDispatch();
  const userName = useSelector(selectCurrentUser);

  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  if (userName) {
    form.name = userName;
  }
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title_form}>Nice to Meet You!</h1>
        <h4 className={styles.secondary_title}>
          Fill out the form to complete your order!
        </h4>
      </div>
      <form method="post" action="#">
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
              value={form.name}
              onChange={(event) =>
                dispatch({ type: "setName", payload: event.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone" className={styles.label}>
            <span className={styles.required}>Phone number: *</span>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required="required"
              tabIndex="2"
              value={form.phone}
              onChange={(event) =>
                dispatch({ type: "setPhone", payload: event.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="adress" className={styles.label}>
            <span className={styles.required}>Your address: *</span>
            <textarea
              className={styles.textarea}
              id="adress"
              name="adress"
              placeholder="Your address"
              required="required"
              tabIndex="3"
              resize="none"
              value={form.adress}
              onChange={(event) =>
                dispatch({ type: "setAdress", payload: event.target.value })
              }
            />
          </label>
        </div>
        <Link href={"/ordered"}>
          <Button
            type="btn_confirm"
            onClick={() => {
              dispatchAction(cartSlice.actions.clearCart());
            }}
          >
            Order
          </Button>
        </Link>
      </form>
    </div>
  );
};
