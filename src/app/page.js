import Link from "next/link";

export default function Home() {
  return (
    <div><Link href={`/restaurants`}>Show restaurants</Link></div>
  );
}
