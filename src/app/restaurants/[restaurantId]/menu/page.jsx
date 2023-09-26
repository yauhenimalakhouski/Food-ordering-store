import MenuContainer from "@/components/Menu/container";

export default async function MenuPage({ params: { restaurantId } }) {
    return (
        <MenuContainer restaurantId={restaurantId}/>
    );
  }