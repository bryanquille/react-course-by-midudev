import { useEffect, useMemo, useRef, useState } from "react"
import { SortBy, type UserType } from "./types.d"
import UsersList from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const initialUsers = useRef<UserType[]>([])
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(initialUsers.current)
  }

  const handleDeleteUser = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch('https://randomuser.me/api/?results=10')
        if (!response.ok) {
          throw new Error('Error en la petición')
        }
        const data = await response.json()
        setUsers(data.results)
        initialUsers.current = data.results
      } catch (error) {
        setError(true)
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    if (sorting === SortBy.COUNTRY) {
      return [...filteredUsers].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }

    if (sorting === SortBy.NAME) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }
    if (sorting === SortBy.LAST) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }

    return filteredUsers
  }, [filteredUsers, sorting])





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
          placeholder="Ingresa un país"
          className="px-4 py-2 border-2 border-neutral-200 rounded-md"
        />
      </header>
      <main>
        {loading && (
          <p className="text-center font-semibold text-lg">
            Cargando usuarios...
          </p>
        )}
        {!loading && error && (
          <p className="text-center font-semibold text-lg">
            Hubo un error al cargar los usuarios
          </p>
        )}
        {!loading && !error && sortedUsers.length === 0 && (
          <p className="text-center font-semibold text-lg">
            No hay usuarios para mostrar
          </p>
        )}
        {!loading && !error && sortedUsers.length > 0 && (
          <UsersList
            users={sortedUsers}
            showColors={showColors}
            deleteUser={handleDeleteUser}
            changeSorting={handleChangeSort}
          />
        )}
      </main>
    </div>
  )
}

export default App