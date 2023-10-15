"use client";

import classNames from "classnames";
import Image from "next/legacy/image";

import styles from "./styles.module.css";
import Link from "next/link";
import { LoginButton } from "../LoginButton/component";
import { ThemeButton } from "../ThemeButton/component";
import { Button } from "../Button/component";
import { useState } from "react";

const imageWidth = "75";
const imageHeigth = "75";

export const Header = ({ className }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <header className={classNames(styles.root, className)}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={imageWidth}
          height={imageHeigth}
          className={styles.logo}
          alt="Logo"
        />
      </Link>
      <nav className={classNames(styles.navigation)}>
        <li>
          <Link href={"/restaurants"} className={classNames(styles.link)}>
            Restaurants
          </Link>
        </li>
        <li>
          <Link href={"/dishes"} className={classNames(styles.link)}>
            Dishes
          </Link>
        </li>
        <li>
          <Link href={"/cart"} className={classNames(styles.link)}>
            Cart
          </Link>
        </li>
      </nav>
      <nav className={classNames(styles.mobile_navigation)}>
        <Button
          type="mobile_menu"
          onClick={() => {
            if (isMenuOpened) {
              setIsMenuOpened(false);
            } else {
              setIsMenuOpened(true);
            }
          }}
        />
        <ul
          className={classNames({
            [styles.mobile_nav_list]: !isMenuOpened,
            [styles.mobile_nav_list_active]: isMenuOpened,
          })}
        >
          <li>
            <Link
              href={"/restaurants"}
              className={classNames(styles.mobile_link)}
            >
              Restaurants
            </Link>
          </li>
          <li>
            <Link href={"/dishes"} className={classNames(styles.mobile_link)}>
              Dishes
            </Link>
          </li>
          <li>
            <Link href={"/cart"} className={classNames(styles.mobile_link)}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classNames(styles.user_control_buttons)}>
        <LoginButton className={styles.btn_authorization_position} />
        <ThemeButton className={styles.btn_theme_position} />
      </div>
    </header>
  );
};
