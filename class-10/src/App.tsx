import { useEffect, useState } from "react"
import type { UserType } from "./types"
import UsersList from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [showColors, setShowColors] = useState(false)

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
      </header>
      <main>
        <UsersList
          users={users}
          showColors={showColors}
        />
      </main>
    </div>
  )
}

export default App