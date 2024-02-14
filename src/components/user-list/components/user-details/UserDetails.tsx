import { Box, Flex, Group, Image, Text } from "@mantine/core";
import UserType from "@/types/user-type.ts";
import { formatDate } from "@/helpers/date-helper.ts";

const UserDetails = ({
  name,
  email,
  image,
  age,
  gender,
  phoneNumber,
}: UserType) => {
  return (
    <Box>
      <Group align="flex-start">
        <Image
          radius="100%"
          alt="Image of the user"
          src={image}
          height={96}
          maw={96}
          loading="lazy"
          decoding="async"
        />
        <Box>
          <Text size="xl" fw={700}>
            {name}
          </Text>
          <Text size="md" fw={100} c="dark">
            {email}
          </Text>
          <Text size="md" fw={100} c="dark">
            {phoneNumber}
          </Text>
        </Box>
      </Group>
      <Group justify="space-evenly" my="xs">
        <Box>
          <Text size="md" fw={700}>
            Age
          </Text>
          <Text size="xs" fw={100} c="dark">
            {age} years old
          </Text>
        </Box>
        <Box>
          <Text size="md" fw={700}>
            Gender
          </Text>
          <Text size="xs" fw={100} c="dark">
            {gender === "female" ? "Feminine" : "Masculine"}
          </Text>
        </Box>
        <Box>
          <Text size="md" fw={700}>
            Register Date
          </Text>
          <Text size="xs" fw={100} c="dark">
            {formatDate("2007-07-09T05:51:59.390Z")}
          </Text>
        </Box>
      </Group>
      <Flex>
        <div>Location</div>
      </Flex>
    </Box>
  );
};

export default UserDetails;
