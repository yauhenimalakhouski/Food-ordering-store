import ReviewsContainer from "@/components/Reviews/container";

export default async function ReviewsPage({ params: { restaurantId } }) {
    return (
        <ReviewsContainer restaurantId={restaurantId}/>
    );
  }