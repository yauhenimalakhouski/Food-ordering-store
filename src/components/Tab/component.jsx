"use client";

import styles from "./styles.module.css"
import Link from "next/link";

export const Tab = ({ title, path }) => {
  return (
  <Link 
    href={path}
    className={styles.root}
  >
    <span>{title}</span>
  </Link>
  );
};
