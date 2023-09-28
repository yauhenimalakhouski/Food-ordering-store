import styles from "./styles.module.css";
// import { fetchRestaurant} from "@/services/api";
// import MenuContainer from "@/components/Menu/container";
// import ReviewsContainer from "@/components/Reviews/container";
// export default async function RestaurantPage({ params: { restaurantId } }) {

export default async function RestaurantPage({children}) {
  // const restaurant = await fetchRestaurant(restaurantId);
  

  return (
  <div className={styles.root}>
    <h2 className={styles.title}>{restaurant?.name}</h2>
    {/* <MenuContainer restaurantId={restaurantId}/>
    <ReviewsContainer restaurantId={restaurantId}/> */}
  </div>
  );
}


