import { DishContainer } from "@/components/Dish/container";
import { fetchAllDishs } from "@/services/api"

export default async function DishesPage() {
    const dishes = await fetchAllDishs();
    console.log(dishes)
    return (<div>
        <h3>All dishes:</h3>
        {dishes.map((dish) => <DishContainer key={dish.id} dish={dish}/>)}
    </div>    
    )
}