"use client";

import { handleClick } from "@/utils/page-position";
import styles from "./styles.module.css"

import Link from "next/link";

export const Tab = ({ title, path }) => {
  return (
  <Link 
    href={path}
    className={styles.root}
    onClick={(path) => handleClick(path)}
  >
    <span>{title}</span>
  </Link>
  );
};
