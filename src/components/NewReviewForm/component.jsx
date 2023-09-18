import classNames from "classnames";

import styles from "./styles.module.css";
import { ReviewForm } from "../ReviewForm/component";

export const NewReviewForm = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ReviewForm {...props} />
    </div>
  );
};
