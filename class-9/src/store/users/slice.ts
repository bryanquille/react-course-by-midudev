import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: number;
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
    // Aquí agregar reducers
  },
});

export default usersSlice.reducer;