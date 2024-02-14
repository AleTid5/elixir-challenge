import { UserResponse } from "@/api/users/types.ts";
import UserType from "@/types/user-type.ts";

export const transformDataIntoUsers = (data: UserResponse): UserType[] =>
  data.results.map((user) => ({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    image: user.picture.large,
    country: user.location.country,
    fullLocation: `${user.location.street.name}, ${user.location.city}, ${user.location.state}`,
    coordinates: [
      user.location.coordinates.latitude,
      user.location.coordinates.longitude,
    ],
    age: user.dob.age,
    phoneNumber: user.phone,
    gender: user.gender,
    registerDate: user.registered.date,
  }));
