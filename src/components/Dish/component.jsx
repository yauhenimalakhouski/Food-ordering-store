import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import Link from "next/link";
import { dishesUrl } from "@/consts/images_url";
import Image from "next/image";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const dishImageUrl = dishesUrl.find((el) => dish.id === el.id);
  const { price: dishPrice, name, ingredients } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.dish}>
        <div className={styles.dish}>
          <Link 
            href={`/dishes/${dish.id}`}
            className={styles.image_link}
          >
            <Image
              src={dishImageUrl.url}
              priority
              fill= {true}
              alt="Dish"
              className={styles.image}
            />
          </Link>
          <div className={styles.dish_info_container}>
            <div>
              <Link 
                href={`/dishes/${dish.id}`}
                className={styles.link}
                >
                  {name}
              </Link>
            </div>
            <div className={styles.dish_ingredients}>Ingridients: {ingredients.join(', ')}</div>
            <div className={styles.dish_price}>Price: {dishPrice.toFixed(2)} $</div>
          </div>
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
    </div>
  );
};
