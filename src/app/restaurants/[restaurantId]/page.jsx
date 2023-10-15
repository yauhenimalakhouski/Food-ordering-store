import styles from "./styles.module.css";

export default async function RestaurantPage() {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{restaurant?.name}</h2>
    </div>
  );
}
