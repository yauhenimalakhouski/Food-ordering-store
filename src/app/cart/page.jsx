import { CartContainer } from "@/components/Cart/container";
import { fetchAllDishs } from "@/services/api";

export default async function CartPage() {
  const dishes = await fetchAllDishs();
  return (
    <div><CartContainer dishes={dishes}/></div>
  );
}

