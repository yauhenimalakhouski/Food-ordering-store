import Link from "next/link";
import { DishContainer } from "../Dish/container"
import styles from "./styles.module.css";
import classNames from "classnames";
import { LinkToCart } from "../LinkToCart/component";

export const Menu = ({dishes}) => {
    return (
        <div className={classNames(styles.root)}>
            <h3 className={styles.title}>Menu</h3>
            <div className={classNames(styles.dishs_container)}>
            {dishes.map((dish) => (
                <DishContainer key={dish.id} dish={dish} className={styles.dish}>{dish.name}</DishContainer>
            ))}
            </div>
            <LinkToCart></LinkToCart>
            {/* <Link href={`/cart`}>Go to your cart</Link>  */}
        </div>
)};