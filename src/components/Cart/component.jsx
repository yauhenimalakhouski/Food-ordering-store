import { DishContainer } from "../Dish/container";
import classNames from "classnames";
import styles from './styles.module.css';
import { OrderForm } from "../OrderForm/component";


export const Cart = ({dishes, totalPrice}) => {

    if(dishes.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div className={classNames(styles.root)}>
            <h2>Cart</h2>
            <hr />
            <ul className={classNames(styles.order_list)}>
                {dishes.map((dish)=> (
                    <DishContainer key={dish.id} dish={dish} />
                ))}
            </ul>
            <div>
                <span>Total: </span>
                <span>{totalPrice} $</span>
            </div>
            <OrderForm/>
    </div>);
    
}