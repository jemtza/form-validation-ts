import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../types/users";

const initialState: Users = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
