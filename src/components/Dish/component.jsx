import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import Link from "next/link";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <Link href={`/dishes/${dish.id}`}>
        <div className={styles.name}>{name}</div>
      </Link>
      
      <div className={styles.actions}>
        <Button 
          disabled={amount === 0} 
          onClick={decrement}
          type="btn_minus"
          />
        <span> {amount} </span>
        <Button 
          disabled={amount === 5} 
          onClick={increment}
          type="btn_plus"
        />

      </div>
      <div className={styles.total}>Total: ${amount * dishPrice}</div>
    </div>
  );
};
