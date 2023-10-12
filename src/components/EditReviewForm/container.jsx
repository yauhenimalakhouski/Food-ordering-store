import { ReviewForm } from "../ReviewForm/component";
import { useUpdateReviewMutation } from "../../store/services/api";
import { useEffect } from "react";
import { Spinner } from "../Spinner/component";

export const EditReviewFormContainer = ({
  review,
  onSaveForm,
  onCancelForm,
}) => {
  const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onSaveForm();
    }
  }, [isSuccess, onSaveForm]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ReviewForm
      review={review}
      onCancelForm={onCancelForm}
      onSaveForm={(updatedReview) => {
        updateReview({ review: updatedReview, reviewId: review.id });
      }}
    />
  );
};
