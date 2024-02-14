import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { Button, em, Flex, Input, MultiSelect, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CloseIcon from "@/assets/icons/CloseIcon.tsx";
import { useUsers } from "@/api/users";
import citizenships from "@/constants/citizenships.ts";
import {
  nameFilterState,
  selectedCountriesState,
} from "@/stores/filters-store";

const AppSidebar = () => {
  const { refetch } = useUsers();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [nameFilter, setNameFilter] = useRecoilState(nameFilterState);
  const [, setSelectedCountries] = useRecoilState(selectedCountriesState);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setNameFilter(event.target.value);

  const onCountriesChange = (countries: string[]) =>
    setSelectedCountries(countries);

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
      <Input
        radius="md"
        placeholder="Search user"
        value={nameFilter}
        onChange={onChangeName}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseIcon
            aria-label="Clear input"
            role="button"
            onClick={() => setNameFilter("")}
            isVisible={nameFilter.length > 0}
          />
        }
      />
      <MultiSelect
        placeholder="Choose the nationality"
        data={citizenships}
        searchable
        nothingFoundMessage="The nationality was not found"
        comboboxProps={{ position: "right" }}
        onChange={onCountriesChange}
      />
      <Button variant="filled" color="black" onClick={() => refetch()}>
        Apply filters
      </Button>
    </Flex>
  );
};

export default AppSidebar;
