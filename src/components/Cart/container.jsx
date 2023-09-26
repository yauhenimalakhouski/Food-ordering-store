"use client";

import { selectAllDishAmounts, selectCartDishIds, selectDishAmountById } from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";
import { Cart } from "./component";
import { Button } from "../Button/component";
import { useState } from "react";
import Link from "next/link";


export const CartContainer = ({dishes}) => {
    const dishIdsInCart = useSelector(selectCartDishIds);
    const dishAmounts = useSelector(selectAllDishAmounts);
    const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));
    const totalPrice = dishesInCart.reduce((acc, dish, index) =>{
        return acc + (dish.price*dishAmounts[index]);
    }, 0);
    const [isOrder, setIsOrder] = useState(false);
    return (<div>
        <Cart dishes={dishesInCart}/>
        <div>
            <span>Total: </span>
            <span>{totalPrice} $</span>
        </div>
        {isOrder ?
         <div>Order accepted</div> :
         
         <Button onClick={()=>{
            setIsOrder(true);
            }}><Link>Order</Link></Button>}
    </div>
    
    
)}