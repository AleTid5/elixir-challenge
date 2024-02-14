import { Grid } from "@mantine/core";
import { useUsers } from "@/api/users";
import ErrorCard from "./components/error-card";
import SkeletonList from "./components/skeleton-list";
import UserCard from "./components/user-card";

const UserList = () => {
  const { isLoading, error, data } = useUsers();

  if (error) return <ErrorCard />;

  if (isLoading) return <SkeletonList />;

  return (
    <Grid>
      {data?.map((user) => (
        <Grid.Col key={user.email} span={{ base: 12, xs: 6 }}>
          <UserCard {...user} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default UserList;
