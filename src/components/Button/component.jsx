import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, type, switchType, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className, {
        [styles.tabs]: type ==="tabs", 
        [styles.authoriazation]: type ==="authoriazation",
        [styles.btn_minus]: type ==="btn_minus",
        [styles.btn_plus]: type ==="btn_plus",
        [styles.tab]: type ==="tab",
        [styles.btn_theme]: type ==="btn_theme",
        [styles.dark]: switchType ==="dark",
        [styles.light]: switchType ==="light",
        [styles.auth_submit]: type ==="auth_submit",
        [styles.review_form_btn]: type ==="review_form_btn",
        [styles.btn_confirm]: type ==="btn_confirm",
        })}>
      {children}
    </button>
  );
};
