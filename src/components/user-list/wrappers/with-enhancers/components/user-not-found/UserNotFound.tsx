import { Card, Group, Text } from "@mantine/core";
import TelescopeIcon from "@/assets/icons/TelescopeIcon";

const UserNotFound = () => (
  <Card shadow="md" padding="lg" radius="md" withBorder maw="400px">
    <Card.Section bg="orange.0" p="lg">
      <Group gap="xs">
        <TelescopeIcon />
        <Text size="1.5rem" fw={600} c="orange">
          User not found
        </Text>
      </Group>
      <Text size="sm" fw={400} c="dark.3" mt="xs">
        The user you are looking for does not exist.
      </Text>
    </Card.Section>
    <Card.Section p="lg">
      <Text size="md" fw={600}>
        Everyone makes mistakes, don't worry!
      </Text>
      <Text size="sm" fw={400} py="md">
        Please check the spelling and try again. If you are sure that the user
        is in the database, please contact the administrator.
      </Text>
    </Card.Section>
  </Card>
);

export default UserNotFound;
