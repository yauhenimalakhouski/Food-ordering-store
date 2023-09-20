import { Tabs } from "@/components/Tabs/component";
import { fetchRestaurantDishs, fetchRestaurants } from "@/services/api";



export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();
  return <div>
      <Tabs restaurants={restaurants} />
    </div>;
}
