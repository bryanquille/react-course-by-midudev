import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = number;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
    github: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@email.com",
    github: "janesmith",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@email.com",
    github: "bobjohnson",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const idToDelete = action.payload;
      return state.filter((user) => user.id !== idToDelete);
    }
  },
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;