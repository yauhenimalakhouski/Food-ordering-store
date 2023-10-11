import { fetchRestaurant } from "@/services/api";
import styles from "./styles.module.css";
import { restaurantsImagesUrl } from "@/consts/images_url";
import { RestaurantNavLink } from "@/components/RestaurnatNavLink/component";
import Image from "next/image";
import { Spinner } from "@/components/Spinner/component";

export default async function RestaurantsLayout({ params: { restaurantId }, children }) {
  const restaurant = await fetchRestaurant(restaurantId);
  const restaurantBannerUrl = restaurantsImagesUrl.find(imageUrl => restaurantId === imageUrl.id);
  return (
    <div>
      <nav className={styles.navigation}>
        <RestaurantNavLink path={`/restaurants`}>Return to all restaurants</RestaurantNavLink>
        <RestaurantNavLink path={`/restaurants/${restaurantId}/menu`} nameForActive = {"menu"}>Menu</RestaurantNavLink>
        <RestaurantNavLink path={`/restaurants/${restaurantId}/reviews`} nameForActive = {"reviews"}>Reviews</RestaurantNavLink>
      </nav>
      <div className={styles.banner_container}>
        <Image
        src={restaurantBannerUrl.url}
        priority
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0M/P/DwADIQG8SWu0YQAAAABJRU5ErkJggg=="
        placeholder = 'blur'
        fill ={true}
        alt="Banner"
        className={styles.banner}
      />
      </div>
      
      <div className={styles.root}>
        <h2 className={styles.title}>{restaurant?.name}</h2>
        <>{children}</>
      </div>
    </div>
  );
}