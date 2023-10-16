import { fetchAllDishs } from "@/services/api";
import styles from "./styles.module.css";
import Image from "next/image";
import { dishesUrl } from "@/consts/images_url";

export default async function DishPage({ params: { dishId } }) {
  const dishes = await fetchAllDishs();
  const dish = dishes.find((dish) => dish.id === dishId);
  const dishImageUrl = dishesUrl.find((el) => dish.id === el.id);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{dish.name}</h2>
      <div className={styles.image_container}>
        <Image
          fill={true}
          src={dishImageUrl.url}
          alt="Dish"
          className={styles.dish_image}
        />
      </div>
      <h3 className={styles.ingridents_title}>Ingridients:</h3>
      <ul className={styles.ingridents_list}>
        {dish.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
      <div className={styles.price}>Price: {dish.price} $</div>
    </div>
  );
}
