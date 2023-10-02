import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import Link from "next/link";
import Image from "next/image";
import { dishesUrl } from "@/consts/images_url";

export const Dish = ({ dish, amount, increment, decrement, dishId, className }) => {
  const { price: dishPrice, name, ingredients } = dish;
  const dishImageUrl = dishesUrl.find((el) => dishId == el.id);
  console.log(dishImageUrl)

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.dish_info_container}>
        <Image
          src={dishImageUrl.url}
          width={100}
          height={100}
          // layout="responsive"
          alt="Dish"
        />
        <div className={styles.title}>
          <Link 
            href={`/dishes/${dish.id}`}
            className={styles.link}
            >
              {name}
          </Link>
        </div>
        <div className={styles.dish_ingredients}>Ingridients: {ingredients.join(', ')}</div>
        <div className={styles.dish_price}>{dishPrice.toFixed(2)} $</div>
      </div>
      <div className={styles.dish_count_container}>
        <div className={styles.buttons_count_container}>
          <Button 
            disabled={amount === 0} 
            onClick={decrement}
            type="btn_minus"
            />
          <span className={styles.dish_count}> {amount} </span>
          <Button 
            disabled={amount === 5} 
            onClick={increment}
            type="btn_plus"
          />
        </div>
        <div className={styles.dish_count}>Total: ${amount * dishPrice}</div>
      </div>
    </div>
  );
};
