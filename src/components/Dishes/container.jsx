"use client";

import { useEffect, useState } from "react";
import { Dishes } from "./component";
import styles from "./styles.module.css";

const LOCAL_STORAGE_KEY = "activeSearch";
let localSearch;

export const DishesContainer = ({dishes}) => {
    if (typeof window !== 'undefined') {
        localSearch = localStorage.getItem(LOCAL_STORAGE_KEY) || "";
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
            name.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <>
            <div className={styles.search_bar}>
                <input
                    value={search || ""}
                    onChange={(event) => setSearch(event.target.value)}
                    className={styles.search_input}
                    placeholder="Name of dish"
                />
            </div>
           <Dishes dishes = {filteredDishes}></Dishes> 
        </>   
    )
}