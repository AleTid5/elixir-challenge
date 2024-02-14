import { SimpleGrid } from "@mantine/core";
import type UserType from "@/types/user-type.ts";
import UserCard from "./components/user-card";
import withEnhancers from "./wrappers/with-enhancers";

type UserListProps = {
  users: UserType[];
};

const UserList = ({ users }: UserListProps) => (
  <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl" w="100%">
    {users.map((user) => (
      <UserCard key={user.email} {...user} />
    ))}
  </SimpleGrid>
);

export default withEnhancers(UserList);
