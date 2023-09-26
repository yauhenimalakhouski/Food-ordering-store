import Link from "next/link";

export default async function RestaurantsLayout({ params: { restaurantId }, children }) {


  return (
    <div>
      <Link href={`/restaurants`}>Return to all restaurants</Link> 
      <Link href={`/restaurants/${restaurantId}/menu`}>Menu</Link> 
      <Link href={`/restaurants/${restaurantId}/reviews`}>Reviews</Link> 
      <div>{children}</div>
    </div>
  );
}