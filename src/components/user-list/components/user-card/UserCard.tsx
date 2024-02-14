import { Box, Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import UserType from "@/types/user-type.ts";

const UserCard = ({ name, email, image, age, country }: UserType) => {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Text size="lg" fw={700}>
        {name}
      </Text>
      <Text size="xs" fw={100} c="dark">
        {email}
      </Text>

      <Group my="xl" gap="sm" grow>
        <Image
          radius="100%"
          src={image}
          height={86}
          maw={86}
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
              {country}
            </Text>
          </Box>

          <Box>
            <Text size="xs" fw={500}>
              Age
            </Text>
            <Text size="xs" fw={100}>
              {age}
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
