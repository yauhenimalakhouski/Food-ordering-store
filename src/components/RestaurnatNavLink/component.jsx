'use client';

 
import { usePathname } from 'next/navigation'
import Link from "next/link";
import styles from "./styles.module.css";
import classNames from 'classnames';

export const RestaurantNavLink = ({children, path, nameForActive}) => {
    const pathname = usePathname().split('/').pop();
    
    console.log(pathname)
    return (
        <Link
            scroll ={true}
            href={path} 
            className = {
                classNames(styles.root,
                {[styles.active]: nameForActive === pathname}  
                )}
            >
                <span>{children}</span>
        </Link> 
    )
}