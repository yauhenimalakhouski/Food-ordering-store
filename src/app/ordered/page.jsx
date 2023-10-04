"use client";

import { selectCurrentUser } from "@/store/features/authorization/selectors"
import Link from "next/link";
import { useSelector } from "react-redux"

export default function OrderPlace(){
    const currentUser = useSelector(selectCurrentUser);
    return (<main>
        <h2>
            Thank {currentUser || "You"}
        </h2>
        <h2>Your order is being prepared</h2>
        <h2>Delivery will be within two hours</h2>
        <Link href={"/"}>Back to Home Page</Link>
    </main>)
}