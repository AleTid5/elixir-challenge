import { SimpleGrid } from "@mantine/core";
import { useUsers } from "@/api/users";
import { filteredUsersState } from "@/stores/filters-store";
import ErrorCard from "./components/error-card";
import SkeletonList from "./components/skeleton-list";
import UserCard from "./components/user-card";
import { useRecoilValue } from "recoil";

const UserList = () => {
  const { isLoading, error } = useUsers();
  const users = useRecoilValue(filteredUsersState);

  if (error) return <ErrorCard />;

  if (isLoading) return <SkeletonList />;

  return (
    <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl" w="100%">
      {users.map((user) => (
        <UserCard key={user.email} {...user} />
      ))}
    </SimpleGrid>
  );
};

export default UserList;
