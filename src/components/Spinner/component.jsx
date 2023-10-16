import styles from "./styles.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spin_wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};
