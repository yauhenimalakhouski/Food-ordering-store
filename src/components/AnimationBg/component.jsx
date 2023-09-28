import classNames from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";


export const AnimationBg = () => {
    return (
        <div className={styles.root}>
            <p className={classNames(styles.header, styles.head1)}>Welcome to the best meal delivery service</p>
            <p className={classNames(styles.header, styles.head2)}>Just</p>
            <p className={classNames(styles.header, styles.head3)}>For you</p>
            <p className={classNames(styles.header, styles.head4)}>The best quality and tastiest food</p>
            <p className={classNames(styles.header, styles.head5)}>Dishes from the best restaurants</p>
            <Link href={`/restaurants`} className={classNames(styles.button, styles.link)}>Show restaurants</Link>
            {/* <button className={styles.button}>Continue</button> */}
            <div className={classNames(styles.light, styles.x1)}></div>
            <div className={classNames(styles.light, styles.x2)}></div>
            <div className={classNames(styles.light, styles.x3)}></div>
            <div className={classNames(styles.light, styles.x4)}></div>
            <div className={classNames(styles.light, styles.x5)}></div>
            <div className={classNames(styles.light, styles.x6)}></div>
            <div className={classNames(styles.light, styles.x7)}></div>
            <div className={classNames(styles.light, styles.x8)}></div>
            <div className={classNames(styles.light, styles.x9)}></div>
        </div>
    )
}