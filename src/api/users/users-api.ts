import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://randomuser.me/api";

const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}?results=20`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return await res.json();
};

export const useUsers = () =>
  useQuery({ queryKey: ["users"], queryFn: fetchUsers });
