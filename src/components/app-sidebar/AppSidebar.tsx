import { Button, Flex, Input, MultiSelect, Text } from "@mantine/core";
import citizenships from "@/constants/citizenships.ts";

const AppSidebar = () => {
  return (
    <Flex miw="15rem" pos="sticky" top="2rem" direction="column" gap="1rem">
      <Text size="xl" fw={900}>
        Search
      </Text>
      <Input radius="md" placeholder="Search user" />
      <MultiSelect
        placeholder="Choose the nationality"
        data={citizenships}
        searchable
        nothingFoundMessage="The nationality was not found"
        comboboxProps={{ position: "right" }}
      />
      <Button variant="filled" color="black">
        Apply filters
      </Button>
    </Flex>
  );
};

export default AppSidebar;
