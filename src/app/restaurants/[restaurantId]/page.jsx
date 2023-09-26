
import styles from "./styles.module.css";
import { fetchRestaurant} from "@/services/api";
// import MenuContainer from "@/components/Menu/container";
// import ReviewsContainer from "@/components/Reviews/container";


export default async function RestaurantPage({ params: { restaurantId } }) {
  const restaurant = await fetchRestaurant(restaurantId);
  

  return (
  <div>
    <div className={styles.root}>{restaurant?.name}</div>
    {/* <MenuContainer restaurantId={restaurantId}/>
    <ReviewsContainer restaurantId={restaurantId}/> */}
  </div>
  );
}



// return <div className={styles.root}>{restaurant?.name}</div>;