import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { Button, em, Flex, Input, MultiSelect, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import citizenships from "@/constants/citizenships.ts";
import { nameFilterState } from "@/stores/filters-store";

const AppSidebar = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [, setNameFilter] = useRecoilState(nameFilterState);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  return (
    <Flex
      miw="15rem"
      pos="sticky"
      top={isMobile ? "0" : "2rem"}
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
      <Input radius="md" placeholder="Search user" onChange={onChangeName} />
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
