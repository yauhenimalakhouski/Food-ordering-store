"use client";

import { useEffect, useState } from "react";
import { Dishes } from "./component";

const LOCAL_STORAGE_KEY = "activeSearch";
let localSearch;

export const DishesContainer = ({dishes}) => {
    if (typeof window !== 'undefined') {
        localSearch = localStorage.getItem(LOCAL_STORAGE_KEY);
    } else {
        localSearch = "";
    }

    const [search, setSearch] = useState(localSearch);

    useEffect(()=>{
        if (typeof window !== 'undefined'){
            localStorage.setItem(LOCAL_STORAGE_KEY, search);
        }
        
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