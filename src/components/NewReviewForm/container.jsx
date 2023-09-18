"use client";


import { useMakeRequest } from "@/hooks/use-make-request";
import { NewReviewForm } from "./component";
import { createReview as createReviewThunk } from "@/store/features/review/thunks/create-review";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [status, createReview] = useMakeRequest(createReviewThunk);

  // if (isLoading) {
  //   return <span>Saving...</span>;
  // }

  return (
    <NewReviewForm
      onSaveForm={(newReview) => createReview({ newReview, restaurantId })}
    />
  );
};
