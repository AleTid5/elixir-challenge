import { Grid } from "@mantine/core";
import UserCard from "./components/user-card";

const UserList = () => {
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
