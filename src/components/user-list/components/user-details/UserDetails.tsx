import { Anchor, Box, Flex, Group, Image, Text } from "@mantine/core";
import UserType from "@/types/user-type.ts";
import { formatDate } from "@/helpers/date-helper.ts";
import { getGoogleMapsUrl } from "@/helpers/url-helper.ts";

const UserDetails = ({
  name,
  email,
  image,
  age,
  gender,
  phoneNumber,
  registerDate,
  fullLocation,
  coordinates,
}: UserType) => (
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
    <Group justify="space-between" my="xs">
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
          {formatDate(registerDate)}
        </Text>
      </Box>
    </Group>
    <Flex my="md" gap="xl">
      <Box>
        <Text size="md" fw={700}>
          Location
        </Text>
        <Text size="xs" fw={100} c="dark">
          {fullLocation}
        </Text>
      </Box>
      <Box>
        <Text size="md" fw={700}>
          Geolocation
        </Text>
        <Text size="xs" fw={100} c="dark">
          <Anchor href={getGoogleMapsUrl(coordinates)} target="_blank">
            See on Maps
          </Anchor>
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default UserDetails;
