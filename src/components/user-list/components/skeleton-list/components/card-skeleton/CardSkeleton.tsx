import { Box, Card, Flex, Group, Skeleton, Text } from "@mantine/core";

const CardSkeleton = () => (
  <Card shadow="md" padding="lg" radius="md" withBorder>
    <Skeleton height="0.75rem" radius="xl" mt="xs" />
    <Skeleton height="0.5rem" radius="xl" mt="0.75rem" />
    <Group my="xl" gap="sm" grow>
      <Skeleton height={86} maw={86} circle />
      <Flex gap="xs" direction="column">
        <Box>
          <Text size="xs" fw={500}>
            Country
          </Text>
          <Skeleton height="0.5rem" mt="0.25rem" />
        </Box>
        <Box>
          <Text size="xs" fw={500}>
            Age
          </Text>
          <Skeleton height="0.5rem" mt="0.25rem" />
        </Box>
      </Flex>
    </Group>
    <Skeleton height="2.25rem" radius="md" mt="0.5rem" />
  </Card>
);

export default CardSkeleton;
