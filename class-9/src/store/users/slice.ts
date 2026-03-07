import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@email.com",
    github: "johndoe",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@email.com",
    github: "janesmith",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bobjohnson@email.com",
    github: "bobjohnson",
  },
];

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__")
  if(persistedState) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.push({id, ...action.payload})
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const idToDelete = action.payload;
      return state.filter((user) => user.id !== idToDelete);
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        state.push(action.payload)
      }
    }
  },
});

export default usersSlice.reducer;
export const { deleteUserById, addNewUser, rollbackUser } = usersSlice.actions;