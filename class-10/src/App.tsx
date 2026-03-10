import { useEffect, useState } from "react"
import type { UserType } from "./types"
import UsersList from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, serSortByCountry] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        const data = await response.json()
        setUsers(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    serSortByCountry(prevState => !prevState)
  }

  const sortedUsers = sortByCountry 
    ? [...users].sort((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users

  const handleDeleteUser = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email )
    setUsers(filteredUsers)
  }

  return (
    <div>
      <h1 className="my-6 text-center font-bold text-4xl">Prueba Técnica</h1>
      <header>
        <button
          type="button"
          onClick={toggleColors}
        >
          Colorear filas
        </button>
        <button
          type="button"
          onClick={toggleSortByCountry}
        >
          Ordenar por país
        </button>
      </header>
      <main>
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          deleteUser={handleDeleteUser}
        />
      </main>
    </div>
  )
}

export default App