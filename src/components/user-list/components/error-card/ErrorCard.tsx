import { Button, Card, Group, Text } from "@mantine/core";
import AlertTriangleIcon from "@/assets/icons/AlertTriangleIcon.tsx";

const ErrorCard = () => (
  <Card shadow="md" padding="lg" radius="md" withBorder maw="400px">
    <Card.Section bg="red.0" p="lg">
      <Group gap="xs">
        <AlertTriangleIcon />
        <Text size="1.5rem" fw={600} c="red">
          Error
        </Text>
      </Group>
      <Text size="sm" fw={400} c="dark.3" mt="xs">
        There was an error fetching the data.
      </Text>
    </Card.Section>
    <Card.Section p="lg">
      <Text size="md" fw={600}>
        Well, this is embarrassing.
      </Text>
      <Text size="sm" fw={400} py="md">
        There was a problem fetching the data from the server. Please try again
        in a few moments.
      </Text>
      <Button color="black" variant="outline" radius="md" fullWidth>
        Retry
      </Button>
    </Card.Section>
  </Card>
);

export default ErrorCard;
