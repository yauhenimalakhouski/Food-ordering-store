import { useGetUsersQuery } from "@/store/services/api";
import { User } from "./component";import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/features/authorization/selectors";
;

export const UserContainer = ({ userId }) => {
  const currentUser = useSelector(selectCurrentUser);
  const { data: user, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === userId),
      };
    },
  });

  const reviewUser = user?.name || currentUser;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviewUser) {
    return null;
  }

  return <User user={reviewUser} />;
};
