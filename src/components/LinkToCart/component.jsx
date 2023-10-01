import Link from "next/link"
import styles from "./styles.module.css"
import { Button } from "../Button/component"

export const LinkToCart = () => {
    return (
        <div className={styles.root}>
            <div className={styles.slide}></div>
            <Link 
                href={`/cart`}
                className={styles.link}
            >
                Go to your cart
            </Link>
        </div>
    )
}