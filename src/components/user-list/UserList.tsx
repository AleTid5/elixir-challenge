import { Grid } from "@mantine/core";
import { useUsers } from "@/api/users";
import ErrorCard from "./components/error-card";
import SkeletonList from "./components/skeleton-list";
import UserCard from "./components/user-card";

const UserList = () => {
  const { isLoading, error, data } = useUsers();

  if (isLoading) return <SkeletonList />;

  if (error) return <ErrorCard />;

  console.log(data);

  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <UserCard />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <UserCard />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <UserCard />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <UserCard />
      </Grid.Col>
    </Grid>
  );
};

export default UserList;
