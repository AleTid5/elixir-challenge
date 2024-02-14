import { ComponentType } from "react";
import { JSX } from "react/jsx-runtime";
import { useRecoilValue } from "recoil";
import { useUsers } from "@/api/users";
import { filteredUsersState } from "@/stores/filters-store";
import ErrorCard from "./components/error-card";
import SkeletonList from "./components/skeleton-list";
import UserNotFound from "./components/user-not-found";

const withEnhancers =
  <P extends object>(Component: ComponentType<P>) =>
  (props: JSX.IntrinsicAttributes & P) => {
    const { isLoading, error } = useUsers();
    const users = useRecoilValue(filteredUsersState);

    if (error) return <ErrorCard />;

    if (isLoading) return <SkeletonList />;

    if (users.length == 0) return <UserNotFound />;

    return <Component users={users} {...props} />;
  };

export default withEnhancers;
