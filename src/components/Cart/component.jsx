import { DishContainer } from "../Dish/container";

export const Cart = ({dishes}) => {
    return (
    <div>
        <h3>Cart</h3>
        <hr />
        <div>
            {dishes.map((dish)=> (
                <DishContainer key={dish.id} dish={dish} />
            ))}
        </div>
    </div>);
}