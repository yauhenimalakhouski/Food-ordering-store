import classNames from "classnames";

import styles from "./styles.module.css";
import { UserContainer } from "../User/container";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  return (
    <div className={classNames(className, styles.root)}>
      <div className={styles.user_and_rating_wrapper}>
        <UserContainer userId={review.userId} />
        <div className={styles.rating}>Rating: {review.rating}</div>
      </div>
      <div className={styles.text}>Review: {review.text}</div>
    </div>
  );
};
