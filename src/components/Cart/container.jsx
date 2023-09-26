"use client";

import { selectAllDishAmounts, selectCartDishIds } from "@/store/features/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./component";
import { Button } from "../Button/component";
import Link from "next/link";
import { cartSlice } from "@/store/features/cart";


export const CartContainer = ({dishes}) => {
    const dispatch = useDispatch();
    const dishIdsInCart = useSelector(selectCartDishIds);
    const dishAmounts = useSelector(selectAllDishAmounts);
    const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));
    const totalPrice = dishesInCart.reduce((acc, dish, index) =>{
        return acc + (dish.price*dishAmounts[index]);
    }, 0);
    return (<div>
        <Cart dishes={dishesInCart}/>
        <div>
            <span>Total: </span>
            <span>{totalPrice} $</span>
        </div>
            { <Link href={"/ordered"}><Button onClick={()=>{
            dispatch(cartSlice.actions.clearCart());
            }}>Order</Button></Link>}
    </div>
    
    
)}