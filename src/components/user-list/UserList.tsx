import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Modal, SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { filteredUsersState } from "@/stores/filters-store";
import type UserType from "@/types/user-type.ts";
import UserCard from "./components/user-card";
import withEnhancers from "./wrappers/with-enhancers";
import UserDetails from "./components/user-details";

const UserList = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [user, setUser] = useState<UserType | null>(null);
  const users = useRecoilValue(filteredUsersState);

  const onSeeMore = (index: number) => {
    setUser(users[index]);
    open();
  };

  return (
    <>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl" w="100%">
        {users.map((user, key) => (
          <UserCard
            key={user.email}
            {...user}
            onSeeMore={() => onSeeMore(key)}
          />
        ))}
      </SimpleGrid>
      <Modal
        opened={opened}
        onClose={close}
        title="User details"
        centered
        radius="md"
      >
        {user && <UserDetails {...user} />}
      </Modal>
    </>
  );
};

export default withEnhancers(UserList);
