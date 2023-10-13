import { LinkTo } from "../LinkTo/component";
import styles from "./styles.module.css";

export const EmptyCart = () => {
    return <div>
        <div>
            <h1>Your cart is empty.</h1>
            <h2>Choose your meals from the restaurants</h2>
            <LinkTo to={`/restaurants`} text={"Show restaurants"}></LinkTo>
            <h2>Or of all the dishes that are available</h2>
            <LinkTo to={`/cart`} text={"Show all dishes"}></LinkTo>
        </div>
    </div>
}