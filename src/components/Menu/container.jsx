import { fetchRestaurantDishs } from "@/services/api";

import { Menu } from "./component";

export default async function MenuContainer({restaurantId}){
  const dishes = await fetchRestaurantDishs(restaurantId);
  
  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes}></Menu>
};
