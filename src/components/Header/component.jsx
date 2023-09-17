import classNames from "classnames";
// import { LoginButton } from "../LoginButton/component";

import styles from "./styles.module.css";
import Link from "next/link";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      {/* <LoginButton /> */}
      <Link href="/">
        Home
      </Link>
      <Link href={"/restaurants"}>Restaurants</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/dishes"}>Dishes</Link>
    </header>
  );
};
