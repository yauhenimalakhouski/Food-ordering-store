import { DishContainer } from "../Dish/container"

export const Dishes = ({dishes}) => {
    return (
        <div>
            {dishes.map((dish) => (
                <DishContainer key={dish.id} dish={dish}/>
            ))}
        </div>
    )
}