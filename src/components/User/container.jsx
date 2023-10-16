import { useGetUsersQuery } from "@/store/services/api";
import { User } from "./component";
import { restoreItems } from "@/utils/local-storage";

export const UserContainer = ({ userId }) => {
  const localData = restoreItems();
  const { data: user, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === userId),
      };
    },
  });

  const reviewUser = user?.name || localData.currentUserName;

  if (isFetching) {
    return <div>.....</div>;
  }

  if (!reviewUser) {
    return null;
  }

  return <User user={reviewUser} />;
};
