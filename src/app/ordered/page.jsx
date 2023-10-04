"use client";

import Link from "next/link";

export default function OrderPlace(){
    return (<main>
        <h2>
            Thank you
        </h2>
        <h2>Your order is being prepared</h2>
        <h2>Delivery will be within two hours</h2>
        <Link href={"/"}>Back to Home Page</Link>
    </main>)
}