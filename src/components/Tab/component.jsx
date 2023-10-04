"use client";

import { HandleClick } from "@/utils/page-position";
import styles from "./styles.module.css"

import Link from "next/link";

export const Tab = ({ title, path }) => {
  return (
  <Link 
    href={path}
    className={styles.root}
    onClick={(path) => HandleClick(path)}
  >
    <span>{title}</span>
  </Link>
  );
};
