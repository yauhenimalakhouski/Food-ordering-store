"use client";

import { useEffect, useState } from "react";
import { Dishes } from "./component";

const LOCAL_STORAGE_KEY = "activeSearch";

export const DishesContainer = ({dishes}) => {

    const [search, setSearch] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || "");

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, search);
    }, [search]);

    const filteredDishes = dishes.filter(({name}) => {
        return (
            name.toLowerCase().includes(search)
        );
    });

    return (
        <div>
            <input
                value={search || ""}
                onChange={(event) => setSearch(event.target.value)}
            />
           <Dishes dishes = {filteredDishes}></Dishes> 
        </div>
        
    )
}