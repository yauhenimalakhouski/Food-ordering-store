"use client";

import { useGetReviewsQuery } from "@/store/services/api";
import { Reviews } from "./component";
import { Spinner } from "../Spinner/component";

export default function ReviewsContainer({ restaurantId }) {
  const {
    data: reviews,
    isLoading,
    isSuccess,
  } = useGetReviewsQuery(restaurantId, {
    skip: !restaurantId,
  });

  if (isLoading) {
    return <Spinner />;
  }

  const reviewsFromOtherUsers = reviews.filter(
    (review) => typeof review.userId !== "number"
  );
  const currentUserreviews = reviews.filter(
    (review) => typeof review.userId === "number"
  );

  return (
    <Reviews
      reviewsFromOtherUsers={reviewsFromOtherUsers}
      currentUserreviews={currentUserreviews}
      restaurantId={restaurantId}
    />
  );
}
