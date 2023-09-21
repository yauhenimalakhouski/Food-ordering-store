"use client";

import { selectCartDishIds } from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";
import { Cart } from "./component";
import { Button } from "../Button/component";
import { useState } from "react";
import { cartSlice } from "@/store/features/cart";

export const CartContainer = ({dishes}) => {
    const dishIdsInCart = useSelector(selectCartDishIds);
    const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));
    const [isOrder, setIsOrder] = useState(false);
    return (<div>
        <Cart dishes={dishesInCart}/>
        {isOrder ?
         <div>Order accepted</div> :
         <Button onClick={()=>{
            setIsOrder(true);
            }}>Order</Button>}
    </div>
    
    
)}