"use client";

import Link from "next/link";

import styles from "./styles.module.css";
import { LinkTo } from "@/components/LinkTo/component";

export default function OrderPlace(){
    return (
    <div className={styles.root}>
        <h1 className={styles.title}>
            Thank you
        </h1>
        <h2 className={styles.secondary_title}>Your order is being prepared</h2>
        <h2 className={styles.secondary_title}>Delivery will be within two hours</h2>
        <LinkTo to={"/"} text={"Back to Home Page"}/>
    </div>
    )
}