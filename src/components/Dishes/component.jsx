import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";

export const Dishes = ({dishes}) => {
    return (
        <div className={styles.root}>
            {dishes.map((dish) => (
                <DishContainer key={dish.id} dish={dish}/>
            ))}
        </div>
    )
}