import { deleteUserById, addNewUser, type UserId, type User } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleAddUsers = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }))
  }
  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  }
  return {
    handleAddUsers,
    handleDeleteUser
  }
}
