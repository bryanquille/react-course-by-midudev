import { useUsers } from "../hooks/useUsers"

function Results() {
  const { users } = useUsers()
  return (
    <h3 className="my-6 font-semibold text-center text-lg">Results: {users.length}</h3>
  )
}

export default Results