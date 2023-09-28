import { fetchRestaurant } from "@/services/api";
import Link from "next/link";
import styles from "./styles.module.css";

export default async function RestaurantsLayout({ params: { restaurantId }, children }) {
  const restaurant = await fetchRestaurant(restaurantId);

  return (
    <div>
      <Link href={`/restaurants`}>Return to all restaurants</Link> 
      <Link href={`/restaurants/${restaurantId}/menu`}>Menu</Link> 
      <Link href={`/restaurants/${restaurantId}/reviews`}>Reviews</Link> 
      <div className={styles.root}>
        <h2 className={styles.title}>{restaurant?.name}</h2>
        <>{children}</>
      </div>
    </div>
  );
}