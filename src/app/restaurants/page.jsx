import { Tabs } from "@/components/Tabs/component";
import { fetchRestaurants } from "@/services/api";


import styles from "./styles.module.css";
import classNames from "classnames";


export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();
  return <div className={classNames(styles.root)}>
      <Tabs restaurants={restaurants} />
    </div>;
}
