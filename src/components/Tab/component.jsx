"use client";

import Link from "next/link";

export const Tab = ({ title, path }) => {
  return <Link href={path}>{title}</Link>;
};
