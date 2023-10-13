import { LinkTo } from "../LinkTo/component";
import styles from "./styles.module.css";

export const EmptyCart = () => {
    return <div className={styles.root}>
        <h1 className={styles.title}>Your cart is empty.</h1>
        <h2 className={styles.secondary_title}>Choose your meals from the restaurants</h2>
        <LinkTo to={`/restaurants`} text={"Show restaurants"}></LinkTo>
        <h2 className={styles.secondary_title}>Or of all the dishes that are available</h2>
        <LinkTo to={`/dishes`} text={"Show all dishes"}></LinkTo>
    </div>
}