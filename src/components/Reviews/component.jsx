"use client";

import { NewReviewFormContainer } from "../NewReviewForm/container";
import { RestaurantReview } from "../RestaurantReview/component";
import { Review } from "../Review/component";
import styles from "./styles.module.css";

export const Reviews = ({ reviewsFromOtherUsers, currentUserreviews, restaurantId }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {reviewsFromOtherUsers?.map((review) => (
          <Review 
          key = {review.id} 
          review={review}
          className={styles.review}
          />
        ))}
      </div>
      <div>
        {currentUserreviews?.map((review) => (
          <RestaurantReview
            key={review.id}
            review={review}
            className={styles.review}
          />
        ))}
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
