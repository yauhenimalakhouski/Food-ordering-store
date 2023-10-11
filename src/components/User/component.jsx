import styles from "./styles.module.css"

export const User = ({ user }) => {
  return <div className={styles.root}>{user}</div>;
};
