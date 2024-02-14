import { UserResponse } from "@/api/users/types.ts";
import UserType from "@/types/user-type.ts";

export const transformDataIntoUsers = (data: UserResponse): UserType[] =>
  data.results.map((user) => ({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    image: user.picture.large,
    country: user.location.country,
    age: user.dob.age,
  }));
