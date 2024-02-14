import { selector } from "recoil";
import { FILTERED_USERS } from "./constants.ts";
import { nameFilterState, usersState } from "./atoms.ts";
import UserType from "@/types/user-type.ts";

export const filteredUsersState = selector({
  key: FILTERED_USERS,
  get: ({ get }) => {
    const nameFilter = get<string>(nameFilterState);
    const users = get<UserType[]>(usersState);

    return users.filter((user) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  },
});
