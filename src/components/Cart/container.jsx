"use client";

import { selectCartDishIds } from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";
import { Cart } from "./component";

export const CartContainer = ({dishes}) => {
    const dishIdsInCart = useSelector(selectCartDishIds);
    const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));

    return <Cart dishes={dishesInCart}/>;
}