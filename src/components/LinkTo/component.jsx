import Link from "next/link";
import styles from "./styles.module.css";

export const LinkTo = ({ to, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.slide}></div>
      <Link href={to} className={styles.link}>
        {text}
      </Link>
    </div>
  );
};
