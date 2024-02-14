import { Button, em, Flex, Input, MultiSelect, Text } from "@mantine/core";
import citizenships from "@/constants/citizenships.ts";
import { useMediaQuery } from "@mantine/hooks";

const AppSidebar = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Flex
      miw="15rem"
      pos="sticky"
      top="0"
      py="2rem"
      direction="column"
      gap="1rem"
      bg="white"
      w={isMobile ? "100%" : "auto"}
      style={{ zIndex: "1" }}
    >
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
