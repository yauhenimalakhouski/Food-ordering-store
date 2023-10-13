import { DishContainer } from "../Dish/container";
import classNames from "classnames";
import styles from './styles.module.css';
import { OrderForm } from "../OrderForm/component";
import { EmptyCart } from "../EmptyCart/component";


export const Cart = ({dishes, totalPrice}) => {

    if(dishes.length === 0) {
        return <EmptyCart/>;
    }

    return (
        <div className={classNames(styles.root)}>
            <h2 className={styles.title}>Cart</h2>
            <ul className={classNames(styles.order_list)}>
                {dishes.map((dish)=> (
                    <DishContainer key={dish.id} dish={dish} />
                ))}
            </ul>
            <h3 className={styles.secondary_title}>Finish order</h3>
            <div className={styles.total_amount}>
                <span>Total amount: </span>
                <span>{totalPrice} $</span>
            </div>
            <OrderForm/>
    </div>);
    
}