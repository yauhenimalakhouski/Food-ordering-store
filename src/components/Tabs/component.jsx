import { Tab } from "@/components/Tab/component";

export const Tabs = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab key={id} title={name} path={`/restaurants/${id}`} />
      ))}
    </div>
  );
};
