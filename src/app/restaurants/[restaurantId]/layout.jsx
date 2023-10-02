import { fetchRestaurant } from "@/services/api";
import styles from "./styles.module.css";
import Image from "next/image";
import { restaurantsImagesUrl } from "@/consts/images_url";
import { RestaurantNavLink } from "@/components/RestaurnatNavLink/component";

export default async function RestaurantsLayout({ params: { restaurantId }, children }) {
  const restaurant = await fetchRestaurant(restaurantId);
  const restaurantBannerUrl = restaurantsImagesUrl.find(imageUrl => restaurantId === imageUrl.id);
  return (
    <div>
      <nav className={styles.navigation}>
        <RestaurantNavLink path={`/restaurants`}>Return to all restaurants</RestaurantNavLink>
        <RestaurantNavLink path={`/restaurants/${restaurantId}/menu`}>Menu</RestaurantNavLink>
        <RestaurantNavLink path={`/restaurants/${restaurantId}/reviews`}>Reviews</RestaurantNavLink>
      </nav>
      <Image 
        src={restaurantBannerUrl.url}
        priority
        width={1564}
        height={670}
        layout="responsive"
        alt="Banner"
      />
      <div className={styles.root}>
        <h2 className={styles.title}>{restaurant?.name}</h2>
        <>{children}</>
      </div>
    </div>
  );
}