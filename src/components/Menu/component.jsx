import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";
import classNames from "classnames";
import { LinkTo } from "../LinkTo/component";

export const Menu = ({ dishes }) => {
  return (
    <div className={classNames(styles.root)}>
      <h3 className={styles.title}>Menu</h3>
      <div className={classNames(styles.dishs_container)}>
        {dishes.map((dish) => (
          <DishContainer key={dish.id} dish={dish} className={styles.dish}>
            {dish.name}
          </DishContainer>
        ))}
      </div>
      <LinkTo to={`/cart`} text={"Go to your cart"} />
    </div>
  );
};
