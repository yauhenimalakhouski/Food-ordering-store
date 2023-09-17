"use client"

import { useState } from "react";
import { useCallback } from "react";
import { EditReviewFormContainer } from "../EditReviewForm/container";
import { Review } from "../Review/component";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import classNames from "classnames";

export const RestaurantReview = ({ review, className }) => {
  const [isEditable, setIsEditable] = useState(false);

  const cancelEdit = useCallback(() => {
    setIsEditable(false);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      {/* {isEditable ? (
        <EditReviewFormContainer
          review={review}
          onSaveForm={cancelEdit}
          onCancelForm={cancelEdit}
        />
      ) : (
        <Review review={review} />
      )} */}
       <Review review={review} />
      {!isEditable && <Button onClick={() => setIsEditable(true)}>Edit</Button>}
    </div>
  );
};
