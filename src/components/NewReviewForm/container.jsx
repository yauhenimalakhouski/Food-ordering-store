import { useCreateReviewMutation } from "@/store/services/api";
import { NewReviewForm } from "./component";
import { Spinner } from "../Spinner/component";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <NewReviewForm
      onSaveForm={(newReview) => createReview({ newReview, restaurantId })}
    />
  );
}; 