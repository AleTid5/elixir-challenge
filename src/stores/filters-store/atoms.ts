import { atom } from "recoil";
import { NAME_FILTER, SELECTED_COUNTRIES, USERS } from "./constants.ts";
import type UserType from "@/types/user-type.ts";

export const nameFilterState = atom({
  key: NAME_FILTER,
  default: "",
});

export const selectedCountriesState = atom({
  key: SELECTED_COUNTRIES,
  default: [] as string[],
});

export const usersState = atom({
  key: USERS,
  default: [] as UserType[],
});
