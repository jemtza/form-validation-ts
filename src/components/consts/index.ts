import { Hobby, User } from "../../types/users";

export const DEFAULT_FORM_DATA: User = {
  username: "",
  role: "",
  email: "",
  hobbies: [],
};

export const roles: { id: number; name: User["role"] }[] = [
  { id: 0, name: "Admin" },
  { id: 1, name: "User" },
];

export const hobbies: { id: number; value: Hobby }[] = [
  { id: 1, value: "Reading" },
  { id: 2, value: "Coding" },
  { id: 3, value: "Drawing" },
  { id: 4, value: "Watching Movies" },
  { id: 5, value: "Listening to Music" },
  { id: 6, value: "Playing Games" },
  { id: 7, value: "Traveling" },
  { id: 8, value: "Sports" },
  { id: 9, value: "Cooking" },
];
