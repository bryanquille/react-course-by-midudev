import { useEffect, useMemo, useRef, useState } from "react"
import type { UserType } from "./types"
import UsersList from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, serSortByCountry] = useState(false)
  const initialUsers = useRef<UserType[]>([])
  const [filterCountry, setFilterCountry] = useState<string>("")

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        const data = await response.json()
        setUsers(data.results)
        initialUsers.current = data.results
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

  const filteredUsersByCountry = useMemo(() => {
    return filterCountry && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    return sortByCountry
      ? [...filteredUsersByCountry].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
      : filteredUsersByCountry
  }, [filteredUsersByCountry, sortByCountry])

  const handleDeleteUser = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(initialUsers.current)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const country = e.target.value
    setFilterCountry(country)
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
        <button
          type="button"
          onClick={handleReset}
        >
          Reestablecer usuarios
        </button>
        <input
          type="text"
          name="country"
          id="country"
          onChange={handleChange}
          value={filterCountry || ""}
          className="px-4 py-2 border-2 border-neutral-200 rounded-md"
        />
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