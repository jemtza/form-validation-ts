export type Hobby =
  | "Reading"
  | "Coding"
  | "Drawing"
  | "Watching Movies"
  | "Listening to Music"
  | "Playing Games"
  | "Traveling"
  | "Sports"
  | "Cooking";

export type User = {
  username: string;
  email: string;
  role: "Admin" | "User" | "";
  hobbies: Hobby[];
};

export type Users = User[];
