import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser, type UserWithId } from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()))
}

const syncWithDataBaseMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action as { type: string; payload: unknown }
  const previousState = store.getState()
  console.log(previousState)
  next(action)

  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToBeRemoved = previousState.users.find((user: UserWithId) => user.id === userIdToRemove)
    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          toast.success(`Usuario ${userIdToRemove} eliminado correctamente.`)
          return
        }
        throw new Error('Error al eliminar el usuario.')
      })
      .catch((err) => {
        toast.error(`Error al eliminar el usuario ${userIdToRemove}`)
        if (userToBeRemoved) store.dispatch(rollbackUser(userToBeRemoved))
        console.log(err)
        console.log('error')
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDataBaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch