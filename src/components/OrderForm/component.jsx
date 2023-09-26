import { selectCurrentUser } from "@/store/features/authorization/selectors";
import { cartSlice } from "@/store/features/cart";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/component";
import Link from "next/link";

const DEFAULT_VALUE = {
    name: "",
    phone: "",
    adress: "",
};

const reducer = (state, {type, payload} = {}) => {
    switch (type) {
        case "setName":
            return {...state, name: payload};
        case "setPhone":
            return {...state, phone: payload};
        case "setAdress":
            return {...state, adress: payload};
        default:
            return state;
    }
};


export const OrderForm = () => {
    const dispatchAction = useDispatch();
    const userName = useSelector(selectCurrentUser);

    const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);
        if(userName){
            form.name = userName;
        }
    return (
        <div>
            <div>
                <div>Name</div>
                <input
                    value={form.name}
                    onChange={(event) =>
                        dispatch({type: "setName", payload:event.target.value})
                    } 
                />
            </div>
            <div>
                <div>Phone Number</div>
                <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                        dispatch({type: "setPhone", payload:event.target.value})
                    } 
                />
            </div>
            <div>
                <div>Address</div>
                <textarea
                    resize="none"
                    value={form.adress}
                    onChange={(event) =>
                        dispatch({type: "setAdress", payload:event.target.value})
                    }
                />
            </div>
            
            { <Link href={"/ordered"}><Button onClick={()=>{
                dispatchAction(cartSlice.actions.clearCart());
                }}>Order</Button></Link>}
        </div>    
    )
};