import { fetchRestaurantDishs } from "@/services/api";

import { Menu } from "./component";
import { Suspense } from "react";

export default function MenuContainer({restaurantId}){
  return (
    <Suspense fallback={<div>!!!!!!!!Loading...</div>}>
      <MenuList restaurantId={restaurantId}/>
    </Suspense>
  )
}

export async function MenuList({restaurantId}){
  const dishes = await fetchRestaurantDishs(restaurantId);
  
  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes}></Menu>
};
