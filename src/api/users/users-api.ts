import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./constants.ts";
import { transformDataIntoUsers } from "./helpers.ts";
import { UserResponse } from "./types.ts";
import UserType from "@/types/user-type.ts";

const fetchUsers = async (): Promise<UserType[]> => {
  const res = await fetch(`${BASE_URL}?results=20`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data: UserResponse = await res.json();

  return transformDataIntoUsers(data);
};

export const useUsers = () =>
  useQuery({ queryKey: ["users"], queryFn: fetchUsers });
