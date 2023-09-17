import { fetchAllDishs } from "@/services/api";

export default async function DishPage({params: {dishId}}){
    const dishes = await fetchAllDishs();
    const dish = dishes.find((dish) => dish.id === dishId);

    return (
    <div>
        <h2>{dish.name}</h2>
        <div>Price: {dish.price}</div>
        <h3>Ingridients:</h3>
        <ul>
            {dish.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>
    </div>
)};