import { useMemo, useState } from "react"
import { SortBy } from "./types.d"
import UsersList from "./components/UsersList"
import { useUsers } from "./hooks/useUsers"
import Results from "./components/Results"



function App() {
  const { users, isError, isLoading, refetch, fetchNextPage, hasNextPage } = useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = async () => {
    await refetch()
  }

  const handleDeleteUser = (email: string) => {
    // const filteredUsers = users.filter(user => user.email !== email)
    // setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

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
      <Results />
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
        {sortedUsers.length > 0 && (
          <UsersList
            users={sortedUsers}
            showColors={showColors}
            deleteUser={handleDeleteUser}
            changeSorting={handleChangeSort}
          />
        )}
        {isLoading && (
          <p className="text-center font-semibold text-lg">
            Cargando usuarios...
          </p>
        )}
        {isError && (
          <p className="text-center font-semibold text-lg">
            Hubo un error al cargar los usuarios
          </p>
        )}
        {!isLoading && !isError && sortedUsers.length === 0 && (
          <p className="text-center font-semibold text-lg">
            No hay usuarios para mostrar
          </p>
        )}
        {!isLoading 
         && !isError 
         && hasNextPage 
         && sortedUsers.length > 0 
         && (
          <button
            type="button"
            onClick={() => fetchNextPage()}
            className="block my-4 mx-auto"
          >
            Cargar más resultados
          </button>)}
      </main>
    </div>
  )
}

export default App