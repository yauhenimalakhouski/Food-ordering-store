import { DishesContainer } from "@/components/Dishes/container";
import { fetchAllDishs } from "@/services/api"

export default async function DishesPage() {
    const dishes = await fetchAllDishs();
    return (<div>
        <h3>All dishes:</h3>
        <DishesContainer dishes={dishes}></DishesContainer>
    </div>    
    )
}
