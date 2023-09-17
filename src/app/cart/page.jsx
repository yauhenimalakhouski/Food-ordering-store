import { CartContainer } from "@/components/Cart/container";
import { fetchAllDishs } from "@/services/api";
// import Image from "next/image";

export default async function CartPage() {
  const dishes = await fetchAllDishs();
  return (
    <div><CartContainer dishes={dishes}/></div>
  );
}


{/* <Image
        src="/vercel.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}