import classNames from "classnames";
import Image from "next/legacy/image";

import styles from "./styles.module.css";
import Link from "next/link";
import { LoginButton } from "../LoginButton/component";
import { ThemeButton } from "../ThemeButton/component";

const imageWidth = "75";
const imageHeigth = "75";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <Link href="/">
        <Image 
          src="/logo.svg"
          width={imageWidth}
          height={imageHeigth}
          className = {styles.logo}
          alt="Logo"
        />
      </Link>
      <nav className={classNames(styles.navigation)}>
        <li>
          <Link 
            href={"/restaurants"}
            className={classNames(styles.link)}
          >
            Restaurants
          </Link>
        </li>
        <li>
         <Link 
          href={"/dishes"}
          className={classNames(styles.link)}
          >
            Dishes
          </Link>
        </li> 
        <li>
          <Link 
            href={"/cart"}
            className={classNames(styles.link)}
          >
            Cart
          </Link>
        </li>
      </nav>
      <div className={classNames(styles.user_control_buttons)}>
        <LoginButton />
        <ThemeButton />
      </div>
      
    </header>
  );
};
