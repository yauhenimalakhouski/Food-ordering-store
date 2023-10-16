"use client";

import {
  selectAllDishAmounts,
  selectCartDishIds,
} from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";
import { Cart } from "./component";

export const CartContainer = ({ dishes }) => {
  const dishIdsInCart = useSelector(selectCartDishIds);
  const dishAmounts = useSelector(selectAllDishAmounts);
  const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));
  const totalPrice = dishesInCart.reduce((acc, dish, index) => {
    return acc + dish.price * dishAmounts[index];
  }, 0);
  return (
    <div>
      <Cart dishes={dishesInCart} totalPrice={totalPrice} />
    </div>
  );
};
