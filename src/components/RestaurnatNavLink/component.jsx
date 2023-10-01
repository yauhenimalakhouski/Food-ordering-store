import Link from "next/link";
import styles from "./styles.module.css";

export const RestaurantNavLink = ({children, path}) => {
    return (
        <Link 
            href={path} 
            className = {styles.root}
            >
                <span>{children}</span>
        </Link> 
    )
}