import { User } from "./component";
import { fetchUsers } from "@/services/api";

export default async function UserContainer({ userId }){
  const users = await fetchUsers();


  const user = users.find((user) => user.id === userId);

  if (!users.length) {
    return null;
  }

  return <User user={user} />;
};
