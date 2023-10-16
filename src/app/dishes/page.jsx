import { DishesContainer } from "@/components/Dishes/container";
import { fetchAllDishs } from "@/services/api";
import styles from "./styles.module.css";

export default async function DishesPage() {
  const dishes = await fetchAllDishs();
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>All dishes:</h3>
      <DishesContainer dishes={dishes}></DishesContainer>
    </div>
  );
}
