import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import type UserType from "@/types/user-type.ts";
import { selectedCountriesState } from "@/stores/filters-store";
import { urlBuilder } from "@/helpers/url-helper.ts";
import { BASE_URL } from "./constants.ts";
import { transformDataIntoUsers } from "./helpers.ts";
import { UserResponse } from "./types.ts";

const fetchUsers = async (countries: string[]): Promise<UserType[]> => {
  const url = urlBuilder(BASE_URL, { results: "20", nat: countries.join(",") });
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data: UserResponse = await res.json();

  return transformDataIntoUsers(data);
};

export const useUsers = () => {
  const countries = useRecoilValue(selectedCountriesState);

  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(countries),
  });
};
