import { Tab } from "@/components/Tab/component";
import styles from './styles.module.css';

export const Tabs = ({ restaurants }) => {
  return (
    <div className={styles.root}> 
      {restaurants.map(({ id, name }) => (
        <Tab key={id} title={name} path={`/restaurants/${id}/menu`} />
      ))}
    </div>
  );
};
