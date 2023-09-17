import { DishContainer } from "../Dish/container";

export const Cart = ({dishes}) => {
    return <div>
    {dishes.map((dish)=> (
        <DishContainer key={dish.id} dish={dish} />
    ))}
    </div>;
}