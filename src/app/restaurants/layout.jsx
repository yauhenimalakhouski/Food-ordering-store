import { Tabs } from "@/components/Tabs/component";
import { fetchRestaurants } from "@/services/api";

export default async function RestaurantsLayout({ children }) {
  const restaurants = await fetchRestaurants();

  return (
    <div>
      <Tabs restaurants={restaurants} />
      <div>{children}</div>
    </div>
  );
}
