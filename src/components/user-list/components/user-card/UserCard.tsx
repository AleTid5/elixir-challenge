import { Box, Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import UserType from "@/types/user-type.ts";
import useUserCard from "./useUserCard.ts";

type UserCardProps = UserType & {
  onSeeMore: () => void;
};

const UserCard = ({
  name,
  email,
  image,
  age,
  country,
  onSeeMore,
}: UserCardProps) => {
  const { imageSize } = useUserCard();

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
          alt="Image of the user"
          src={image}
          height={imageSize}
          maw={imageSize}
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

      <Button
        color="black"
        variant="outline"
        fullWidth
        radius="md"
        onClick={onSeeMore}
      >
        See more info
      </Button>
    </Card>
  );
};

export default UserCard;
