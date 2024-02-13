import { Box, Button, Card, Flex, Group, Image, Text } from "@mantine/core";

const UserCard = () => {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Text size="xl" fw={700}>
        John Cassidy
      </Text>
      <Text size="xs" fw={100} c="dark">
        john.cassidy@gmail.com
      </Text>

      <Group my="xl" gap="sm" grow>
        <Image
          radius="100%"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          height={96}
          maw={96}
          alt="Norway"
          loading="lazy"
          decoding="async"
        />

        <Flex gap="xs" direction="column">
          <Box>
            <Text size="xs" fw={500}>
              Country
            </Text>
            <Text size="xs" fw={100}>
              United States
            </Text>
          </Box>

          <Box>
            <Text size="xs" fw={500}>
              Age
            </Text>
            <Text size="xs" fw={100}>
              30 years old
            </Text>
          </Box>
        </Flex>
      </Group>

      <Button color="black" variant="outline" fullWidth radius="md">
        See more info
      </Button>
    </Card>
  );
};

export default UserCard;
