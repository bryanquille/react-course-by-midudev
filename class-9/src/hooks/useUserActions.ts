import { deleteUserById, type UserId } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  }
  return {
    handleDeleteUser
  }
}
