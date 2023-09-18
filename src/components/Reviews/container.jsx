import { fetchRestaurantReviews } from "@/services/api";
import { Reviews } from "./component";


export default async function ReviewsContainer({restaurantId}){
  const reviews = await fetchRestaurantReviews(restaurantId);

  if(!reviews?.length) {
    return null;
  }
  

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
